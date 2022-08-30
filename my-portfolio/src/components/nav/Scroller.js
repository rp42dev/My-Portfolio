import {
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Scroller = (props) => {
  let end;
    scroller.scrollTo(props, {
    duration: 2000,
    smooth: true,
    delay: 0,
    offset: 0,
  });

  Events.scrollEvent.register("begin", function (to, element) {
    end = false;
  });

  Events.scrollEvent.register("end", function (to, element) {
    end = true;
  });

  scrollSpy.update();

  return end;
};

export default Scroller;
