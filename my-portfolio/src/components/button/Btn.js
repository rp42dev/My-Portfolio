import * as React from 'react';

import Button from '@mui/material/Button';


export default function Btn(prop) {
    function handleClick() {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    }
    return (
        <Button
        onClick={handleClick}
        sx={{
            borderRadius: 0,
            p: .2,
            minWidth:200,
            fontSize: 20,
        }} 
        style={{ marginTop: "2rem" }} 
        color="secondary" variant="contained">
            Contact
        </Button>

    );
}