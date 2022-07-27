import * as React from "react";
import { Tab, Tabs, Box } from "@mui/material/";
import { NavContext } from "./NavContext.js";
import { useContext } from "react";
import ModeButton from "./buttons/ThemeButton.js";

export default function PcMenu() {
  const context = useContext(NavContext);

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <Tabs
          value={context.state.tab}
          indicatorColor="secondary"
          textColor="secondary"
          onChange={(event, newValue) => {
            context.setReducer("click", newValue);
          }}
        >
          {context.tabs.map((option, index) => (
            <Tab
              sx={{ color: "#D8D8D8" }}
              label={option}
              value={option}
              key={index}
            />
          ))}
        </Tabs>
        <ModeButton />
      </Box>
    </React.Fragment>
  );
}
