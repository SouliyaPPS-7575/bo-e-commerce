import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  EditButton,
  TopToolbar,
  FilterButton,
  SearchInput,
  SelectInput,
} from 'react-admin';
const CurrencyFilter = [
  <SearchInput key='search' source='q' alwaysOn />,
  <SelectInput
    key='type'
    source='type'
    choices={[
      { id: '', name: 'All' },
      { id: 'BUY', name: 'BUY' },
      { id: 'SELL', name: 'SELL' },
    ]}
    alwaysOn
    emptyValue={''}
    sx={{
      '& .MuiInputBase-root': {
        height: '40px', // Adjust this value as needed
      },
    }}
  />,
];

const CurrencyListActions = () => (
  <TopToolbar>
    <FilterButton />
  </TopToolbar>
);

const CurrencyList = () => (
  <List
    resource='currency'
    filters={CurrencyFilter}
    actions={<CurrencyListActions />}
    sort={{ field: 'updated', order: 'DESC' }}
  >
    <Datagrid>
      <TextField source='ccy' label='Currency Code' />
      <TextField source='type' label='Type' />
      <NumberField source='rate' label='Exchange Rate' />
      <DateField source='created' label='Created' showTime />
      <DateField source='updated' label='Last Updated' showTime />
      <EditButton />
    </Datagrid>
  </List>
);

export default CurrencyList;
