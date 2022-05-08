import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import {Stack, Tooltip} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkedIn from '@mui/icons-material/LinkedIn';


const links = [ {
    title: 'Github',
    link: 'https://github.com/Raivis80',
    icon: <GitHubIcon fontSize="large" />
}, {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/raivis-petrovskis',
    icon: <LinkedIn fontSize="large" />
}];


export default function SocialButtons() {
    return (
        <Stack direction="row" spacing={1}>
            {links.map((link, index) => (
                <Tooltip key={index} title={link.title}>
                    <IconButton color='secondary' size="large" href={link.link} target="_blank">
                        {link.icon}
                    </IconButton>
                </Tooltip>
            ))} 
        </Stack>
    );
}