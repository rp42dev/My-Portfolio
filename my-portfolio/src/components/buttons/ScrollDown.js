import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Box, IconButton } from "@mui/material";
import { NavContext } from "../nav/NavContext";
import { useContext, useState, useEffect, useRef } from "react";
import Slide from "@mui/material/Slide";


function HideOnScroll(props) {
  const { children } = props;
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    var delayedExec = function (after, fn) {
      var timer;
      return function () {
        timer && clearTimeout(timer);
        timer = setTimeout(fn, after);
        setTrigger(false);
      };
    };

    var scrollStopper = delayedExec(500, function () {
      setTrigger(true);
    });

    window.addEventListener("scroll", scrollStopper);
  }, [trigger]);

  return (
    <Slide direction="up" in={trigger}>
      {children}
    </Slide>
  );
}

export default function DownComp(props) {

  return (
    <HideOnScroll {...props}>
      <Box
        sx={{
          bottom: 0,
          left: 0,
          position: "fixed",
          transform: "translate(0%, 0%)",
          opacity: 0.3,
        }}
        color="primary.dark"
      >
        <IconButton onClick={props.onClick}>
          <KeyboardDoubleArrowDownIcon sx={{ fontSize: 80, m: 0, p: 0 }} />
        </IconButton>
      </Box>
    </HideOnScroll>
  );
}
