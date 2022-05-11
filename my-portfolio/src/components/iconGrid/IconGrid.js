import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';


export default function IconButtons() {
    return (
        <Stack direction="row" spacing={1}>
            <IconButton aria-label="delete">
                <GitHubIcon />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
                <VisibilityIcon />
            </IconButton>
        </Stack>
    );
}