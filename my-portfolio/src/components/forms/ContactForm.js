import React, { useState, useRef } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import { useForm, Controller } from "react-hook-form";
import SendIcon from '@mui/icons-material/Send';


const Form = () => {
    const form = useRef();
    const [mailController, setMailController] = useState({
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: ''
    });
    const { control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            from_name: "",
            from_email: "",
            message: ""
        }
    });

    const sendMail = () => {
        setMailController({
            isLoading: true,
            isSuccess: false,
            isError: false,
            errorMessage: ''
        });

        emailjs.sendForm("gmail", "rp80-portfolio", form.current, 'user_sNMdDrU9fds14TIEdBqW9')
            .then(() => {
                setMailController({
                    isLoading: false,
                    isSuccess: true,
                    isError: false,
                    errorMessage: ''
                });
                console.log('success');

            }
                , (error) => {
                    setMailController({
                        isLoading: false,
                        isSuccess: false,
                        isError: true,
                        errorMessage: 'Something went wrong please try again later! Status:' + error.status
                    });
                    console.log('error: ', error);
                }
            );
    }

    return (

        <form ref={form} noValidate onSubmit={handleSubmit(sendMail)}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Controller
                        name="from_name"
                        control={control}

                        rules={{
                            required: 'Name is required',
                            pattern: { value: /^[a-zA-Z]*$/, message: 'Name must be alphabets only' },
                            minLength: { value: 2, message: 'Name must be at least 2 characters' },
                            maxLength: { value: 20, message: 'Name must be less than 20 characters' }
                        }}
                        render={({ field }) => <TextField helperText={errors.from_name ? errors.from_name.message : ''} {...field}
                            fullWidth
                            required
                            variant="filled"
                            label="Name"
                            error={errors.from_name ? true : false}
                        />}
                    />

                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="from_email"
                        control={control}
                        rules={{
                            required: 'Email is required',
                            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address' }
                        }}
                        render={({ field }) => <TextField helperText={errors.from_email ? errors.from_email.message : ''} {...field}
                            fullWidth
                            required
                            variant="filled"
                            label="Email"
                            error={errors.from_email ? true : false}
                        />}
                    />
                </Grid>
                <Grid item xs={12}>

                    <Controller
                        name="message"
                        control={control}
                        rules={{
                            required: 'Message is required',
                            minLength: { value: 10, message: 'Message must be at least 10 characters' },
                            maxLength: { value: 500, message: 'Message must be less than 500 characters' }
                        }}
                        render={({ field }) => <TextField helperText={errors.message ? errors.message.message : ''} {...field}
                            fullWidth
                            required
                            multiline
                            minRows={4}
                            variant="filled"
                            label="Message"
                            error={errors.message ? true : false}
                        />}
                    />
                </Grid>
                <Grid item xs={12}>
                    <LoadingButton
                        type="submit"
                        sx={{
                            borderRadius: 0,
                            p: .2,
                            minWidth: 200,
                            fontSize: 20,
                            height: 40,
                            color: 'dark.main',
                        }}
                        color="secondary"
                        loading={mailController.isLoading}
                        disabled={mailController.isLoading}
                        variant="contained">
                        Send&nbsp;
                       {!mailController.isLoading?  <SendIcon /> : ''}
                    </LoadingButton>
                </Grid>
                <Grid item xs={12}>
                    {mailController.isSuccess ? <Alert severity="success">Message sent successfully!</Alert> : null}
                    {mailController.isError ? <Alert severity="error">{mailController.errorMessage}</Alert> : null}
                </Grid>
            </Grid>
        </form>

    );

};

export default Form

