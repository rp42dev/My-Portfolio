import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import './Nav.css';


export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === '1') {
            document.querySelector('#home').scrollIntoView({
                behavior: 'smooth'
            });
        } else if (newValue === '2') {
            document.querySelector('#about').scrollIntoView({
                behavior: 'smooth'
            });
        } else if (newValue === '3') {
            document.querySelector('#projects').scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return (
        <Box sx={{ typography: 'btn', position: 'fixed', zIndex: 1100 }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                    >
                        <Tab label="home" value="1" />
                        <Tab label="about" value="2" />
                        <Tab label="portfolio" value="3" />
                        <Tab label="contact" value="4" />
                    </TabList>
                </Box>
            </TabContext>
        </Box>
    );
}