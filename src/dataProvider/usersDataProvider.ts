import { DataProvider } from 'react-admin';
import pb from '../api/pocketbase';

export interface User {
  id: string;
  collectionId: string;
  collectionName: string;
  avatar: string;
  username: string;
  full_name: string;
  email: string;
  phone_number: string;
  emailVisibility: boolean;
  verified: boolean;
  created: string;
  updated: string;
}

export const usersDataProvider: Partial<DataProvider> = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination || { page: 1, perPage: 10 };
    const { field, order } = params.sort || { field: 'id', order: 'ASC' };
    const { q, ...filters } = params.filter;

    try {
      let filter = '';
      const filterParts = [];

      // Search query
      if (q) {
        filterParts.push(`(full_name ~ "${q}" || email ~ "${q}" || username ~ "${q}")`);
      }

      // Other filters
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          if (typeof value === 'boolean') {
            filterParts.push(`${key} = ${value}`);
          } else if (typeof value === 'string') {
            filterParts.push(`${key} ~ "${value}"`);
          } else {
            filterParts.push(`${key} = ${value}`);
          }
        }
      });

      if (filterParts.length > 0) {
        filter = filterParts.join(' && ');
      }

      const result = await pb.collection('users').getList(page, perPage, {
        sort: order === 'ASC' ? `+${field}` : `-${field}`,
        filter: filter || undefined,
      });

      return {
        data: result.items as any,
        total: result.totalItems,
      };
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  getOne: async (resource, params) => {
    try {
      const record = await pb.collection('users').getOne(params.id.toString());
      return { data: record as any };
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  },

  create: async (resource, params) => {
    try {
      const { password, passwordConfirm, avatar, ...rest } = params.data;
      const formData = new FormData();

      formData.append('username', rest.username);
      formData.append('full_name', rest.full_name);
      formData.append('email', rest.email);
      formData.append('phone_number', rest.phone_number || '');
      formData.append('emailVisibility', 'true');
      formData.append('password', password);
      formData.append('passwordConfirm', passwordConfirm);

      if (avatar && avatar.rawFile) {
        formData.append('avatar', avatar.rawFile);
      }

      const record = await pb.collection('users').create(formData);
      await pb.collection('users').requestVerification(rest.email);
      return { data: record as any };
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  update: async (resource, params) => {
    try {
      const { id, data } = params;
      const { password, oldPassword, passwordConfirm, avatar, ...rest } = data;

      // Handle password change separately
      if (password) {
        if (!oldPassword) {
          throw new Error('Old password is required to change the password.');
        }
        await pb.collection('users').update(id, {
          password,
          passwordConfirm,
          oldPassword,
        });
      }

      const formData = new FormData();
      // Append other fields to formData
      for (const key in rest) {
        if (Object.prototype.hasOwnProperty.call(rest, key)) {
          formData.append(key, rest[key]);
        }
      }
      formData.append('emailVisibility', 'true');

      // Handle avatar update
      if (avatar && avatar.rawFile) {
        // New avatar selected
        formData.append('avatar', avatar.rawFile);
      } else if (avatar === null) {
        // Avatar cleared
        formData.append('avatar', ''); // Send empty string to clear the file in PocketBase
      }
      // If avatar is a string (existing URL) and not changed, no need to append it to formData

      const updatedRecord = await pb.collection('users').update(id, formData);

      return { data: { ...updatedRecord, id } as any };
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  delete: async (resource, params) => {
    try {
      await pb.collection('users').delete(params.id.toString());
      return { data: { id: params.id } } as any;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  },

  deleteMany: async (resource, params) => {
    try {
      await Promise.all(
        params.ids.map(id => pb.collection('users').delete(id.toString()))
      );
      return { data: params.ids };
    } catch (error) {
      console.error('Error deleting users:', error);
      throw error;
    }
  },

  getMany: async (resource, params) => {
    try {
      const records = await Promise.all(
        params.ids.map(id => pb.collection('users').getOne(id.toString()))
      );
      return { data: records as any };
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination || { page: 1, perPage: 10 };
    const { field, order } = params.sort || { field: 'id', order: 'ASC' };
    const { target, id } = params;

    try {
      const filter = `${target} = "${id}"`;
      
      const result = await pb.collection('users').getList(page, perPage, {
        sort: order === 'ASC' ? `+${field}` : `-${field}`,
        filter,
      });

      return {
        data: result.items as any,
        total: result.totalItems,
      };
    } catch (error) {
      console.error('Error fetching users reference:', error);
      throw error;
    }
  },
};