import * as React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    NumberField,
    DateField,
    TopToolbar,
    EditButton,
    DeleteButton,
} from 'react-admin';
import { Box } from '@mui/material';

const CurrencyShowActions = () => (
    <TopToolbar>
        <EditButton />
        <DeleteButton />
    </TopToolbar>
);

const CurrencyShow = () => (
    <Show actions={<CurrencyShowActions />}>
        <SimpleShowLayout>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField source="id" label="ID" />
                <TextField source="ccy" label="Currency Code" />
                <TextField source="type" label="Type" />
                <NumberField source="rate" label="Exchange Rate" />
                <DateField source="created" label="Created" showTime />
                <DateField source="updated" label="Last Updated" showTime />
            </Box>
        </SimpleShowLayout>
    </Show>
);

export default CurrencyShow;