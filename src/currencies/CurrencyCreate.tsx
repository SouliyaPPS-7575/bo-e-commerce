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
  useTranslate,
} from 'react-admin';
import { Box, Typography } from '@mui/material';

const CurrencyCreate = () => {
  const notify = useNotify();
  const redirect = useRedirect();
  const translate = useTranslate();

  const validateForm = (values: any) => {
    const errors: any = {};
    if (!values.ccy) {
      errors.ccy = translate('code_required');
    }
    if (!values.type) {
      errors.type = translate('type_required');
    }
    if (!values.rate || values.rate <= 0) {
      errors.rate = translate('rate_positive');
    }
    return errors;
  };

  return (
    <Create
      resource='currency'
      title={translate('currency.create.title')}
      mutationOptions={{
        onSuccess: () => {
          notify(translate('currency.create.success'), { type: 'success' });
          redirect('list', 'currency');
        },
        onError: (error: any) => {
          notify(
            translate('currency.create.error', { message: error.message }),
            { type: 'error' }
          );
        },
      }}
    >
      <SimpleForm validate={validateForm}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 600,
          }}
        >
          <Typography variant='h6' gutterBottom>
            {translate('information_title')}
          </Typography>

          <TextInput
            source='ccy'
            validate={[required()]}
            fullWidth
            label={translate('code_label')}
            helperText={translate('code_helper')}
          />

          <SelectInput
            source='type'
            validate={[required()]}
            choices={[
              { id: 'BUY', name: 'BUY' },
              { id: 'SELL', name: 'SELL' },
            ]}
            fullWidth
            label={translate('type_label')}
          />

          <NumberInput
            source='rate'
            validate={[required()]}
            fullWidth
            label={translate('rate_label')}
            helperText={translate('rate_helper')}
          />
        </Box>
      </SimpleForm>
    </Create>
  );
};

export default CurrencyCreate;
