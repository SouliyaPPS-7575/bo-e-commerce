import {
  Show,
  SimpleShowLayout,
  TextField,
  EmailField,
  DateField,
  useRecordContext,
  RecordContextProvider,
  BooleanField,
  Labeled,
} from 'react-admin';
import {
  Typography,
  Box,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from '@mui/material';

// A custom component to display the customer's avatar and basic info
const CustomerTitle = () => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
      <Avatar src={record.avatar} sx={{ width: 60, height: 60 }} />
      <Box>
        <Typography variant="h6">{record.name}</Typography>
        <Typography color="textSecondary" variant="body2">
          @{record.username}
        </Typography>
      </Box>
    </Box>
  );
};

const AddressField = () => {
  const record = useRecordContext();
  if (!record || !record.address) return null;

  const { address, province, district } = record;
  const isInternational = address.is_international;

  const addressRows = [
    { label: 'Shipping Name', value: address.shipping_name },
    { label: 'Address Line 1', value: address.address_line_1 },
    { label: 'Address Line 2', value: address.address_line_2 },
  ];

  if (isInternational) {
    addressRows.push(
      { label: 'City', value: address.city },
      { label: 'State/Region', value: address.state_region },
      { label: 'Postal Code', value: address.postal_code },
      { label: 'Country', value: address.country_name }
    );
  } else {
    addressRows.push(
      { label: 'Village', value: address.village },
      { label: 'Province', value: province },
      { label: 'District', value: district }
    );
  }

  // addressRows.push({ label: 'International', value: <BooleanField source="address.is_international" /> });

  return (
    <Paper elevation={2} sx={{ width: '100%', mt: 2 }}>
      <Table sx={{ '& .MuiTableCell-root': { padding: '8px' } }}>
        <TableBody>
          {addressRows.map((row) => (
            <TableRow key={row.label}>
              <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', width: '11%', textAlign: 'right' }}>
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

        <Typography variant="h6" gutterBottom>
          Personal Information
        </Typography>
        <TextField source="email" />
        <TextField source="phone_number" />

        {/* Display address only if it exists */}
        {transformedRecord.address && (
          <>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Address
            </Typography>
            <AddressField />
          </>
        )}

        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Account History
        </Typography>
        <DateField source="created" label="Created at" showTime />
        <DateField source="updated" label="Last updated" showTime />
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