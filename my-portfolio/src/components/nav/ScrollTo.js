import { NavContext } from "./NavContext";
import { useContext } from "react";
import Box from "@mui/material/Box";


function ScrollTo(props) {
  const { children } = props;
  const context = useContext(NavContext);

  const handleClick = (event) => {
    context.dispatch({ type: "setTabOnClick", payload: props.anchor });

    event.preventDefault();

    document.querySelector(`#${props.anchor}`).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  };

  return <Box onClick={handleClick}>{children}</Box>;
}

export default ScrollTo;
