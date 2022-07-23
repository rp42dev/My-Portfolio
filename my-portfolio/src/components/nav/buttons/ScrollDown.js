import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Box, IconButton } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { NavContext } from "../NavContext.js";
import Slide from "@mui/material/Slide";
import ScrollTo from "../ScrollTo";

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
  const context = useContext(NavContext);
  const [anchor, setAnchor] = useState(null);
    
  useEffect(() => {
    let current = context.state.tab;
    let index = context.tabs.indexOf(current)+1;
    if(index < context.tabs.length){
      setAnchor(context.tabs[index]);
    } else {
      setAnchor('footer');
    }
  }, [context.tabs]);

  return (
   
    <HideOnScroll {...props}>
      <Box
        className="down-comp"
        sx={{
          zIndex: 1000,
          bottom: 20,
          left: 0,
          position: "fixed",
          transform: "translate(0%, 0%)",
          opacity: 0.3,
        }}
        color="primary.dark"
      >
        <ScrollTo {...props} anchor={anchor}>
          <IconButton >
            <KeyboardDoubleArrowDownIcon sx={{ fontSize: 80, m: 0, p: 0 }} />
          </IconButton>
        </ScrollTo>
      </Box>
    </HideOnScroll>
  );
}
