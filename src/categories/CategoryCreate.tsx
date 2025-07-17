import { Box, Typography } from '@mui/material';
import {
  Create,
  ImageField,
  ImageInput,
  required,
  SimpleForm,
  TextInput,
  Title,
  useTranslate,
} from 'react-admin';

const CategoryCreate = () => {
  const translate = useTranslate();
  return (
    <Create
      title={<Title title={translate('resources.categories.create_title')} />}
    >
      <SimpleForm>
        <Box
          display='flex'
          flexDirection='column'
          gap={2}
          width='100%'
          maxWidth={600}
        >
          <Typography variant='h6' gutterBottom>
            {translate('resources.categories.form_title')}
          </Typography>

          <TextInput
            source='name'
            label={translate('resources.categories.fields.name')}
            validate={[required()]}
            fullWidth
          />

          <TextInput
            source='name_la'
            label={translate('resources.categories.fields.name_la')}
            validate={[required()]}
            fullWidth
          />

          <ImageInput
            source='image'
            label={translate('resources.categories.fields.image')}
          >
            <ImageField source='src' title='title' />
          </ImageInput>
        </Box>
      </SimpleForm>
    </Create>
  );
};

export default CategoryCreate;