import { Paper, useTheme, Box } from "@mui/material";
import { useEffect } from "react";
import { useColorContext } from "../../colorContext";
import "./RunAwayBox.css";

const startAnimation = () => {
  const run__inner = document.querySelector(".run__inner");
  const run__outer = document.querySelector(".run__outer");

  setTimeout(() => {
    setPositionOnstart(run__inner, run__outer);
    startAyeAnimation();
    addEventListener(run__inner);
  }, 3000);
};

function setPositionOnstart(run__inner, run__outer) {
  let currentPos9 = getPosition(run__outer);
  run__outer.style.top = currentPos9.top + "px";
  run__outer.style.left = currentPos9.left + "px";
  run__inner.style.top = currentPos9.top + "px";
  run__inner.style.left = currentPos9.left + "px";

  run__outer.classList.remove("animated");
  run__outer.style.opacity = "1";
}


function startAyeAnimation() {
  const aye = document.querySelector(".aye");
  const ball = document.querySelector(".ball");
  const lid = document.querySelector(".lid");

  function listenerFunc() {
    lid.addEventListener("animationend", () => {
      clearAyeAnimation(ball, lid, aye);
      lid.removeEventListener("animationend", listenerFunc);
    });
  }

  if (lid.classList.contains("animated")) {
    listenerFunc();
  } else {
    animateAye(aye, ball, lid);
    listenerFunc();
  }
}

function clearAyeAnimation(ball, lid, aye) {
  ball.classList.remove("animated");
  lid.classList.remove("animated");
  aye.style.display = "none";
}

function animateAye(aye, ball, lid) {
  aye.style.display = "block";
  ball.classList.add("animated");
  lid.classList.add("animated");
}

function addEventListener(elem) {
  ["mouseover", "click", "touchstart"].forEach(function (el) {
    elem.addEventListener(el, function (event) {
      startAyeAnimation();
      animateMove(elem);
    });
  });
}

function getPosition(el) {
  let rect = el.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX,
  };
}

function randomMove() {
  let height = window.innerHeight - 80;
  let width = window.innerWidth - 80;
  let top = Math.random() * height;
  let left = Math.random() * width;
  return { top, left };
}

const animateMove = (run__inner) => {
  const run__outer = document.querySelector(".run__outer");
  run__outer.style.transition = "all 1s ease";
  let move = randomMove();
  let left = move.left;
  let top = move.top;
  run__outer.style.top = top + "px";
  run__outer.style.left = left + "px";
  run__inner.style.top = top + "px";
  run__inner.style.left = left + "px";
};

const RunAwayBox = () => {
  const theme = useTheme();
  const colorTheme = useColorContext();

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <>
      <Box id="runaway-btn" className="run__inner"></Box>
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
        className="run__outer box"
        elevation={6}
        square
      >
        <Box className="aye">
          <Box className="shut">
            <Box className="lid"></Box>
          </Box>
          <Box className="ball"></Box>
        </Box>
      </Paper>
    </>
  );
};

export default RunAwayBox;
