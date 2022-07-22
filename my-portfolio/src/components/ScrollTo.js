import Box from "@mui/material/Box";


function ScrollTop(props) {
  
  const { children } = props;

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      `#${props.anchor}`
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return <Box onClick={handleClick}>{children}</Box>;
}

export default ScrollTop;