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
    useTranslate,
} from 'react-admin';
import { Box } from '@mui/material';

const CurrencyShowActions = () => (
    <TopToolbar>
        <EditButton />
        <DeleteButton />
    </TopToolbar>
);

const CurrencyShow = () => {
  const translate = useTranslate();
  return (
    <Show actions={<CurrencyShowActions />}>
      <SimpleShowLayout>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField source="id" label="ID" />
          <TextField source="ccy" label={translate('currency.fields.ccy')} />
          <TextField source="type" label={translate('currency.fields.type')} />
          <NumberField source="rate" label={translate('currency.fields.rate')} />
          <DateField source="created" label={translate('currency.fields.created')} showTime />
          <DateField source="updated" label={translate('currency.fields.updated')} showTime />
        </Box>
      </SimpleShowLayout>
    </Show>
  );
};

export default CurrencyShow;