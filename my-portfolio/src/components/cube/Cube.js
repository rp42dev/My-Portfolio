import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import './Cube.css';

function TheCube() {
  useEffect(() => {
    const cubeOuter = document.querySelector(".cube-outer");
    const cube = document.querySelector(".cube");
    cubeOuter.classList.add("animated");
    cube.classList.add("spin");
  }, []);
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
