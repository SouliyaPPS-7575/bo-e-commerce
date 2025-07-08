import { lazy, useEffect } from 'react';
import {
  DeleteButton,
  Edit,
  FormDataConsumer,
  ImageField,
  ImageInput,
  NumberInput,
  required,
  ShowButton,
  SimpleForm,
  TextInput,
  TopToolbar,
  useRefresh,
} from 'react-admin';
import { useImageStore } from '../store/imageStore';
import { useLocation } from 'react-router';

const RichTextInput = lazy(() =>
  import('ra-input-rich-text').then((m) => ({ default: m.RichTextInput }))
);

const BlogEditActions = () => (
  <TopToolbar>
    <ShowButton />
    <DeleteButton />
  </TopToolbar>
);

export const BlogEdit = () => {
  const { selectImage, setSelectImage } = useImageStore(); // Use the store
  const refresh = useRefresh();

  // Clear selectImage when route changes
  const location = useLocation();
  useEffect(() => {
    setSelectImage(null);
    refresh();
  }, [location.pathname, setSelectImage]);

  return (
    <Edit actions={<BlogEditActions />}>
      <SimpleForm>
        {/* <TextField source='id' /> */}
        <TextInput source='title' validate={[required()]} fullWidth />
        <RichTextInput source='description' validate={[required()]} fullWidth />
        <ImageInput
          source='image'
          label='Blog Image'
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

        {/* <TextInput source='video_url' fullWidth /> */}
        <NumberInput source='count' />
        {/* <DateField source='created' /> */}
        {/* <DateField source='updated' /> */}

        <h3>Preview</h3>
        <FormDataConsumer>
          {({ formData }) => (
            <div
              style={{
                marginTop: 2,
                padding: 16,
                border: '1px solid #ccc',
                borderRadius: 8,
              }}
            >
              <h2>{formData.title}</h2>
              {formData.image_url && (
                <img
                  src={formData.image_url}
                  alt='Preview'
                  style={{ marginTop: 16, maxWidth: '100%', height: 'auto' }}
                />
              )}
              <div dangerouslySetInnerHTML={{ __html: formData.description }} />
            </div>
          )}
        </FormDataConsumer>
      </SimpleForm>
    </Edit>
  );
};
