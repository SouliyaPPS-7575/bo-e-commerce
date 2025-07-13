import {
  Edit,
  required,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  TopToolbar,
  ShowButton,
} from 'react-admin';
import { Box, Typography } from '@mui/material';

const CCYEditActions = () => (
  <TopToolbar>
    <ShowButton />
  </TopToolbar>
);

const CurrencyEdit = () => {

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
    <Edit actions={<CCYEditActions />}>
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
