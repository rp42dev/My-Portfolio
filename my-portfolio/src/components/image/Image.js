import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';

export default function MediaCard(props) {
    return (
        <Card sx={{ maxWidth: 900 }}>
            <CardMedia
                component="img"
                height="auto"
                width='100%'
                image={props.image}
                alt="Nicola Sturgeon on a TED talk stage"
            />
        </Card>
    );
}
