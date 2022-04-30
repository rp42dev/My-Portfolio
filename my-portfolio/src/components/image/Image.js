import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function MediaCard() {
    return (
        <Card >
            <CardMedia
                component="img"
                
                image="https://source.unsplash.com/random/360x240"
                alt="green iguana"
            />
        </Card>
    );
}