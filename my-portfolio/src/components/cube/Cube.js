import { Box, Typography } from "@mui/material";


function spinCube() {
  const cube = document.querySelector(".cube");
  //rotate cube on hover random
  cube.style.transition = "transform 2s ease-in-out";
  cube.style.transform = `translateZ(-100px) rotateX(${Math.floor(
    Math.random() * 360
  )}deg) rotateY(${Math.floor(Math.random() * 360)}deg)`;
}

function TheCube() {
  return (
    <Box className="cube-outer">
      <Box class="scene">
        <Box onMouseEnter={spinCube} class="cube">
          <Box class="cube__face cube__face--front">
            <Typography variant="h6">Responsive</Typography>
          </Box>
          <Box class="cube__face cube__face--back">
            <Typography variant="h6">Accessible</Typography>
          </Box>
          <Box class="cube__face cube__face--right">
            <Typography variant="h6">Intuitive</Typography>
          </Box>
          <Box class="cube__face cube__face--left">
            <Typography variant="h6">Development</Typography>
          </Box>
          <Box class="cube__face cube__face--top">
            <Typography variant="h6">Full-Stack</Typography>
          </Box>
          <Box class="cube__face cube__face--bottom">
            <Typography variant="h6">Design</Typography>
          </Box>
        </Box>
        <Box class="box__shadow"></Box>
      </Box>
    </Box>
  );
}

export default TheCube;
// Language: javascript
// Path: my-portfolio\src\components\cube\Cube.js
