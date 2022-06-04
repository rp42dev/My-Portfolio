import * as React from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import { Tooltip } from "@mui/material";
import ModeButton from "../buttons/ThemeButton";
import { useColorContext } from "../../colorContext";


import { AppContext } from "../../AppContext.js";
import { useContext } from "react";

export default function PcMenu(props) {
  let mode = useColorContext();
  const context = useContext(AppContext);
  
  let toolTip = "";
  if (mode.colorMode === "light") {
    toolTip = "Dark Mode";
  } else {
    toolTip = "Light Mode";
  }

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <Tabs
          value={context.store}
          onChange={props.handleChange}
          indicatorColor="secondary"
          textColor="secondary"
        >
          {props.myObject.map((option, index) => (
            <Tab
              sx={{ color: "#D8D8D8" }}
              key={index}
              label={option}
              value={option}
            ></Tab>
          ))}
        </Tabs>
        <ModeButton/> 
      </Box>
    </React.Fragment>
  );
}
