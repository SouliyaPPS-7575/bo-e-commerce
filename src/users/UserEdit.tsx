import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { BooleanInput } from 'react-admin';
import {
  DateField,
  Edit,
  email,
  ImageField,
  ImageInput,
  PasswordInput,
  required,
  SimpleForm,
  TextField,
  TextInput,
  SelectInput,
  useRecordContext,
  useRefresh,
} from 'react-admin';
import { useLocation } from 'react-router';
import { useImageStore } from '../store/imageStore';

const UserEdit = () => {
  const { selectImage, setSelectImage } = useImageStore(); // Use the store
  const refresh = useRefresh();

  // Clear selectImage when route changes
  const location = useLocation();
  useEffect(() => {
    setSelectImage(null);
    refresh();
  }, [location.pathname, setSelectImage]);

  console.log('=> selectImage', selectImage);

  return (
    <Edit title='Edit User'>
      <SimpleForm>
        <Grid container spacing={3}>
          <Grid
            size={{
              xs: 12,
              md: 8,
            }}
          >
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Basic Information
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextInput
                    source='username'
                    validate={[required()]}
                    fullWidth
                    helperText='Username must be unique'
                  />

                  <TextInput
                    source='full_name'
                    validate={[required()]}
                    fullWidth
                    label='Full Name'
                  />

                  <TextInput
                    source='email'
                    validate={[required(), email()]}
                    fullWidth
                    helperText='Email must be unique'
                  />

                  <TextInput
                    source='phone_number'
                    fullWidth
                    label='Phone Number'
                  />

                  <SelectInput
                    source="role"
                    validate={[required()]}
                    choices={[
                        { id: 'admin', name: 'Admin' },
                        { id: 'staff', name: 'Staff' },
                    ]}
                    fullWidth
                  />

                  <ImageInput
                    source='avatar'
                    label='Avatar'
                    onChange={(e) => {
                      setSelectImage(e);
                    }}
                  >
                    <ImageField source='src' title='title' />
                  </ImageInput>

                  <ImageField
                    source='avatar'
                    label='Current Image'
                    sx={{
                      display: selectImage !== null ? 'none' : 'block',
                    }}
                  />
                </Box>

                <Typography variant='h6' gutterBottom sx={{ mt: 3 }}>
                  Change Password
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <PasswordInput
                    source='oldPassword'
                    fullWidth
                    label='Old Password'
                    helperText='Required to change the password'
                  />
                  <PasswordInput
                    source='password'
                    fullWidth
                    helperText='Leave empty to keep current password. Must be at least 8 characters long.'
                  />

                  <PasswordInput
                    source='passwordConfirm'
                    fullWidth
                    label='Confirm Password'
                    helperText='Must match the password above'
                  />
                  <BooleanInput source="emailVisibility" defaultValue={true} style={{ display: 'none' }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 4,
            }}
          >
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  User Information
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                  >
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      sx={{ mb: 1 }}
                    >
                      Avatar
                    </Typography>
                    <AvatarDisplay />
                  </Box>
                  <Box>
                    <Typography variant='body2' color='text.secondary'>
                      User ID
                    </Typography>
                    <TextField source='id' />
                  </Box>

                  <Box>
                    <Typography variant='body2' color='text.secondary'>
                      Username
                    </Typography>
                    <TextField source='username' />
                  </Box>

                  <Box>
                    <Typography variant='body2' color='text.secondary'>
                      Created
                    </Typography>
                    <DateField source='created' showTime />
                  </Box>

                  <Box>
                    <Typography variant='body2' color='text.secondary'>
                      Updated
                    </Typography>
                    <DateField source='updated' showTime />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  );
};

const AvatarDisplay = () => {
  const record = useRecordContext();
  if (!record?.avatar) return null;
  return (
    <img
      src={record.avatar}
      alt='User Avatar'
      style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover' }}
    />
  );
};

export default UserEdit;
