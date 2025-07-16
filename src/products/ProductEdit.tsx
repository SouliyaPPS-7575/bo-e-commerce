import * as React from 'react';
import {
  ArrayInput,
  Edit,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  required,
  useDefaultTitle,
  useEditContext,
  FormDataConsumer,
} from 'react-admin';
import Divider from '@mui/material/Divider';
import ImageUploadField from '../components/ImageUploadField';
import { uploadImageToCloudinary } from '../utils/cloudinaryUpload';

const RichTextInput = React.lazy(() =>
  import('ra-input-rich-text').then((module) => ({
    default: module.RichTextInput,
  }))
);

const ProductTitle = () => {
  const appTitle = useDefaultTitle();
  const { defaultTitle } = useEditContext();
  return (
    <>
      <title>{`${appTitle} - ${defaultTitle}`}</title>
      <span>{defaultTitle}</span>
    </>
  );
};

const ProductEdit = () => (
  <Edit title={<ProductTitle />}>
    <SimpleForm sx={{ maxWidth: '40em' }}>
      <TextInput source='name' validate={required()} fullWidth />

      <TextInput source='name_la' label='Name (Lao)' fullWidth />

      <Divider sx={{ my: 0.2 }} />

      <NumberInput
        source='price'
        validate={required()}
        min={0}
        step={0.01}
        fullWidth
      />

      <Divider sx={{ my: 0.2 }} />

      <FormDataConsumer>
        {({ formData }) => (
          <NumberInput
            source='total_count'
            validate={[
              required(),
              (value) => {
                if (value < (formData.sell_count || 0)) {
                  return 'Total count cannot be less than sell count';
                }
                return undefined;
              },
            ]}
            min={formData.sell_count || 0}
            step={1}
            fullWidth
          />
        )}
      </FormDataConsumer>

      <Divider sx={{ my: 0.2 }} />

      <ReferenceInput source='category_id' reference='categories'>
        <SelectInput source='name' fullWidth validate={required()} />
      </ReferenceInput>

      <Divider sx={{ my: 0.2 }} />

      <ArrayInput source='image_url' label='Image URLs'>
        <SimpleFormIterator inline>
          <ImageUploadField source='' />
        </SimpleFormIterator>
      </ArrayInput>

      <Divider sx={{ my: 0.2 }} />

      <div style={{ alignItems: 'center', gap: 8 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <button
            type='button'
            onClick={async (e) => {
              e.preventDefault();
              const input = document.createElement('input');
              input.type = 'file';
              input.accept = 'image/*';
              input.onchange = async () => {
                if (input.files && input.files[0]) {
                  try {
                    const url = await uploadImageToCloudinary(input.files[0]);
                    await navigator.clipboard.writeText(url);
                    alert('Image link copied to clipboard!');
                    const rte = document.querySelector(
                      '[contenteditable="true"][role="textbox"]'
                    );
                    if (rte) {
                      const img = document.createElement('img');
                      img.src = url;
                      img.alt = 'uploaded image';
                      const sel = window.getSelection();
                      if (sel && sel.rangeCount > 0) {
                        const range = sel.getRangeAt(0);
                        range.collapse(false);
                        range.insertNode(img);
                        range.setStartAfter(img);
                        range.setEndAfter(img);
                        sel.removeAllRanges();
                        sel.addRange(range);
                      } else {
                        rte.appendChild(img);
                      }
                      rte.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                  } catch (err) {
                    alert('Failed to upload image');
                  }
                }
              };
              input.click();
            }}
            style={{
              marginRight: 8,
              cursor: 'pointer',
              padding: '8px 16px',
              backgroundColor: '#3f51b5',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
            }}
          >
            Upload Image
          </button>
        </div>
        <React.Suspense fallback={<div>Loading...</div>}>
          <RichTextInput source='description' validate={required()} fullWidth />
        </React.Suspense>
      </div>

      <Divider sx={{ my: 0.2 }} />

      <React.Suspense fallback={<div>Loading...</div>}>
        <RichTextInput
          source='description_la'
          label='Description (Lao)'
          fullWidth
        />
      </React.Suspense>

      <Divider sx={{ my: 0.2 }} />

      <React.Suspense fallback={<div>Loading...</div>}>
        <RichTextInput source='details' fullWidth />
      </React.Suspense>

      <Divider sx={{ my: 0.2 }} />

      <React.Suspense fallback={<div>Loading...</div>}>
        <RichTextInput
          source='details_la'
          label='Details (Lao)'
          fullWidth
        />
      </React.Suspense>
    </SimpleForm>
  </Edit>
);

export default ProductEdit;
