import React, { useReducer } from "react";


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

  const value = {
    state: state,
    tabs: tabs,
    tab: state.tab,
    action: state.action,
    menuOpen: state.menuOpen,
    setReducer: (action, tab) => dispatch({ type: action, payload: tab }),
  };

  return (
    <NavContext.Provider
      value={value}
    >
      {children}
    </NavContext.Provider>
  );
};
