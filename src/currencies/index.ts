import { CurrencyExchange } from '@mui/icons-material';

import CurrencyList from './CurrencyList';
import CurrencyCreate from './CurrencyCreate';
import CurrencyEdit from './CurrencyEdit';
import CurrencyShow from './CurrencyShow';

const currencies = {
    list: CurrencyList,
    create: CurrencyCreate,
    edit: CurrencyEdit,
    show: CurrencyShow,
    icon: CurrencyExchange,
};

export default currencies;