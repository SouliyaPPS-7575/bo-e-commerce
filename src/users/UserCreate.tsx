import * as React from 'react';
import {
    BooleanInput,
    Create,
    email,
    required,
    SimpleForm,
    TextInput,
    PasswordInput,
    SelectInput,
    useNotify,
    useRedirect,
    ImageInput,
    ImageField,
} from 'react-admin';
import { Box, Typography } from '@mui/material';

const UserCreate = () => {
    const notify = useNotify();
    const redirect = useRedirect();

    const validateForm = (values: any) => {
        const errors: any = {};
        if (!values.username) {
            errors.username = 'Username is required';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        }
        if (!values.full_name) {
            errors.full_name = 'Full name is required';
        }
        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }
        if (values.password !== values.passwordConfirm) {
            errors.passwordConfirm = 'Passwords do not match';
        }
        return errors;
    };

    return (
        <Create
            title="Create User"
            mutationOptions={{
                onSuccess: () => {
                    notify('User created successfully', { type: 'success' });
                    redirect('list', 'users');
                },
                onError: (error: any) => {
                    notify(`Error creating user: ${error.message}`, { type: 'error' });
                },
            }}
        >
            <SimpleForm validate={validateForm}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600 }}>
                    <Typography variant="h6" gutterBottom>
                        Basic Information
                    </Typography>
                    
                    <TextInput
                        source="username"
                        validate={[required()]}
                        fullWidth
                        helperText="Username must be unique"
                    />
                    
                    <TextInput
                        source="full_name"
                        validate={[required()]}
                        fullWidth
                        label="Full Name"
                    />
                    
                    <TextInput
                        source="email"
                        validate={[required(), email()]}
                        fullWidth
                        helperText="Email must be unique"
                    />
                    
                    <TextInput
                        source="phone_number"
                        fullWidth
                        label="Phone Number"
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

                    <ImageInput source="avatar" label="Avatar">
                        <ImageField source="src" title="title" />
                    </ImageInput>

                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Account Settings
                    </Typography>
                    
                    <PasswordInput
                        source="password"
                        validate={[required()]}
                        fullWidth
                        helperText="Password must be at least 8 characters long"
                    />
                    
                    <PasswordInput
                        source="passwordConfirm"
                        validate={[required()]}
                        fullWidth
                        label="Confirm Password"
                        helperText="Must match the password above"
                    />
                    <BooleanInput source="emailVisibility" defaultValue={true} style={{ display: 'none' }} />
                </Box>
            </SimpleForm>
        </Create>
    );
};

export default UserCreate;