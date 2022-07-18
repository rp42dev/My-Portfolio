import * as React from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import ModeButton from "../buttons/ThemeButton";
import { useColorContext } from "../../ColorContext";

import { NavContext } from "../../NavContext.js";
import { useContext } from "react";

export default function PcMenu(props) {
  let mode = useColorContext();
  const context = useContext(NavContext);

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
          value={context.page}
          indicatorColor="secondary"
          textColor="secondary"
        >
          {context.menuItems.map((option, index) => (
            <Tab
              sx={{ color: "#D8D8D8" }}
              key={index}
              label={option}
              value={option}
              onClick={() => {
                context.setScrollTo.setScroll(option);
              }}
            ></Tab>
          ))}
        </Tabs>
        <ModeButton />
      </Box>
    </React.Fragment>
  );
}
