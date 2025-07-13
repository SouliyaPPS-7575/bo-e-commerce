import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    DateField,
    EditButton,
    DeleteButton,
    CreateButton,
    TopToolbar,
    FilterButton,
    SearchInput,
    SelectInput,
} from 'react-admin';
const CurrencyFilter = [
    <SearchInput key="search" source="q" alwaysOn />,
    <SelectInput
        key="type"
        source="type"
        choices={[
            { id: 'BUY', name: 'BUY' },
            { id: 'SELL', name: 'SELL' },
        ]}
        alwaysOn
    />,
];

const CurrencyListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
    </TopToolbar>
);

const CurrencyList = () => (
    <List
        filters={CurrencyFilter}
        actions={<CurrencyListActions />}
        sort={{ field: 'updated', order: 'DESC' }}
    >
        <Datagrid>
            <TextField source="ccy" label="Currency Code" />
            <TextField source="type" label="Type" />
            <NumberField source="rate" label="Exchange Rate" />
            <DateField source="created" label="Created" showTime />
            <DateField source="updated" label="Last Updated" showTime />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default CurrencyList;