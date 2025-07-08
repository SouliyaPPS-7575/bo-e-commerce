import simpleRestProvider from 'ra-data-simple-rest';

const restProvider = simpleRestProvider('http://localhost:4000');

export const addressesDataProvider = {
  ...restProvider,
  // Add any custom logic for addresses if needed
};