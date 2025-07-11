import {
  ExpandLess,
  ExpandMore,
  LocationOn,
  Person,
  Receipt,
} from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Collapse,
  Divider,
  IconButton,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import * as React from 'react';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { DateField, Loading, useTranslate } from 'react-admin';
import * as XLSX from 'xlsx';

import pb from '../api/pocketbase';
import { useCurrencyContext } from '../components/CurrencySelector/CurrencyProvider'; // Import useCurrencyContext
import {
  PBAddress,
  PBCustomer,
  PBOrder,
  PBOrderItem,
  PBProduct,
} from '../model/OrderList';

const OrderListFilter = ({
  setSearchTerm,
}: {
  setSearchTerm: (value: string) => void;
}) => {
  const [searchTerm, setSearchTermState] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTermState(event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <Box sx={{ p: 2, display: 'flex', alignItems: 'center', mb: -1, mt: -2 }}>
      <TextField
        label='Search'
        variant='outlined'
        onChange={handleSearch}
        value={searchTerm}
        fullWidth
      />
    </Box>
  );
};

export const OrderList = () => {
  const translate = useTranslate();

  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Typography variant='h5' component='h5'>
          {translate('pos.orders_management')}
        </Typography>
      </Box>
      <TabbedDatagrid />
    </Box>
  );
};

const tabs = [
  { id: 'pending', name: 'pending' },
  { id: 'purchased', name: 'purchased' },
  { id: 'cancel', name: 'cancel' },
];

interface OrderDetailsCache {
    [key: string]: {
        orderItems: PBOrderItem[];
        customer: PBCustomer | null;
        address: PBAddress | null;
        products: { [key: string]: PBProduct };
        provinceName: string | null;
        districtName: string | null;
    }
}

const TabbedDatagrid = () => {
  const [activeTab, setActiveTab] = useState<string>('pending');
  const [orderCounts, setOrderCounts] = useState<{ [key: string]: number }>({});
  const [searchTerm, setSearchTerm] = useState('');
  const { currency } = useCurrencyContext();
  const isXSmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down('sm')
  );

  // Fetch order counts for each status
  useEffect(() => {
    const fetchOrderCounts = async () => {
      try {
        const counts: { [key: string]: number } = {};

        for (const tab of tabs) {
          const response = await pb.collection('orders').getList(1, 1, {
            filter: `status = "${tab.id}"`,
          });
          counts[tab.id] = response.totalItems;
        }

        setOrderCounts(counts);
      } catch (error) {
        console.error('Error fetching order counts:', error);
      }
    };

    fetchOrderCounts();
  }, []);

  const handleChange = useCallback(
    (event: React.SyntheticEvent, value: string) => {
      setActiveTab(value);

      if (isXSmall) {
        const tabsContainer = document.querySelector('[role="tablist"]');
        if (tabsContainer) {
          tabsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    },
    [isXSmall]
  );

  const downloadExcel = async () => {
    try {
      let filter = `status = "${activeTab}"`;
      if (searchTerm) {
        const searchFilter = `(reference_id ~ "${searchTerm}" || customer_name ~ "${searchTerm}" || phone_number ~ "${searchTerm}" || address ~ "${searchTerm}")`;
        filter += ` && ${searchFilter}`;
      }

      const records = await pb.collection('orders').getFullList({
        filter: filter,
        sort: '-created',
      });

      const data = await Promise.all(
        records.map(async (order: any) => {
          const itemsResponse = await pb
            .collection('order_items')
            .getList(1, 50, {
              filter: `order_id = "${order.id}"`,
            });
          const orderItems = itemsResponse.items as unknown as PBOrderItem[];

          const totals = orderItems.reduce(
            (totals, item) => {
              return {
                lak: totals.lak + item.quantity * item.price_lak,
                usd: totals.usd + item.quantity * item.price_usd,
                thb: totals.thb + item.quantity * item.price_thb,
              };
            },
            { lak: 0, usd: 0, thb: 0 }
          );

          let total = 0;
          switch (currency) {
            case 'LAK':
              total = totals.lak;
              break;
            case 'USD':
              total = totals.usd;
              break;
            case 'THB':
              total = totals.thb;
              break;
          }

          return {
            Date: new Date(order.created).toLocaleString(),
            Reference: order.reference_id,
            Customer: order.customer_name,
            Phone: order.phone_number,
            Address: order.address,
            Status: order.status,
            Total: total,
            Currency: currency,
          };
        })
      );

      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Orders');
      XLSX.writeFile(wb, `orders_${activeTab}.xlsx`);
    } catch (error) {
      console.error('Error downloading Excel:', error);
    }
  };

  return (
    <Fragment>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <OrderListFilter setSearchTerm={setSearchTerm} />
        <Button
          variant='contained'
          onClick={downloadExcel}
          sx={{ m: 2, ml: 'auto', height: '50px' }}
        >
          Export
        </Button>
      </Box>
      <Tabs
        variant='scrollable'
        scrollButtons='auto'
        value={activeTab}
        indicatorColor='primary'
        onChange={(event, value) => handleChange(event, value)}
      >
        {tabs.map((choice) => (
          <Tab
            key={choice.id}
            label={
              <span>
                {choice.name} ({orderCounts[choice.id] || 0})
              </span>
            }
            value={choice.id}
          />
        ))}
      </Tabs>
      <Divider />
      <br />
      <OrdersTable status={activeTab} searchTerm={searchTerm} />
    </Fragment>
  );
};

// Order Detail Component
const OrderDetail: React.FC<{ order: PBOrder, details: any, onToggle: () => void, open: boolean }> = ({ order, details, onToggle, open }) => {
  const { currency } = useCurrencyContext();

  const calculateTotals = () => {
    if (!details || !details.orderItems) return { lak: 0, usd: 0, thb: 0 };
    return details.orderItems.reduce(
      (totals:any, item:any) => {
        return {
          lak: totals.lak + item.quantity * item.price_lak,
          usd: totals.usd + item.quantity * item.price_usd,
          thb: totals.thb + item.quantity * item.price_thb,
        };
      },
      { lak: 0, usd: 0, thb: 0 }
    );
  };

  const totals = calculateTotals();

  const formatCurrency = (amount: number, currencyType: string) => {
    switch (currencyType) {
      case 'LAK':
        return `₭${amount.toLocaleString()}`;
      case 'USD':
        return `$${amount.toFixed(2)}`;
      case 'THB':
        return `฿${amount.toFixed(2)}`;
      default:
        return amount.toString();
    }
  };

  const getCurrentTotal = () => {
    switch (currency) {
      case 'LAK':
        return formatCurrency(totals.lak, 'LAK');
      case 'USD':
        return formatCurrency(totals.usd, 'USD');
      case 'THB':
        return formatCurrency(totals.thb, 'THB');
      default:
        return formatCurrency(totals.usd, 'USD');
    }
  };

  return (
    <>
      <TableRow>
        <TableCell>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton onClick={onToggle} size='small'>
              {open ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
            <DateField source='created' record={order} showTime />
          </Box>
        </TableCell>
        <TableCell>{order.reference_id}</TableCell>
        <TableCell>{order.customer_name}</TableCell>
        <TableCell>{order.phone_number}</TableCell>
        <TableCell>{order.address}</TableCell>
        <TableCell>
          <Chip
            label={order.status}
            color={
              order.status === 'pending'
                ? 'warning'
                : order.status === 'purchased'
                ? 'success'
                : 'error'
            }
            size='small'
          />
        </TableCell>
        <TableCell>{getCurrentTotal()}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={7} sx={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 2 }}>
              {!details || !details.customer ? (
                <Loading />
              ) : (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 3,
                    flexWrap: 'wrap',
                  }}
                >
                  {/* Order Information, Items, and Totals Section */}
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, width: '100%' }}>
                    {/* Order Information Section */}
                    <Box sx={{ width: { xs: '100%', md: '33%' } }}>
                      <Card>
                        <CardContent>
                          <Typography variant='h6' gutterBottom>
                            <Receipt sx={{ mr: 1, verticalAlign: 'middle' }} />
                            Order Information
                          </Typography>
                          <Typography variant='body2' color='text.secondary'>
                            <strong>Reference:</strong> {order.reference_id}
                          </Typography>
                          <Typography variant='body2' color='text.secondary'>
                            <strong>Created:</strong>{' '}
                            {new Date(order.created).toLocaleString()}
                          </Typography>
                          <Typography variant='body2' color='text.secondary'>
                            <strong>Status:</strong> {order.status}
                          </Typography>
                          {order.remark && (
                            <Typography variant='body2' color='text.secondary'>
                              <strong>Remark:</strong> {order.remark}
                            </Typography>
                          )}
                          {details.customer && (
                            <Box sx={{ mt: 2 }}>
                              <Typography variant='subtitle2' gutterBottom>
                                <Person sx={{ mr: 1, verticalAlign: 'middle' }} />
                                Customer Details
                              </Typography>
                              <Typography variant='body2' color='text.secondary'>
                                <strong>Name:</strong>{' '}
                                {details.customer.name ||
                                  details.customer.username}
                              </Typography>
                              <Typography variant='body2' color='text.secondary'>
                                <strong>Email:</strong> {details.customer.email}
                              </Typography>
                              <Typography variant='body2' color='text.secondary'>
                                <strong>Phone:</strong>{' '}
                                {details.customer.phone_number}
                              </Typography>
                              <Typography variant='body2' color='text.secondary'>
                                <strong>Verified:</strong>{' '}
                                {details.customer.verified ? 'Yes' : 'No'}
                              </Typography>
                            </Box>
                          )}
                          {details.address && (
                            <Box sx={{ mt: 2 }}>
                              <Typography variant='subtitle2' gutterBottom>
                                <LocationOn
                                  sx={{ mr: 1, verticalAlign: 'middle' }}
                                />
                                Shipping Address
                              </Typography>
                              <Typography variant='body2' color='text.secondary'>
                                <strong>Name:</strong>{' '}
                                {details.address.shipping_name}
                              </Typography>
                              <Typography variant='body2' color='text.secondary'>
                                <strong>Village:</strong>{' '}
                                {details.address.village}
                              </Typography>
                              <Typography variant='body2' color='text.secondary'>
                                <strong>District:</strong>{' '}
                                {details.districtName ||
                                  details.address.district_id}
                              </Typography>
                              <Typography variant='body2' color='text.secondary'>
                                <strong>Province:</strong>{' '}
                                {details.provinceName ||
                                  details.address.province_id}
                              </Typography>
                            </Box>
                          )}
                        </CardContent>
                      </Card>
                    </Box>

                    {/* Order Items Section */}
                    <Box sx={{ width: { xs: '100%', md: '33%' } }}>
                      <Card>
                        <CardContent>
                          <Typography variant='h6' gutterBottom>
                            Order Items
                          </Typography>
                          {details.orderItems.length > 0 ? (
                            <TableContainer>
                              <Table size='small'>
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Image</TableCell>
                                    <TableCell>Product</TableCell>
                                    <TableCell align='right'>Qty</TableCell>
                                    <TableCell align='right'>Price</TableCell>
                                    <TableCell align='right'>Total</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {details.orderItems.map((item: any) => {
                                    const product =
                                      details.products[item.product_id];
                                    const getPrice = () => {
                                      switch (currency) {
                                        case 'LAK':
                                          return item.price_lak;
                                        case 'USD':
                                          return item.price_usd;
                                        case 'THB':
                                          return item.price_thb;
                                        default:
                                          return item.price_usd;
                                      }
                                    };
                                    const price = getPrice();
                                    const total = price * item.quantity;

                                    return (
                                      <TableRow key={item.id}>
                                        <TableCell>
                                          {product?.image_url && (
                                            <img
                                              src={product.image_url}
                                              alt={product.name}
                                              style={{
                                                width: 50,
                                                height: 50,
                                                objectFit: 'cover',
                                              }}
                                            />
                                          )}
                                        </TableCell>
                                        <TableCell>
                                          {product?.name || item.product_name}
                                        </TableCell>
                                        <TableCell align='right'>
                                          {item.quantity}
                                        </TableCell>
                                        <TableCell align='right'>
                                          {formatCurrency(price, currency)}
                                        </TableCell>
                                        <TableCell align='right'>
                                          {formatCurrency(total, currency)}
                                        </TableCell>
                                      </TableRow>
                                    );
                                  })}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          ) : (
                            <Typography variant='body2' color='text.secondary'>
                              No items found
                            </Typography>
                          )}
                        </CardContent>
                      </Card>
                    </Box>

                    {/* Order Totals Section */}
                    <Box sx={{ width: { xs: '100%', md: '33%' } }}>
                      <Card>
                        <CardContent>
                          <Typography variant='h6' gutterBottom>
                            Order Totals
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 1,
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                              }}
                            >
                              <Typography variant='body2'>LAK:</Typography>
                              <Typography variant='body2' fontWeight='bold'>
                                {formatCurrency(totals.lak, 'LAK')}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                              }}
                            >
                              <Typography variant='body2'>USD:</Typography>
                              <Typography variant='body2' fontWeight='bold'>
                                {formatCurrency(totals.usd, 'USD')}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                              }}
                            >
                              <Typography variant='body2'>THB:</Typography>
                              <Typography variant='body2' fontWeight='bold'>
                                {formatCurrency(totals.thb, 'THB')}
                              </Typography>
                            </Box>
                            <Divider sx={{ my: 1 }} />
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                              }}
                            >
                              <Typography variant='body1' fontWeight='bold'>
                                Current ({currency}):
                              </Typography>
                              <Typography
                                variant='body1'
                                fontWeight='bold'
                                color='primary'
                              >
                                {getCurrentTotal()}
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

// Custom Orders Table with PocketBase integration
const OrdersTable = React.memo(
  ({ status, searchTerm }: { status: string; searchTerm: string }) => {
    const [orders, setOrders] = useState<PBOrder[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [openOrderId, setOpenOrderId] = useState<string | null>(null);
    const [detailsCache, setDetailsCache] = useState<OrderDetailsCache>({});

    const fetchOrderDetails = async (orderId: string) => {
        if (detailsCache[orderId] && detailsCache[orderId].customer) return;

        try {
            const order = orders.find(o => o.id === orderId);
            let customer: PBCustomer | null = null;
            if (order && order.customer_id) {
                try {
                    customer = await pb.collection('customers').getOne(order.customer_id) as PBCustomer;
                } catch (err) {
                    console.warn('Failed to fetch customer:', err);
                }
            }

            let address: PBAddress | null = null;
            let provinceName: string | null = null;
            let districtName: string | null = null;
            if (order && order.address_id) {
                try {
                    address = await pb.collection('addresses').getOne(order.address_id) as PBAddress;
                    if (address.province_id) {
                        try {
                            const provinceData = await pb.collection('provinces').getOne(address.province_id);
                            provinceName = provinceData.name;
                        } catch (err) {
                            console.warn('Failed to fetch province:', err);
                        }
                    }
                    if (address.district_id) {
                        try {
                            const districtData = await pb.collection('districts').getOne(address.district_id);
                            districtName = districtData.name;
                        } catch (err) {
                            console.warn('Failed to fetch district:', err);
                        }
                    }
                } catch (err) {
                    console.warn('Failed to fetch address:', err);
                }
            }

            const productIds = detailsCache[orderId].orderItems.map((item) => item.product_id);
            const uniqueProductIds = Array.from(new Set(productIds));
            const productPromises = uniqueProductIds.map(async (productId) => {
                try {
                    const productData = await pb.collection('products').getOne(productId);
                    return { id: productId, data: productData as unknown as PBProduct };
                } catch (err) {
                    console.warn(`Failed to fetch product ${productId}:`, err);
                    return null;
                }
            });
            const productResults = await Promise.all(productPromises);
            const products: { [key: string]: PBProduct } = {};
            productResults.forEach((result) => {
                if (result) {
                    products[result.id] = result.data;
                }
            });

            setDetailsCache(prev => ({ ...prev, [orderId]: { ...prev[orderId], customer, address, products, provinceName, districtName } }));
        } catch (err) {
            console.error('Error fetching order details:', err);
        }
    };

    const handleToggle = (orderId: string) => {
        const newOpenOrderId = openOrderId === orderId ? null : orderId;
        setOpenOrderId(newOpenOrderId);
        if (newOpenOrderId) {
            fetchOrderDetails(newOpenOrderId);
        }
    };

    useEffect(() => {
      const fetchOrders = async () => {
        setLoading(true);
        setError(null);

        try {
          let filter = `status = "${status}"`;
          if (searchTerm) {
            const searchFilter = `(reference_id ~ "${searchTerm}" || customer_name ~ "${searchTerm}" || phone_number ~ "${searchTerm}" || address ~ "${searchTerm}")`;
            filter += ` && ${searchFilter}`;
          }

          const response = await pb.collection('orders').getList(1, 50, {
            filter: filter,
            sort: '-created',
          });
          const orders = response.items as unknown as PBOrder[];
          setOrders(orders);

          const newDetailsCache: OrderDetailsCache = {};
          await Promise.all(orders.map(async (order) => {
            const itemsResponse = await pb.collection('order_items').getList(1, 50, {
                filter: `order_id = "${order.id}"`,
            });
            const orderItems = itemsResponse.items as unknown as PBOrderItem[];
            newDetailsCache[order.id] = { orderItems, customer: null, address: null, products: {}, provinceName: null, districtName: null };
          }));
          setDetailsCache(newDetailsCache);

        } catch (err) {
          console.error('Error fetching orders:', err);
          setError('Failed to load orders');
        } finally {
          setLoading(false);
        }
      };

      fetchOrders();
    }, [status, searchTerm]);

    if (loading) return <Loading />;
    if (error) return <Alert severity='error'>{error}</Alert>;

    if (orders.length === 0) {
      return (
        <Box sx={{ p: 2 }}>
          <Typography variant='body1' color='text.secondary'>
            No orders found for status: {status}
          </Typography>
        </Box>
      );
    }
    if (!Array.isArray(orders)) {
      return (
        <Box sx={{ p: 2 }}>
          <Alert severity='error'>Invalid data format for orders</Alert>
        </Box>
      );
    }

    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Reference</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <OrderDetail key={order.id} order={order} details={detailsCache[order.id]} onToggle={() => handleToggle(order.id)} open={openOrderId === order.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
);

export default OrderList;
