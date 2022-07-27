import { NavContext } from "./NavContext";
import { useContext } from "react";
import { Box } from "@mui/material";


function ScrollToView(props) {
  const { children } = props;
  const context = useContext(NavContext);

  const handleClick = (event) => {
  
    context.setReducer("click", props.anchor);
  };

  return <Box onClick={handleClick}>{children}</Box>;
}

export default ScrollToView;
