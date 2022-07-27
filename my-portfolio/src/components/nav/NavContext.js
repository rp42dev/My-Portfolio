import React, { useReducer, useState, useCallback, useEffect } from "react";
import {
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export const NavContext = React.createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "click":
      return { ...state, action: action.type, tab: action.payload };
    case "scroll":
      return { ...state, action: action.type, tab: action.payload };
    case "setMenu":
      return { ...state, action: action.type, menuOpen: action.payload };
    default:
      return state;
  }
};


export const ContextWrapper = ({ children }) => {
  const tabs = ["home", "about", "projects", "contact"];
  const initialState = { tab: tabs[0], menuOpen: false, action: "" };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [active, setActive] = useState(false);

  const Scroller = useCallback((props) => {
    scroller.scrollTo(props, {
      duration: 1500,
      smooth: "easeInOutQuad",
      delay: 0,
      offset: 0,
    });
  });

  useEffect(() => {
    if (state.action === "click") {
      setActive(true);
      Scroller(state.tab);

      Events.scrollEvent.register("end", function (to, element) {
        setActive(false);
      });
      scrollSpy.update();
    }
  }, [state.action]);

  const value = {
    active: active,
    state: state,
    tabs: tabs,
    tab: state.tab,
    action: state.action,
    menuOpen: state.menuOpen,
    setReducer: (action, tab) => dispatch({ type: action, payload: tab }),
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};
