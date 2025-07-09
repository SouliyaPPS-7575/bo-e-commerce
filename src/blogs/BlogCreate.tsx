import { lazy } from 'react';
import {
  Create,
  ImageField,
  ImageInput,
  required,
  SimpleForm,
  TextInput
} from 'react-admin';
import { uploadImageToCloudinary } from '../utils/cloudinaryUpload';

const RichTextInput = lazy(() =>
  import('ra-input-rich-text').then((m) => ({ default: m.RichTextInput }))
);

export const BlogCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source='title' validate={[required()]} fullWidth />
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
                    // Copy image URL to clipboard
                    await navigator.clipboard.writeText(url);
                    // Show alert notification
                    alert('Image link copied to clipboard!');
                    // Find the contenteditable div of RichTextInput
                    const rte = document.querySelector(
                      '[contenteditable="true"][role="textbox"]'
                    );
                    if (rte) {
                      // Insert image at the caret position
                      const img = document.createElement('img');
                      img.src = url;
                      img.alt = 'uploaded image';
                      // Insert image at caret
                      const sel = window.getSelection();
                      if (sel && sel.rangeCount > 0) {
                        const range = sel.getRangeAt(0);
                        range.collapse(false);
                        range.insertNode(img);
                        // Move caret after the image
                        range.setStartAfter(img);
                        range.setEndAfter(img);
                        sel.removeAllRanges();
                        sel.addRange(range);
                      } else {
                        rte.appendChild(img);
                      }
                      // Trigger input event to update form value
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
        <RichTextInput source='description' validate={[required()]} fullWidth />
      </div>

      <ImageInput source='image' label='Blog Image'>
        <ImageField source='src' title='title' />
      </ImageInput>
      {/* <TextInput source='video_url' fullWidth /> */}
      {/* <NumberInput source='count' defaultValue={0} /> */}
    </SimpleForm>
  </Create>
);
