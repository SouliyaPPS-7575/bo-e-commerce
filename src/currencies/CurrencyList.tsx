import {
  CreateButton,
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  FilterButton,
  List,
  NumberField,
  SearchInput,
  SelectInput,
  TextField,
  TopToolbar,
  useTranslate
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
    label='Type'
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
    <CreateButton resource='currency' />
  </TopToolbar>
);

const CurrencyList = () => {
  const translate = useTranslate();
  return (
    <List
      resource='currency'
      filters={CurrencyFilter}
      actions={<CurrencyListActions />}
      sort={{ field: 'updated', order: 'DESC' }}
    >
      <Datagrid>
        <TextField source='ccy' label={translate('ccy')} />
        <TextField source='type' label={translate('type')} />
        <NumberField source='rate' label={translate('rate')} />
        <DateField source='created' label={translate('created')} showTime />
        <DateField source='updated' label={translate('updated')} showTime />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default CurrencyList;
