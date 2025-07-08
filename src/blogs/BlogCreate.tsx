import { lazy } from 'react';
import {
  Create,
  NumberInput,
  required,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
} from 'react-admin';

const RichTextInput = lazy(() =>
  import('ra-input-rich-text').then((m) => ({ default: m.RichTextInput }))
);

export const BlogCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source='title' validate={[required()]} fullWidth />
      <RichTextInput source='description' validate={[required()]} fullWidth />
      <ImageInput source='image' label='Blog Image'>
        <ImageField source='src' title='title' />
      </ImageInput>
      {/* <TextInput source='video_url' fullWidth /> */}
      {/* <NumberInput source='count' defaultValue={0} /> */}
    </SimpleForm>
  </Create>
);