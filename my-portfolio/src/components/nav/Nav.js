import * as React from 'react';
import { useState, useEffect } from 'react';
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
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false);
            } else { // if scroll up show the navbar
                setShow(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        let myObject = ['#home', '#about', '#projects', '#contact'];
        let num = parseInt(newValue) - 1;
        document.querySelector(myObject[parseInt(num)]).scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <Box
            className={`active ${show && 'true'}`}
            sx={{
                typography: 'btn',
                position: 'fixed',
                zIndex: 1100
            }}>
            <TabContext value={context.store}>
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