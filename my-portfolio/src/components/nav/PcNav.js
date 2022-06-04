import * as React from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useContext } from "react";
import { AppContext } from "../../AppContext.js";

export default function PcMenu(props) {
  const context = useContext(AppContext);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
