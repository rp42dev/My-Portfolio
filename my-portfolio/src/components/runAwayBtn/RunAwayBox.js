import { Paper, useTheme, Box } from "@mui/material";
import { useColorContext } from "../../colorContext";

setTimeout(() => {
  const box6 = document.querySelector(".box6");
  const box9 = document.querySelector(".box9");

  let height = window.innerHeight - 80;
  let width = window.innerWidth - 80;

  let currentTop = box9.offsetTop;
  let currentLeft = box9.offsetLeft;

  box9.style.top = `${currentTop}px`;
  box9.style.left = `${currentLeft}px`;

  box6.style.top = `${currentTop}px`;
  box6.style.left = `${currentLeft}px`;

  box9.style.opacity = "1";
  box9.classList.remove("animated");

  const animateMove = () => {
    let top = Math.random() * height;
    let left = Math.random() * width;
    let duration = 1000;
    box6.style.top = top + "px";
    box6.style.left = left + "px";
    box9.style.top = `${top}px`;
    box9.style.left = `${left}px`;
    box9.style.transition = `left ${duration}ms, top ${duration}ms, transform 100ms ease-in-out, color 500ms ease-in-out`;
    box6.style.transition = `left ${duration}ms, top ${duration}ms`;
  };


  ["mouseover", "click", "touchstart"].forEach(function (el) {
    box6.addEventListener(el, function (event) {
      animateMove();
    });
  });
}, 3000); // end of window.onload

const RunAwayBox = () => {
  const theme = useTheme();
  const colorTheme = useColorContext();
  return (
    <>
      <Box id="runaway-btn" className="box6"></Box>
      <Paper
        sx={{
          width: "80px",
          height: "80px",
          zIndex: "1",
          backgroundColor:
            colorTheme.colorMode === "dark"
              ? theme.palette.secondary.dark
              : theme.palette.secondary.dark,
        }}
        className="box9 box"
        elevation={6}
        square
      >
        <Box className="aye">
          <div className="shut">
            <span></span>
          </div>
          <div className="ball"></div>
        </Box>
      </Paper>
    </>
  );
};

export default RunAwayBox;
