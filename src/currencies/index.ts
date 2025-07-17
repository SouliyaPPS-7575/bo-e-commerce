import { CurrencyExchange } from '@mui/icons-material';

import CurrencyList from './CurrencyList';
import CurrencyEdit from './CurrencyEdit';
import CurrencyCreate from './CurrencyCreate';

const currencies = {
    list: CurrencyList,
    create: CurrencyCreate,
    edit: CurrencyEdit,
    icon: CurrencyExchange,
};

export default currencies;