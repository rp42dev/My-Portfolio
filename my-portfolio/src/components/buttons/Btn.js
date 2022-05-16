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
            typography: 'btn',
            borderRadius: 0,
            p: .2,
            minWidth:200,
            fontSize: 20,
            height: 40,
            color: 'dark.main',
        }} 
        mt={2} 
        color="secondary" variant="contained">
        {prop.text}
        </Button>

    );
}