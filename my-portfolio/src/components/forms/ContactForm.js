import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const defaultValues = {
    name: "",
    email: "",
    message: "",
};
const Form = () => {
    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };
    
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            <Grid container alignItems="center" justify="center" direction="column">
                <Grid sx={{ mb: 3, mt: 3, width: '100%' }} item>
                    <TextField
                        id="name-input"
                        name="name"
                        required
                        label="Name"
                        type="text"
                        variant="filled"
                        sx={{ width: '100%' }}
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid sx={{ mb: 3, width: '100%' }} item>
                    <TextField
                        id="email-input"
                        required
                        name="email"
                        label="Name"
                        type="email"
                        variant="filled"
                        sx={{ width: '100%' }}
                        value={formValues.email}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid sx={{ mb: 3, width: '100%' }} item>
                    <TextField
                        id="message-input"
                        required
                        name="message"
                        label="Message"
                        type="text"
                        variant="filled"
                        multiline
                        minRows={4}
                        sx={{ width: '100%' }}
                        value={formValues.message}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid sx={{ mb: 3, width: '100%' }} item>
                    <Button
                        type="submit"
                        sx={{
                            borderRadius: 0,
                            p: .2,
                            minWidth: 200,
                            fontSize: 20,
                        }}
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