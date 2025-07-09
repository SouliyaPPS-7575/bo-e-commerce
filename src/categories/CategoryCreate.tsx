import * as React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  Title,
  ImageInput,
  ImageField,
} from 'react-admin';
import { Box, Typography } from '@mui/material';

const CategoryCreate = () => (
  <Create title={<Title title='Create New Category' />}>
    <SimpleForm>
      <Box
        display='flex'
        flexDirection='column'
        gap={2}
        width='100%'
        maxWidth={600}
      >
        <Typography variant='h6' gutterBottom>
          New Category Information
        </Typography>

        <TextInput
          source='name'
          label='Category Name'
          validate={[required()]}
          fullWidth
        />

        <TextInput
          source='name_la'
          label='Lao Name'
          validate={[required()]}
          fullWidth
        />

        <ImageInput source='image' label='Category Image'>
          <ImageField source='src' title='title' />
        </ImageInput>
      </Box>
    </SimpleForm>
  </Create>
);

export default CategoryCreate;
