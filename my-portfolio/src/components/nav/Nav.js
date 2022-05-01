import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { useContext } from 'react';
import { AppContext } from '../../AppContext.js';
import './Nav.css';


export default function LabTabs(props) {
    const context = useContext(AppContext);
    const [value, setValue] = React.useState(context.store);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
        let myObject = ['#home', '#about', '#projects', '#contact'];
        let num = parseInt(newValue) - 1;
        document.querySelector(myObject[parseInt(num)]).scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <Box sx={{ typography: 'btn', position: 'fixed', zIndex: 1100 }}>
            <TabContext value={context.store || value}>
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