import { Box, Typography } from "@mui/material";
import { useEffect, memo, useMemo } from "react";
import "./Cube.css";

const GetBoxes = (props) => {
  console.log("GetBoxes");
  const cube = document.querySelector(".cube");
  return [cube];
};

const SpinCube = () => {
  const boxVar = GetBoxes();
  boxVar[0].classList.add("spin");
};

const RemoveCube = () => {
  const cube = document.querySelector(".cube");
  cube.classList.remove("spin");
};

const InitAnimation = () => {
  const cubeOuter = document.querySelector(".cube-outer");
  cubeOuter.classList.add("animated");
};

const RemoveAnimation = () => {
  const cubeOuter = document.querySelector(".cube-outer");
  cubeOuter.classList.remove("animated");
}


function TheCube(props) {
  useEffect(() => {
    if (props.isInView) {
      SpinCube();
    } else {
      RemoveCube();
    }
  }, [props.isInView]);

  useEffect(() => {
    if (props.isInView) {
      InitAnimation();
    }
  }, [props.isInView]);

  return (
    <Box className="cube-outer">
      <Box className="scene">
        <Box className="cube">
          <Box className="cube__face cube__face--0">
            <Typography variant="h6">Full-Stack</Typography>
          </Box>
          <Box className="cube__face cube__face--1">
            <Typography variant="h6">Responsive</Typography>
          </Box>
          <Box className="cube__face cube__face--2">
            <Typography variant="h6">Intuitive</Typography>
          </Box>
          <Box className="cube__face cube__face--3">
            <Typography variant="h6">Website</Typography>
          </Box>
          <Box className="cube__face cube__face--4">
            <Typography variant="h6">Design and</Typography>
          </Box>
          <Box className="cube__face cube__face--5">
            <Typography variant="h6">Development</Typography>
          </Box>
        </Box>
        <Box className="box__shadow"></Box>
      </Box>
    </Box>
  );
}

export default TheCube;
// Language: javascript
// Path: my-portfolio\src\components\cube\Cube.js
