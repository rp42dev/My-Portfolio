import * as React from "react";
import { Tab, Tabs, Box } from "@mui/material/";
import { NavContext } from "./NavContext.js";
import { useContext } from "react";
import ModeButton from "./buttons/ThemeButton.js";;

export default function PcMenu(props) {
  const context = useContext(NavContext);

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
