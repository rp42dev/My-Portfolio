import * as React from "react";
import Button from "@mui/material/Button";

export default function Btn(props) {
  return (
    <Button
      sx={{
        typography: "btn",
        borderRadius: 0,
        p: 0.2,
        minWidth: 200,
        fontSize: 20,
        height: 40,
        color: "dark.main",
      }}
      mt={2}
      color="secondary"
      variant="contained"
    >
      {props.text}
    </Button>
  );
}
