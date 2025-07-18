import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import {
  DateField,
  RecordContextProvider,
  Show,
  SimpleShowLayout,
  TextField,
  useRecordContext,
  useTranslate,
} from 'react-admin';

// A custom component to display the customer's avatar and basic info
const CustomerTitle = () => {
  const record = useRecordContext();
  const translate = useTranslate();
  if (!record) return null;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
      <Avatar src={record.avatar} sx={{ width: 60, height: 60 }} />
      <Box>
        <Typography variant='h6'>{record.name}</Typography>
        <Typography color='textSecondary' variant='body2'>
          {translate('username')}: @{record.username}
        </Typography>
      </Box>
    </Box>
  );
};

const AddressField = () => {
  const record = useRecordContext();
  const translate = useTranslate();
  if (!record || !record.address) return null;

  const { address, province, district } = record;
  const isInternational = address.is_international;

  const addressRows = [
    { label: translate('shipping_name'), value: address.shipping_name },
    { label: translate('address_line_1'), value: address.address_line_1 },
    { label: translate('address_line_2'), value: address.address_line_2 },
  ];

  if (isInternational) {
    addressRows.push(
      { label: translate('city'), value: address.city },
      { label: translate('state_region'), value: address.state_region },
      { label: translate('postal_code'), value: address.postal_code },
      { label: translate('country'), value: address.country_name }
    );
  } else {
    addressRows.push(
      { label: translate('village'), value: address.village },
      { label: translate('province'), value: province },
      { label: translate('district'), value: district }
    );
  }

  return (
    <Paper elevation={2} sx={{ width: '100%', mt: 2 }}>
      <Table sx={{ '& .MuiTableCell-root': { padding: '8px' } }}>
        <TableBody>
          {addressRows.map((row) => (
            <TableRow key={row.label}>
              <TableCell
                component='th'
                scope='row'
                sx={{ fontWeight: 'bold', width: '11%', textAlign: 'right' }}
              >
                {row.label}:
              </TableCell>
              <TableCell>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

const CustomerShowLayout = () => {
  const record = useRecordContext();
  const translate = useTranslate();
  if (!record) return null;

  // Flatten the nested address, province, and district data for easier use
  const transformedRecord = {
    ...record,
    address: record.expand?.address_id,
    province: record.expand?.address_id?.expand?.province_id?.name,
    district: record.expand?.address_id?.expand?.district_id?.name,
  };

  return (
    // Provide the transformed record to all child components
    <RecordContextProvider value={transformedRecord}>
      <SimpleShowLayout>
        <CustomerTitle />

        <Typography variant='h6' gutterBottom>
          {translate('personal_information')}
        </Typography>
        <TextField
          source='email'
          label={translate('email')}
        />
        <TextField
          source='phone_number'
          label={translate('phone_number')}
        />

        {/* Display address only if it exists */}
        {transformedRecord.address && (
          <>
            <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
              {translate('address')}
            </Typography>
            <AddressField />
          </>
        )}

        <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
          {translate('account_history')}
        </Typography>
        <DateField source='created' label={translate('created_at')} showTime />
        <DateField
          source='updated'
          label={translate('last_updated')}
          showTime
        />
      </SimpleShowLayout>
    </RecordContextProvider>
  );
};

const CustomerShow = () => (
  <Show>
    <CustomerShowLayout />
  </Show>
);

export default CustomerShow;
