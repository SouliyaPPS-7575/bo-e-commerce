import {
  DataTable,
  Edit,
  EditButton,
  ImageField,
  ImageInput,
  Labeled,
  ReferenceManyField,
  SimpleForm,
  TextInput,
  useDefaultTitle,
  useEditContext,
  useRefresh,
} from 'react-admin';

import { Avatar, Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  formatCurrency,
  useCurrencyContext,
} from '../components/CurrencySelector/CurrencyProvider';
import ThumbnailField from '../products/ThumbnailField';
import { useImageStore } from '../store/imageStore'; // Import the store
import { type Product } from '../types';

export interface ProductCategory {
  collectionId: string;
  collectionName: string;
  id: string;
  name: string;
  name_la: string;
  image_url: string;
  created: string;
  updated: string;
}

const Column = DataTable.Col<Product>;
const ColumnNumber = DataTable.NumberCol<Product>;

const ImageUrlField = (record: ProductCategory | any) => {
  if (!record?.image_url) return null;

  return (
    <Avatar
      src={record.image_url}
      alt={record.name}
      sx={{ width: 32, height: 32 }}
    />
  );
};

const CategoryEdit = () => {
  const { displayCurrency, convert } = useCurrencyContext();
  const { selectImage, setSelectImage } = useImageStore(); // Use the store
  const refresh = useRefresh();

  // Clear selectImage when route changes
  const location = useLocation();
  useEffect(() => {
    setSelectImage(null);
    refresh();
  }, [location.pathname, setSelectImage]);

  return (
    <Edit title={<CategoryTitle />}>
      <SimpleForm>
        <Box
          display='flex'
          flexDirection='column'
          gap={2}
          width='100%'
          maxWidth={600}
        >
          <Typography variant='h6' gutterBottom>
            Edit Category Information
          </Typography>

          <TextInput source='name' label='Category Name' />
          <TextInput source='name_la' label='Lao Name' />
          <ImageInput
            source='image'
            label='Category Image'
            onChange={(e) => {
              setSelectImage(e);
            }}
          >
            <ImageField source='src' title='title' />
          </ImageInput>

          <ImageField
            source='image_url'
            label='Current Image'
            sx={{
              display: selectImage !== null ? 'none' : 'block',
            }}
          />

          <Labeled label='resources.categories.fields.products' fullWidth>
            <ReferenceManyField
              reference='products'
              target='category_id'
              perPage={20}
            >
              <DataTable
                sx={{ maxWidth: 800, marginLeft: 0, marginRight: 'auto' }}
              >
                <Column
                  sx={{ width: 25, padding: 0 }}
                  field={ThumbnailField}
                  label={false}
                />
                <Column source='image_url' render={ImageUrlField} />
                <ColumnNumber
                  source='name'
                  options={{ minimumFractionDigits: 2 }}
                />
                <Column
                  label='Price'
                  render={(record: Product) =>
                    `$${formatCurrency(
                      convert(record.price || 0)
                    )} ${displayCurrency}`
                  }
                />

                <Column align='right'>
                  <EditButton />
                </Column>
              </DataTable>
            </ReferenceManyField>
          </Labeled>
        </Box>
      </SimpleForm>
    </Edit>
  );
};

const CategoryTitle = () => {
  const appTitle = useDefaultTitle();
  const { defaultTitle } = useEditContext();
  return (
    <>
      <title>{`${appTitle} - ${defaultTitle}`}</title>
      <span>{defaultTitle}</span>
    </>
  );
};

export default CategoryEdit;
