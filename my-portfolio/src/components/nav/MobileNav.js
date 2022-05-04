import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { AppContext } from '../../AppContext.js';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';


export default function MobileMenu(props) {
    const context = useContext(AppContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setValue()
    };
    const setValue = () => {
        context.setValue.setMenu(true)
    }
    const handleClose = () => {
        setAnchorEl(null);
        context.setValue.setMenu(false)
    };


    return (
        <React.Fragment>
            <Box sx={{
                borderBottom: 1,
                borderColor: 'divider',
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                    <Tooltip title="Expand Menu">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ mt: 2 }}
                            aria-controls={open ? 'mobile-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <MenuIcon
                                fontSize="large"
                                color="secondary" />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="mobile-menu"
                    open={open}
                    onClose={handleClose}
                    // onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            typography: 'button',
                            letterSpacing: '2px',
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mb: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                        
                    <MenuItem key="1">
                        <Tabs
                            orientation="vertical"
                            value={context.store}
                            onChange={props.handleChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                        >
                            {props.myObject.map((option, index) => (
                                <Tab
                                    key={index}
                                    label={option}
                                    value={option}
                                >
                                </Tab>
                            ))}
                        </Tabs>

                    </MenuItem>
                </Menu>
            </Box>
        </React.Fragment>
    );
}