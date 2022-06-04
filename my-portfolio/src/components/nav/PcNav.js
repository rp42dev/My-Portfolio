import * as React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useContext } from 'react';
import { AppContext } from '../../AppContext.js';
import { useTheme } from '@mui/material/styles';


export default function PcMenu(props) {
    const context = useContext(AppContext);
    let theme = useTheme();

    return (
      <React.Fragment>
        <Tabs
          value={context.store}
          onChange={props.handleChange}
          color={
            context.colorMode === "dark"
              ? theme.palette.primary.light
              : theme.palette.primary.main
          }
          indicatorColor="secondary"
        >
          {props.myObject.map((option, index) => (
            <Tab key={index} label={option} value={option}></Tab>
          ))}
        </Tabs>
      </React.Fragment>
    );
}