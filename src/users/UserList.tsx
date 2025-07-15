import { Download, LockReset } from '@mui/icons-material';
import { Avatar, Button, Switch } from '@mui/material';
import * as React from 'react';
import {
  ColumnsButton,
  Confirm,
  CreateButton,
  DataTable,
  DateField,
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
import pb from '../api/pocketbase';
import { User } from '../dataProvider/usersDataProvider';

const userFilters = [
  <SearchInput key='q' source='q' alwaysOn />,
  <SelectInput
    key='verified'
    source='verified'
    choices={[
      { id: '', name: 'All Status' },
      { id: true, name: 'Verified' },
      { id: false, name: 'Unverified' },
    ]}
    label='Status'
    emptyText='All Status'
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
  <SearchInput
    key='username'
    source='username'
    label='Search by Username'
    placeholder='Enter username'
  />,
];

const UserListActions = () => {
  const dataProvider = useDataProvider();
  const notify = useNotify();

  const handleExportExcel = async () => {
    try {
      const { data } = await dataProvider.getList('users', {
        pagination: { page: 1, perPage: 1000 },
        sort: { field: 'created', order: 'DESC' },
        filter: {},
      });

      const exportData = data.map((user: User) => ({
        'Full Name': user.full_name,
        Username: user.username,
        Email: user.email,
        Phone: user.phone_number,
        Verified: user.verified ? 'Yes' : 'No',
        Created: new Date(user.created).toLocaleDateString(),
        Updated: new Date(user.updated).toLocaleDateString(),
      }));

      const worksheet = XLSX.utils.json_to_sheet(exportData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');

      XLSX.writeFile(
        workbook,
        `users_export_${new Date().toISOString().split('T')[0]}.xlsx`
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
      <CreateButton />
      <ColumnsButton />
    </TopToolbar>
  );
};

const UserTitle = () => {
  const title = useDefaultTitle();
  const { defaultTitle } = useListContext();
  return (
    <>
      <title>{`${title} - ${defaultTitle}`}</title>
      <span>{defaultTitle}</span>
    </>
  );
};

const Column = DataTable.Col<User>;

const VerifiedField = (record: User) => {
  const [update] = useUpdate();
  const notify = useNotify();
  const refresh = useRefresh();

  const handleVerifiedChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.stopPropagation();
    if (!record) return;

    const newVerified = event.target.checked;
    try {
      await update('users', {
        id: record.id,
        data: { ...record, verified: newVerified },
        previousData: record,
      });
      notify(`User ${newVerified ? 'verified' : 'unverified'} successfully`, {
        type: 'success',
      });
      refresh();
    } catch (error) {
      notify('Error updating verification status', { type: 'error' });
    }
  };

  return (
    <Switch
      checked={record?.verified || false}
      onChange={handleVerifiedChange}
      size='small'
      color='success'
    />
  );
};

const AvatarField = (record: User) => {
  if (!record?.avatar) return null;

  return (
    <Avatar
      src={record.avatar}
      alt={record.username}
      sx={{ width: 32, height: 32 }}
    />
  );
};

const BlackEmailField = (props: any) => (
  <EmailField sx={{ color: 'black' }} {...props} />
);

const UserList = () => {
  const isAdmin = localStorage.getItem('role') === 'admin';

  console.log('=> isAdmin', isAdmin);

  return (
    <List
      filters={userFilters}
      sort={{ field: 'created', order: 'DESC' }}
      perPage={25}
      actions={<UserListActions />}
      title={<UserTitle />}
    >
      <DataTable
        rowClick='edit'
        sx={{
          '& .column-phone_number': {
            md: { display: 'none' },
            lg: { display: 'table-cell' },
          },
        }}
      >
        <Column source='avatar' render={AvatarField} />
        <Column source='full_name' label='Full Name' />
        <Column source='username' label='Username' />
        <Column source='email' field={BlackEmailField} />
        <Column source='phone_number' label='Phone' />
        <Column source='role' label='Role' />
        {/* <Column source='verified' render={VerifiedField} label='Verified' /> */}

        <Column source='created' field={DateField} label='Created' />
        <Column source='updated' field={DateField} label='Updated' />
        {isAdmin && (
          <Column
            source='reset_password'
            label='Reset Password'
            render={(record) => <ResetPasswordButton record={record} />}
          />
        )}
      </DataTable>
    </List>
  );
};

const ResetPasswordButton = ({ record }: { record: User }) => {
  const notify = useNotify();
  const [open, setOpen] = React.useState(false);

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent row click from triggering edit form
    setOpen(true);
  };

  const handleConfirm = async () => {
    setOpen(false);
    if (!record || !record.email) {
      notify('User email not found', { type: 'warning' });
      return;
    }
    try {
      await pb.collection('users').requestPasswordReset(record.email);
      notify(`Password reset email sent to ${record.email}`, {
        type: 'success',
      });
    } catch (error) {
      console.error('Error requesting password reset:', error);
      notify(`Failed to send password reset email to ${record.email}`, {
        type: 'error',
      });
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button size='small' onClick={handleClick} startIcon={<LockReset />}>
        Reset
      </Button>
      <Confirm
        isOpen={open}
        title='Reset Password'
        content={`Are you sure you want to send a password reset email to ${record.email}?`}
        onConfirm={handleConfirm}
        onClose={handleCancel}
      />
    </>
  );
};

export default UserList;
