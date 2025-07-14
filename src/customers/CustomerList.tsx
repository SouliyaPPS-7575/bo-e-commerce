import { Download } from '@mui/icons-material';
import {
  Avatar,
  Button,
  FormControlLabel,
  Switch,
  Select as MuiSelect,
  MenuItem,
} from '@mui/material';
import * as React from 'react';
import {
  ColumnsButton,
  CreateButton,
  DataTable,
  EmailField,
  List,
  SearchInput,
  SelectInput,
  TopToolbar,
  useDataProvider,
  useDefaultTitle,
  useListContext,
  useNotify,
  useRefresh,
  useUpdate,
} from 'react-admin';
import * as XLSX from 'xlsx';
import { Customer } from '../dataProvider/customersDataProvider';

const customerFilters = [
  <SearchInput key='q' source='q' alwaysOn />,
  <SelectInput
    key='verified'
    source='verified'
    choices={[
      { id: '', name: 'All Status' },
      { id: 'true', name: 'Verified' },
      { id: 'false', name: 'Unverified' },
    ]}
    label='Status'
    emptyText='All Status'
  />,
  <SelectInput
    key='has_ordered'
    source='has_ordered'
    choices={[
      { id: '', name: 'All Customers' },
      { id: true, name: 'Has Orders' },
      { id: false, name: 'No Orders' },
    ]}
    label='Order Status'
    emptyText='All Customers'
  />,
  <SelectInput
    key='emailVisibility'
    source='emailVisibility'
    choices={[
      { id: '', name: 'All Email Visibility' },
      { id: true, name: 'Email Visible' },
      { id: false, name: 'Email Hidden' },
    ]}
    label='Email Visibility'
    emptyText='All Email Visibility'
  />,
  <SearchInput
    key='email'
    source='email'
    label='Search by Email'
    placeholder='Enter email address'
  />,
];

const CustomerListActions = () => {
  const dataProvider = useDataProvider();
  const notify = useNotify();

  const handleExportExcel = async () => {
    try {
      const { data } = await dataProvider.getList('customers', {
        pagination: { page: 1, perPage: 1000 },
        sort: { field: 'created', order: 'DESC' },
        filter: {},
      });

      const exportData = data.map((customer: Customer) => ({
        Name: customer.name,
        Username: customer.username,
        Email: customer.email,
        Phone: customer.phone_number,
        Verified: customer.verified ? 'Yes' : 'No',
        Created: new Date(customer.created).toLocaleDateString(),
        Updated: new Date(customer.updated).toLocaleDateString(),
      }));

      const worksheet = XLSX.utils.json_to_sheet(exportData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Customers');

      XLSX.writeFile(
        workbook,
        `customers_export_${new Date().toISOString().split('T')[0]}.xlsx`
      );
      notify('Excel file exported successfully', { type: 'success' });
    } catch (error) {
      notify('Failed to export Excel file', { type: 'error' });
    }
  };

  return (
    <TopToolbar>
      <Button
        onClick={handleExportExcel}
        startIcon={<Download />}
        variant='outlined'
        size='small'
      >
        Export Excel
      </Button>
    </TopToolbar>
  );
};

const CustomerTitle = () => {
  const title = useDefaultTitle();
  const { defaultTitle } = useListContext();
  return (
    <>
      <title>{`${title} - ${defaultTitle}`}</title>
      <span>{defaultTitle}</span>
    </>
  );
};

const Column = DataTable.Col<Customer>;

const AvatarField = (record: Customer) => {
  if (!record?.avatar) return null;

  return (
    <Avatar
      src={record.avatar}
      alt={record.name}
      sx={{ width: 32, height: 32 }}
    />
  );
};

const AccountStatusField = (record: Customer) => {
  const [update] = useUpdate();
  const notify = useNotify();
  const refresh = useRefresh();

  const handleStatusChange = async (event: any) => {
    const newStatus = event.target.value === 'true' ? true : false;
    try {
      await update('customers', {
        id: record.id,
        data: { ...record, verified: newStatus },
        previousData: record,
      });
      notify(`Account status updated to ${newStatus ? 'Active' : 'Inactive'}`, {
        type: 'success',
      });
      refresh();
    } catch (error) {
      notify('Error updating account status', { type: 'error' });
    }
  };

  return (
    <MuiSelect
      value={record.verified ? 'true' : 'false'}
      onChange={handleStatusChange}
      variant='outlined'
      size='small'
      sx={{
        width: 120,
        color: record.verified ? 'green' : 'red',
        fontWeight: 'bold',
        '& .MuiSelect-select': {
          paddingRight: '24px !important',
        },
      }}
    >
      <MenuItem value='true' sx={{ color: 'green' }}>
        Active
      </MenuItem>
      <MenuItem value='false' sx={{ color: 'red' }}>
        Inactive
      </MenuItem>
    </MuiSelect>
  );
};

const BlackEmailField = (props: any) => (
  <EmailField sx={{ color: 'black' }} {...props} />
);

const CustomerList = () => {
  return (
    <List
      filters={customerFilters}
      sort={{ field: 'created', order: 'DESC' }}
      perPage={25}
      actions={<CustomerListActions />}
      title={<CustomerTitle />}
    >
      <DataTable
        rowClick='show'
        sx={{
          '& .column-avatar': {
            width: '48px',
          },
          '& .column-phone_number': {
            md: { display: 'none' },
            lg: { display: 'table-cell' },
          },
        }}
      >
        <Column source='avatar' render={AvatarField} />
        <Column source='name' label='Name' />
        <Column source='username' label='Username' />
        <Column source='email' field={BlackEmailField} />
        <Column source='phone_number' label='Phone' />
        <Column source='verified' render={AccountStatusField} label='Status' />
      </DataTable>
    </List>
  );
};

export default CustomerList;
