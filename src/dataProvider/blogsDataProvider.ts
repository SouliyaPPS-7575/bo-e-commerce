import { DataProvider } from 'react-admin';
import { blogService } from '../api/blogsService';

const CLOUDINARY_UPLOAD_PRESET = 'images';
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/db84fdke0/upload';

const uploadImageToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  const response = await fetch(CLOUDINARY_URL, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload image to Cloudinary');
  }

  const data = await response.json();
  return data.secure_url;
};

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
    let imageUrl = '';

    if (image && image.rawFile) {
      imageUrl = await uploadImageToCloudinary(image.rawFile);
    }

    const dataToCreate = {
      ...rest,
      image_url: imageUrl,
    };

    const data = await blogService.create(dataToCreate);
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