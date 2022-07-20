import React from "react";
import { useEffect } from "react";

export const NavContext = React.createContext(null);

export const ContextWrapper = (props) => {
  const menuItems = ["home", "about", "projects", "contact"];

  const [page, setPage] = React.useState("home");
  const [scrollIntoView, setScrollIntoView] = React.useState("home");

  const [actions] = React.useState({
    changePage: (page) => setPage(page),
  });

  const [setScrollTo] = React.useState({
    setScroll: (scroll) => setScrollIntoView(scroll),
  });

  const [menuOpen, setMenuOpen] = React.useState(false);
  const [setValue] = React.useState({
    setMenu: (valueSet) => setMenuOpen(valueSet),
  });

  useEffect(() => {
    document.querySelector("#" + scrollIntoView).scrollIntoView({
      behavior: "smooth",
    });
  }, [scrollIntoView]);

  return (
    <NavContext.Provider
      value={{
        page,
        actions,
        menuOpen,
        setValue,
        menuItems,
        setScrollTo,
        scrollIntoView,
      }}
    >
      {props.children}
    </NavContext.Provider>
  );
};
