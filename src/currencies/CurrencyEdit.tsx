import * as React from 'react';
import {
  Edit,
  required,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  useNotify,
  useRedirect,
} from 'react-admin';
import { Box, Typography } from '@mui/material';

const CurrencyEdit = () => {
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
    <Edit
      resource="currency"
      title="Edit Currency"
      mutationOptions={{
        onSuccess: (data: any) => {
          console.log('Currency update success:', data);
          notify('Currency updated successfully', { type: 'success' });
          redirect('list', 'currency');
        },
        onError: (error: any) => {
          console.error('Currency update error:', error);
          notify(`Error updating currency: ${error.message || 'Unknown error'}`, { type: 'error' });
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
    </Edit>
  );
};

export default CurrencyEdit;
