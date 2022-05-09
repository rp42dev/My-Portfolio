import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from 'emailjs-com';

// const defaultValues = {
//     name: "",
//     email: "",
//     message: "",
// };

// const formData = { name: "", email: "", message: "" };


const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm("gmail", "rp80-portfolio", e.target, 'user_sNMdDrU9fds14TIEdBqW9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 0 },
            }}
            noValidate
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            <Grid container direction={'row'} gap={3}>
                <Grid sx={{ mt: 3, width: '100%' }} item>
                    <TextField
                        id="name"
                        name="from_name"
                        required
                        label="Name"
                        type="text"
                        variant="filled"
                        sx={{ width: '100%' }}

                    />
                </Grid>
                <Grid sx={{ width: '100%' }} item>
                    <TextField
                        id="email"
                        required
                        name="from_emaIl"
                        label="Name"
                        type="email"
                        variant="filled"
                        sx={{ width: '100%' }}

                    />
                </Grid>
                <Grid sx={{ width: '100%' }} item>
                    <TextField
                        id="message"
                        required
                        name="message"
                        label="Message"
                        type="text"
                        variant="filled"
                        multiline
                        minRows={4}
                        sx={{ width: '100%' }}

                    />
                </Grid>
                <Grid sx={{ width: '100%' }} item>
                    <Button
                        type="submit"
                        sx={{
                            borderRadius: 0,
                            p: .2,
                            minWidth: 200,
                            fontSize: 20,
                        }}
                        // disabled
                        color="secondary"
                        variant="contained">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Form;