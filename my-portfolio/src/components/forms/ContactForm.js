import React, { useState, useCallback, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import emailjs from 'emailjs-com';
import Alert from '@mui/material/Alert';



const Form = () => {

    const initialValues = { from_name: "", from_email: "", message: "" };
    const [fieldError, setFieldErrors] = useState({ from_name: false, from_email: false, message: false });
    const [formValues, setFormValues] = useState(initialValues);
    const [formValid, setFormValid] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [target, setTarget] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        setTarget(e.target);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
            sendEmail(target);
        }
    }, [formErrors]);

    const sendEmail = (target) => {
        setLoading(true);
        setSuccess(false);
        setErrorMessage('');

        emailjs.sendForm("gmail", "rp80-portfolio", target, 'user_sNMdDrU9fds14TIEdBqW')
            .then(() => {
                console.log('success');
                handleSuccess();
            }
            , (error) => {
                console.log('error');
                setErrorMessage('Something went wrong please try again later! Status:' + error.status);
                handleError(error);
            }
            );
    }

    const handleSuccess = () => {
        setIsSubmit(false);
        setLoading(false);
        setFormValues(initialValues);
        setFieldErrors({});
        setSuccess(true);
    }

    const handleError = () => {
        setIsSubmit(false);
        setLoading(false);
        setFormValues(initialValues);
        setFieldErrors({});
        setError(true);
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.from_name) {
            errors.from_name = "Username is required!";
            fieldError.from_name = true;
        } else if (values.from_name.length < 3) {
            errors.from_name = "Username must be at least 3 characters!";
            fieldError.from_name = true;
        } else {
            fieldError.from_name = false;
        }
        if (!values.from_email) {
            errors.from_email = "Email is required!";
            fieldError.from_email = true;
        } else if (!regex.test(values.from_email)) {
            errors.from_email = "This is not a valid email format!";
            fieldError.from_email = true;
        } else {
            fieldError.from_email = false;
        }
        if (!values.message) {
            errors.message = "message is required";
            fieldError.message = true;
        } else if (values.message.length < 4) {
            errors.message = "message must be more than 4 characters";
            fieldError.message = true;
        } else if (values.message.length > 500) {
            errors.message = "message cannot exceed more than 500 characters";
            fieldError.message = true;
        } else {
            fieldError.message = false;
        }
        setFieldErrors(errors);

        return errors;
    };

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
                        type="text"
                        id="name"
                        name="from_name"
                        label="Name"
                        variant="filled"
                        sx={{ width: '100%' }}
                        onChange={handleChange}
                        error={fieldError.from_name}
                        helperText={formErrors.from_name}
                    />
                </Grid>
                <Grid sx={{ width: '100%' }} item>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        type="email"
                        variant="filled"
                        name="from_email"
                        sx={{ width: '100%' }}
                        onChange={handleChange}
                        error={fieldError.from_email}
                        helperText={formErrors.from_email}
                    />
                </Grid>
                <Grid sx={{ width: '100%' }} item>
                    <TextField
                        required
                        fullWidth
                        id="message"
                        type="text"
                        multiline
                        minRows={4}
                        name="message"
                        label="Message"
                        variant="filled"
                        sx={{ width: '100%' }}
                        onChange={handleChange}
                        error={fieldError.message}
                        helperText={formErrors.message}
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

