import simpleRestProvider from 'ra-data-simple-rest';

export default simpleRestProvider(process.env.REACT_APP_API_BASE_URL || 'http://localhost:4000');
