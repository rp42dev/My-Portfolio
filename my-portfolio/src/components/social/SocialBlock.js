import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import {Stack, Tooltip} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';


const links = [ {
    title: 'Github',
    link: 'https://github.com/Raivis80',
    icon: <GitHubIcon fontSize="2.5rem" />
}, {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/raivis-petrovskis',
    icon: <LinkedIn fontSize="2.5rem" />
}];


export default function SocialButtons() {
    return (
        <Stack direction="row" spacing={2}>
            {links.map((link, index) => (
                <Tooltip key={index} title={link.title}>
                    <IconButton sx={{ p: 0 }} color='secondary' size="large" href={link.link} target="_blank">
                        {link.icon}
                    </IconButton>
                </Tooltip>
            ))} 
        </Stack>
    );
}