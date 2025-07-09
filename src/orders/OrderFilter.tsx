import { TextInput } from 'react-admin';
import { Box } from '@mui/material';

const OrderFilter = () => (
    <Box sx={{ p: 2 }}>
        <TextInput label="Search" source="q" alwaysOn />
    </Box>
);

export default OrderFilter;
