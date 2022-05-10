import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import emailjs from 'emailjs-com';
import Alert from '@mui/material/Alert';



const Form = () => {

    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });


    const [fieldError, setFieldErrors] = useState({
        from_name: false,
        from_email: false,
        message: false
    });

    const [fieldErrorMessage, setFieldErrorMessage] = useState({
        from_name: '',
        from_email: '',
        message: ''
    }
    );

    const [formValid, setFormValid] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setErrorMessage('');

        if (formValid) {

            console.log(formData);
            emailjs.sendForm("gmail", "rp80-portfolio", e.target, 'user_sNMdDrU9fds14TIEdBqW9')
                .then(() => {
                    console.log('success');
                    handleSuccess();
                }, (error) => {
                    console.log('error');
                    setErrorMessage('Something went wrong please try again later! Status:' + error.status);
                    handleError(error);
                });
        } else {
            setErrorMessage('Please fill in all the fields');
            handleError();
        }
    }


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setFieldErrors({
            ...fieldError,
            [e.target.name]: false
        });
        setFieldErrorMessage({
            ...fieldErrorMessage,
            [e.target.name]: ''

        });
    }

    const validateForm = () => {
        let formValid = true;
        if (formData.from_name === '') {
            formValid = false;
            fieldError.from_name = true;
            fieldErrorMessage.from_name = 'Please enter your name';
        }   else {
            fieldError.from_name = false;
            fieldErrorMessage.from_name = '';
        } 
        if (formData.from_email === '') {
            formValid = false;
            fieldError.from_email = true;
            fieldErrorMessage.from_email = 'Please enter your email';
        }  else {
            fieldError.from_email = false;
            fieldErrorMessage.from_email = '';
        }
        if (formData.message === '') {
            formValid = false;
            fieldError.message = true;
            fieldErrorMessage.message = 'Please enter your message';
        } else {
            fieldError.message = false;
            fieldErrorMessage.message = '';
        }

        setFieldErrors(fieldError);
        setFieldErrorMessage(fieldErrorMessage);
        setFormValid(formValid);

        return formValid;
    }

    const handleSuccess = () => {
        setLoading(false);
        setSuccess(true);
        setError(false);
        setErrorMessage('');
        setFormData({
            from_name: '',
            from_email: '',
            message: ''
        });
    }

    const handleError = () => {
        setLoading(false);
        setSuccess(false);
        setError(true);
        setFormData({
            from_name: '',
            from_email: '',
            message: ''
        });
    }

    return (
        <Box
            component="form"
            noValidate
            sx={{
                '& > :not(style)': { m: 0 },
            }}
            onSubmit={handleSubmit}
            autoComplete="off"
        >

            <Grid container direction={'row'} gap={3}>
                <Grid sx={{ mt: 3, width: '100%' }} item>
                    <TextField
                        required
                        fullWidth
                        id="name"
                        name="from_name"
                        label="Name"
                        onChange={handleChange}
                        error={fieldError.from_name}
                        helperText={fieldErrorMessage.from_name}
                        type="text"
                        variant="filled"
                        sx={{ width: '100%' }}
                    />
                </Grid>
                <Grid sx={{ width: '100%' }} item>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        name="from_email"
                        label="Email"
                        type="email"  
                        variant="filled"
                        onChange={handleChange}
                        error={fieldError.from_email}
                        helperText={fieldErrorMessage.from_email}
                        sx={{ width: '100%' }}
                    />
                </Grid>
                <Grid sx={{ width: '100%' }} item>
                    <TextField
                        required
                        fullWidth
                        id="message"
                        name="message"
                        label="Message"
                        onChange={handleChange}
                        type="text"
                        variant="filled"
                        multiline
                        error={fieldError.message}
                        helperText={fieldErrorMessage.message}
                        minRows={4}
                        sx={{ width: '100%' }}
                    />
                </Grid>
                <Grid sx={{ width: '100%' }} item>
                    <LoadingButton
                        type="submit"
                        sx={{
                            borderRadius: 0,
                            p: .2,
                            minWidth: 200,
                            fontSize: 20,
                        }}
                        onClick={validateForm}
                        disabled={loading || success}
                        color="secondary"
                        loading={loading}
                        variant="contained">
                        Send
                    </LoadingButton>
                </Grid>
                <Grid color='primary' item xs={12}>
                    {error ? <Alert severity="error">{errorMessage}</Alert> : null}
                    {success ? <Alert severity="success">Message sent successfully!</Alert> : null}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Form

