import { Box, Typography, useTheme } from "@mui/material";
import { useColorContext } from "../../../ColorContext";
import { useEffect, memo } from "react";
import "./Cube.css";

const GetElement = (props) => {
  const cube = document.querySelector(props);
  return cube;
};

const addListener = (cube) => {
  cube.addEventListener("click", (e) => {
    pauseAnimationState(cube);
  });
};

const removeListener = (cube) => {
  cube.removeEventListener("click", (e) => {});
};

const SpinCube = () => {
  const cube = GetElement(".cube");
  cube.classList.add("spin");
  cube.style.animationPlayState = "running";
  addListener(cube);
};

const stopSpinCube = () => {
  const cube = GetElement(".cube");
  cube.classList.remove("spin");
  removeListener(cube);
};

let timeout;

const pauseAnimation = (cube) => {
  cube.style.animationPlayState = "paused";
  timeout = setTimeout(() => {
    cube.style.animationPlayState = "running";
  }, 5000);
};

const resumeAnimation = (cube) => {
  cube.style.animationPlayState = "running";
  clearTimeout(timeout);
};

const pauseAnimationState = (cube) => {
  switch (cube.style.animationPlayState) {
    case "running":
      pauseAnimation(cube);
      break;
    case "paused":
      resumeAnimation(cube);
      break;
    default:
      break;
  }
};

const InitAnimation = () => {
  const cubeOuter = GetElement(".cube-outer");
  cubeOuter.classList.add("animated");
};

const cubeText = [
  "Full Stack",
  "Responsive",
  "Intuitive",
  "Website",
  "Design And",
  "Development",
];

const Cube = memo(() => {
  let theme = useTheme();
  const colorTheme = useColorContext().colorMode;
  return (
    <>
      {cubeText.map((text, index) => {
        return (
          <Box
            sx={{
              boxShadow:
                colorTheme === "dark"
                  ? "0 0 0 rgba(18, 18, 18, 0.151)"
                  : "0 0 2px rgba(168, 124, 100) 0 0 2px",
              backgroundColor:
                colorTheme === "dark"
                  ? theme.palette.background.paper
                  : theme.palette.secondary.dark,
            }}
            className={"cube__face cube__face--" + index}
            key={index}
          >
            <Typography variant="h6">{text}</Typography>
          </Box>
        );
      })}
    </>
  );
});

function TheCube(props) {
  useEffect(() => {
    if (props.isInView) {
      InitAnimation();
      SpinCube();
    } else {
      stopSpinCube();
    }
  }, [props.isInView]);
 
  return (
    <Box className="cube-outer">
      <Box className="scene">
        <Box className="cube">
          <Cube />
        </Box>
        <Box className="box__shadow"></Box>
      </Box>
    </Box>
  );
}

export default TheCube;
// Language: javascript
// Path: my-portfolio\src\components\cube\Cube.js
