import { DataProvider } from 'react-admin';
import pb from '../api/pocketbase';
import { CurrencyItem } from '../model/currency';

export const currenciesDataProvider: Partial<DataProvider> = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination || { page: 1, perPage: 10 };
    const { field, order } = params.sort || { field: 'updated', order: 'DESC' };
    const { q, ...filters } = params.filter;

    try {
      let filter = '';
      const filterParts = [];

      // Search query
      if (q) {
        filterParts.push(`ccy ~ "${q}"`);
      }

      // Other filters
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          if (typeof value === 'string') {
            filterParts.push(`${key} = "${value}"`);
          } else {
            filterParts.push(`${key} = ${value}`);
          }
        }
      });

      if (filterParts.length > 0) {
        filter = filterParts.join(' && ');
      }

      const result = await pb.collection('currency').getList(page, perPage, {
        sort: order === 'ASC' ? `+${field}` : `-${field}`,
        filter: filter || undefined,
      });

      return {
        data: result.items as any,
        total: result.totalItems,
      };
    } catch (error) {
      console.error('Error fetching currencies:', error);
      throw error;
    }
  },

  getOne: async (resource, params) => {
    try {
      const record = await pb.collection('currency').getOne(params.id.toString());
      return { data: record as any };
    } catch (error) {
      console.error('Error fetching currency:', error);
      throw error;
    }
  },


  update: async (resource, params) => {
    console.log("=> start call update ccy")
    try {
      const { id, data } = params;

      // Prepare data in the exact format from the example
      const updateData = {
        ccy: data.ccy,
        type: data.type,
        rate: typeof data.rate === 'string' ? parseFloat(data.rate) : data.rate
      };

      console.log('=> Updating currency with data:', updateData);
      const record = await pb.collection('currency').update(id.toString(), updateData);
      console.log('Update successful:', record);
      return { data: record as any };
    } catch (error) {
      console.error('Error updating currency:', error);
      throw error;
    }
  },


  create: async (resource, params) => {
    try {
      const { data } = params;

      // Transform rate to number if it's a string
      const transformedData = {
        ...data,
        rate: typeof data.rate === 'string' ? parseFloat(data.rate) : data.rate
      };

      const createdRecord = await pb.collection('currency').create(transformedData);
      return { data: createdRecord as any };
    } catch (error) {
      console.error('Error creating currency:', error);
      throw error;
    }
  },

  delete: async (resource, params) => {
    try {
      const record = await pb.collection('currency').getOne(params.id.toString());
      await pb.collection('currency').delete(params.id.toString());
      return { data: record as any };
    } catch (error) {
      console.error('Error deleting currency:', error);
      throw error;
    }
  },

  getMany: async (resource, params) => {
    try {
      const records = await Promise.all(
        params.ids.map(id => pb.collection('currency').getOne(id.toString()))
      );
      return { data: records as any };
    } catch (error) {
      console.error('Error fetching currencies:', error);
      throw error;
    }
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination || { page: 1, perPage: 10 };
    const { field, order } = params.sort || { field: 'updated', order: 'DESC' };
    const { target, id } = params;

    try {
      const filter = `${target} = "${id}"`;

      const result = await pb.collection('currency').getList(page, perPage, {
        sort: order === 'ASC' ? `+${field}` : `-${field}`,
        filter,
      });

      return {
        data: result.items as any,
        total: result.totalItems,
      };
    } catch (error) {
      console.error('Error fetching currencies reference:', error);
      throw error;
    }
  },
};
