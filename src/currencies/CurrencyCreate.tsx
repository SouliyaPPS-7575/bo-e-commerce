import * as React from 'react';
import {
    Create,
    required,
    SimpleForm,
    TextInput,
    NumberInput,
    SelectInput,
    useNotify,
    useRedirect,
} from 'react-admin';
import { Box, Typography } from '@mui/material';

const CurrencyCreate = () => {
    const notify = useNotify();
    const redirect = useRedirect();

    const validateForm = (values: any) => {
        const errors: any = {};
        if (!values.ccy) {
            errors.ccy = 'Currency code is required';
        }
        if (!values.type) {
            errors.type = 'Type is required';
        }
        if (!values.rate || values.rate <= 0) {
            errors.rate = 'Rate must be greater than 0';
        }
        return errors;
    };

    return (
        <Create
            title="Create Currency"
            mutationOptions={{
                onSuccess: () => {
                    notify('Currency created successfully', { type: 'success' });
                    redirect('list', 'currencies');
                },
                onError: (error: any) => {
                    notify(`Error creating currency: ${error.message}`, { type: 'error' });
                },
            }}
        >
            <SimpleForm validate={validateForm}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600 }}>
                    <Typography variant="h6" gutterBottom>
                        Currency Information
                    </Typography>
                    
                    <TextInput
                        source="ccy"
                        validate={[required()]}
                        fullWidth
                        label="Currency Code"
                        helperText="e.g., USD, EUR, LAK"
                    />
                    
                    <SelectInput
                        source="type"
                        validate={[required()]}
                        choices={[
                            { id: 'BUY', name: 'BUY' },
                            { id: 'SELL', name: 'SELL' },
                        ]}
                        fullWidth
                        label="Type"
                    />
                    
                    <NumberInput
                        source="rate"
                        validate={[required()]}
                        fullWidth
                        label="Exchange Rate"
                        helperText="Exchange rate value"
                    />
                </Box>
            </SimpleForm>
        </Create>
    );
};

export default CurrencyCreate;