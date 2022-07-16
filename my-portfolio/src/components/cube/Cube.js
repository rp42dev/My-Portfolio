import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";


var isAnimating = false;

const addEventListeners = () => {
  var cubeFaces = document.querySelectorAll(".cube__face");;

  cubeFaces.forEach((face) => {
    ["mouseenter", "click"].forEach((evt) => {
      face.addEventListener(evt, (e) => {
        
      });
    });
  });
};

var SpinInterval;
const startAnimation = () => {
  addEventListeners();
  SpinInterval = setInterval(spinCubeSetup, 13000);
};

// spin if mouse not over cube face
function spinCubeSetup() {
  const cubeFaces = document.querySelectorAll(".cube__face");
    // spin each face for each face with delay of 1 second
    for (let face = 0; face < cubeFaces.length; face++) {
      setTimeout(() => {
        spinCube(cubeFaces[face]);
        console.log("spinCubeSetup");
      }, 2000 * face);
    }
}

// create spin function to rotate cube

function spinCube(face) {
    console.log("spinCube");
  const cube = document.querySelector(".cube");
    const faceIndex = [...cube.children].indexOf(face);
    const faceToSpinClass = `cube__face--${faceIndex}--spin`;
    cube.classList.add(faceToSpinClass, "cube__face--spin");
    setTimeout(() => {
        cube.classList.remove(faceToSpinClass, "cube__face--spin");
        isAnimating = false;
    }, 1000);
}

function TheCube() {
//   useEffect(() => {
//     startAnimation();
//     spinCubeSetup();
//   }, []);

  return (
    <Box className="cube-outer">
      <Box className="scene">
        <Box className="cube spin">
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
