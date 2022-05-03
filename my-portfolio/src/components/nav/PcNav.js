import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabContext from '@mui/lab/TabContext';
import { useContext } from 'react';
import { AppContext } from '../../AppContext.js';


export default function PcMenu(props) {
    const context = useContext(AppContext);
    let contextNum = context.store
 
    contextNum = contextNum.toString()

    return (
        <React.Fragment>
            <TabContext value={contextNum}>
                <Box >
                    <Box sx={{
                        borderBottom: 1,
                        borderColor: 'divider',
                    }}>
                        <Tabs
                            value={context.store -1}
                            textColor="secondary"
                            indicatorColor="secondary"
                        >
                            {props.myObject.map((option, index) => (
                                <Tab key={index}
                                    onClick={(event) => props.handleChange(event, index)}
                                    label={option}
                                    value={index}
                                />
                            ))}
                        </Tabs>
                    </Box>
                </Box>
            </TabContext>
        </React.Fragment>
    );
}