import { NavContext } from "./NavContext";
import { useContext } from "react";
import Box from "@mui/material/Box";


function ScrollTop(props) {
  const { children } = props;
  const context = useContext(NavContext);

  const handleClick = (event) => {
    context.dispatch({ type: "setTab", payload: props.anchor });

    event.preventDefault();

    document.querySelector(`#${props.anchor}`).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  };

  return <Box onClick={handleClick}>{children}</Box>;
}

export default ScrollTop;
