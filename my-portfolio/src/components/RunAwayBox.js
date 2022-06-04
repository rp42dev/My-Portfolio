import { Paper, useTheme} from "@mui/material";
import { useColorContext } from "../colorContext";


window.onload = () => {
const animateMove = (element, prop, pixels) =>
element.animate([{ [prop]: `${pixels}px` }], {
  
  duration: 1000,
  fill: "forwards",
  easing: "ease-in-out",
});


  const button = document.getElementById("runaway-btn");
  ["mouseover", "click"].forEach(function (el) {
    button.addEventListener(el, function (event) {
      
      const top = getRandomNumber(window.innerHeight - 80);
      const left = getRandomNumber(window.innerWidth - 80);

      animateMove(this, "left", left);
      animateMove(this, "top", top);
    });
  });
  
  const getRandomNumber = (num) => {

    return Math.floor(Math.random() * (num + 1));
  };
};


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
        className="box6"
        id="runaway-btn"
      ></Paper>
    );
}

export default RunAwayBox;
