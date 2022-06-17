import { Paper, useTheme } from "@mui/material";
import { useColorContext } from "../../colorContext";

setTimeout (() => {
  const button = document.getElementById("runaway-btn");
  let height = window.innerHeight - 80;
  let width = window.innerWidth - 80;

  const animateMove = (element) => {
    let top = Math.random() * height;
    let left = Math.random() * width;
    let duration = 1000;
    element.style.top = top + "px";
    element.style.left = left + "px";
    element.style.transition = `top ${duration}ms ease-in-out, left ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`;
  };

  const animateZoom = (element) => {
    let duration = 500;
    element.style.transition = `transform ${duration}ms ease-in-out`;
    element.style.transform = "scale(1.1)";
    setTimeout(() => {
      element.style.transform = "scale(1)";
    }, duration);
  };

  ["mouseover", "click", "touchstart"].forEach(function (el) {
    button.addEventListener(el, function (event) {
      animateZoom(this);
      animateMove(this);
    });
  });
}, 100);   // end of window.onload


const RunAwayBox = () => {
  const theme = useTheme();
  const colorTheme = useColorContext();

  return (
    <Paper
      sx={{
        zIndex: "1",
        backgroundColor:
          colorTheme.colorMode === "dark"
            ? theme.palette.secondary.dark
            : theme.palette.secondary.dark,
      }}
      elevation={6}
      square
      className="box6 box"
      id="runaway-btn"
    ></Paper>
  );
};

export default RunAwayBox;
