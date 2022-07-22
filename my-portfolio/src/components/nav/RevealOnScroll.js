import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";

function Reveal(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    
    <Slide
      direction={props.direction}
      in={props.trigger == "up" ? !trigger : trigger}
      mountOnEnter
      unmountOnExit
    >
      
      {children}
    </Slide>
  );
}

export default Reveal;
