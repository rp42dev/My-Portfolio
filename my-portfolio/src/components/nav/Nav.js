import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';


export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === '1') {
            document.querySelector('#about').scrollIntoView({
                behavior: 'smooth'
            });

        } else if (newValue === '2') {
            document.querySelector('#projects').scrollIntoView({
                behavior: 'smooth'
            });
        } else if (newValue === '3') {
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            document.querySelector('#home').scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return (
        <Box sx={{  typography: 'btn', position: 'fixed'}}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList 
                    onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        end>
                        <Tab label="home" value="4" />
                        <Tab label="about" value="1" />
                        <Tab label="portfolio" value="2" />
                        <Tab label="contact" value="3" />
                    </TabList>
                </Box>
            </TabContext>
        </Box>
    );
}