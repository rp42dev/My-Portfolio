import { Box, Typography } from "@mui/material";
var isAnimating;
const addEventListeners = () => {
  const cubeFaces = document.querySelectorAll(".cube__face");
  cubeFaces.forEach((face) => {
    ["mouseenter", "mouseleave", "mousedown", "mouseup"].forEach(
      (evt) => {
        face.addEventListener(evt, (e) => {
          animation(evt, face);
        });
      }
    );
  });
};

window.onload = () => {
  addEventListeners();
};
var timeoutMouseOff;
var timeoutMouseOn;
var randomSpinInterval;

function animation(evt, face) {
  switch (evt) {
    case "mouseenter":
      mouseEnter(face);
      break;
    case "mouseleave":
      mouseLeave(face);
      break;
    case "mousedown":
      mouseDown(face);
      break;
    case "mouseup":
      mouseDown(face);
      break;
    default:
      break;
  }
}

function mouseEnter(face) {
  clearInterval(randomSpinInterval);
  clearTimeout(timeoutMouseOff);
  if (!isAnimating) {
    console.log("mouse enter");
    spinTheCube(face);
    console.log(isAnimating);
  }
}

function mouseLeave(elem) {
  console.log("mouse leave");
  if (!isAnimating) {
    isAnimating = true;
    timeoutMouseOff = setTimeout(() => {
      randomSpinInterval = setInterval(spinCubeRandom, 5000);
      isAnimating = false;
    }, 1000);
  }
}

function handleMouseDrag(dragged, face) {
  if (dragged && !isAnimating) {
    spinCubeRandom();
    console.log("dragged");
  }
}

function mouseDown(evt, face) {
  let dragged = false;
  if (!isAnimating) {
    if (evt === "mousedown") {
      dragged = false;
      face.addEventListener("mousemove", handleMouseDrag, dragged, face);
    } else if (evt === "mouseup") {
      console.log("mouse up");
      dragged = false;
      console.log(face.getAttribute("data-face"));
      face.removeEventListener("mousemove", handleMouseDrag);
    }
  }
}

// Random spin if mouse not over cube face
function spinCubeRandom() {
  isAnimating = true;
  const cube = document.querySelector(".cube");
  //rotate cube random
  cube.style.transition = "transform 2s ease-in-out";

  cube.style.transform = `translateZ(-100px) rotateX(${Math.floor(
    Math.random() * 360
  )}deg) rotateY(${Math.floor(Math.random() * 360)}deg)`;
  isAnimating = false;
}

// create spin function to rotate cube on mouse enter for each face of cube

function spinTheCube(face) {
  const cube = document.querySelector(".cube");
  isAnimating = true;
  // rotate cube for specific face when mouse enter
  setTimeout(() => {
    if (face.getAttribute("data-face") === "1") {
      cube.style.transition = "transform 1s ease-in-out";
      cube.style.transform = `translateZ(-100px) rotateX(0deg) rotateY(0deg)`;
    } else if (face.getAttribute("data-face") === "2") {
      cube.style.transition = "transform 1s ease-in-out";
      cube.style.transform = `translateZ(-100px) rotateX(0deg) rotateY(180deg)`;
    } else if (face.getAttribute("data-face") === "3") {
      cube.style.transition = "transform 1s ease-in-out";
      cube.style.transform = `translateZ(-100px) rotateX(0deg) rotateY(270deg)`;
    } else if (face.getAttribute("data-face") === "4") {
      cube.style.transition = "transform 1s ease-in-out";
      cube.style.transform = `translateZ(-100px) rotateX(0deg) rotateY(90deg)`;
    } else if (face.getAttribute("data-face") === "5") {
      cube.style.transition = "transform 1s ease-in-out";
      cube.style.transform = `translateZ(-100px) rotateX(270deg) rotateY(0deg)`;
    } else if (face.getAttribute("data-face") === "6") {
      cube.style.transition = "transform 1s ease-in-out";
      cube.style.transform = `translateZ(-100px) rotateX(90deg) rotateY(0deg)`;
    }
    isAnimating = false;
  }, 1000);
}

function TheCube() {
  animation();
  return (
    <Box className="cube-outer">
      <Box className="scene">
        <Box className="cube">
          <Box data-face="1" className="cube__face cube__face--front">
            <Typography variant="h6">Responsive</Typography>
          </Box>
          <Box data-face="2" className="cube__face cube__face--back">
            <Typography variant="h6">Accessible</Typography>
          </Box>
          <Box data-face="3" className="cube__face cube__face--right">
            <Typography variant="h6">Intuitive</Typography>
          </Box>
          <Box data-face="4" className="cube__face cube__face--left">
            <Typography variant="h6">Development</Typography>
          </Box>
          <Box data-face="5" className="cube__face cube__face--top">
            <Typography variant="h6">Full-Stack</Typography>
          </Box>
          <Box data-face="6" className="cube__face cube__face--bottom">
            <Typography variant="h6">Design</Typography>
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
