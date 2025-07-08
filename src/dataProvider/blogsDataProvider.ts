import { DataProvider } from 'react-admin';
import { blogService } from '../api/blogsService';
import { uploadImageToCloudinary } from '../utils/cloudinaryUpload';

export const blogsDataProvider: Partial<DataProvider> = {
  getList: async (resource, params) => {
    if (resource !== 'blogs') return { data: [], total: 0 };

    const { page, perPage } = params.pagination || { page: 1, perPage: 25 };
    const { field, order } = params.sort || {};
    const { filter } = params;

    let sort = '';
    if (field && order) {
      sort = order === 'ASC' ? field : `-${field}`;
    }

    let filterString = '';
    if (filter) {
      const filters = [];
      if (filter.title) {
        filters.push(`title ~ "${filter.title}"`);
      }
      if (filter.description) {
        filters.push(`description ~ "${filter.description}"`);
      }
      if (filter.q) {
        filters.push(`(title ~ "${filter.q}" || description ~ "${filter.q}")`);
      }
      filterString = filters.join(' && ');
    }

    const result = await blogService.getList(page, perPage, sort, filterString);
    return {
      data: result.data as any,
      total: result.total,
    };
  },

  getOne: async (resource, params) => {
    if (resource !== 'blogs') return { data: {} as any };

    const data = await blogService.getOne(String(params.id));
    return { data: data as any };
  },

  create: async (resource, params) => {
    if (resource !== 'blogs') return { data: {} as any };

    const { image, ...rest } = params.data;
    const data = await blogService.create({
      ...rest,
      image_url:
        image && image.rawFile
          ? await uploadImageToCloudinary(image.rawFile)
          : '',
    });
    return { data: data as any };
  },

  update: async (resource, params) => {
    if (resource !== 'blogs') return { data: {} as any };

    const { image, ...rest } = params.data;
    let imageUrl = rest.image_url; // Keep existing URL by default

    if (image && image.rawFile) {
      imageUrl = await uploadImageToCloudinary(image.rawFile);
    } else if (image === null) {
      imageUrl = ''; // Clear the image
    }

    const dataToUpdate = {
      ...rest,
      image_url: imageUrl,
    };

    const data = await blogService.update(String(params.id), dataToUpdate);
    return { data: data as any };
  },

  delete: async (resource, params) => {
    if (resource !== 'blogs') return { data: {} as any };

    await blogService.delete(String(params.id));
    return { data: { id: params.id } };
  },

  deleteMany: async (resource, params) => {
    if (resource !== 'blogs') return { data: [] };

    const result = await blogService.deleteMany(params.ids.map(String));
    return { data: result.ids };
  },
};
