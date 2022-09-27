import React from "react";
import useLocalStorage from "./localStorage";
import { createTheme } from "@mui/material/styles";

export const themeMode = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            main: "#E5E5E5",
            light: "#EEEEEE",
            dark: "#D8D8D8",
          },
          secondary: {
            main: "#b37142",
            light: "#BC855D",
            dark: "#9C5F3F",
          },
          dark: {
            main: "#121212",
          },
          background: {
            default: "#28282a",
            paper: "rgba(18, 18, 18, 0.8)",
          },
        }
      : {
          primary: {
            main: "#28282a",
            light: "#333335",
            dark: "#141415",
          },
          secondary: {
            main: "#b37142",
            light: "#BC855D",
            dark: "#9C5F3F",
          },
          dark: {
            main: "#D8D8D8",
          },

          background: {
            default: "#D8D8D8",
            paper: "rgba(229, 229, 229, 0.8)",
          },
        }),
  },
  typography: {
    fontFamily: "'Iceland', cursive",
    h1: {
      fontSize: "6rem",
      lineHeight: ".8em",
      fontWeight: "bolder",
    },
    h2: {
      lineHeight: ".8em",
      fontWeight: "bolder",
    },
    h3: {
      fontWeight: "bolder",
    },
    h6: {
      fontSize: "1.3em",
      lineHeight: ".8em",
      letterSpacing: "0.06rem",
      marginBottom: "0.35em",
    },
    body1: {
      fontSize: "1.2rem",
      fontWeight: "lighter",
      lineHeight: "1em",
      letterSpacing: "0.01rem",
    },
    body2: {
      fontSize: "1rem",
      lineHeight: "1em",
      letterSpacing: "0.01rem",
    },
    caption: {
      fontSize: ".6rem",
      letterSpacing: ".15rem",
      fontWeight: "bolder",
    },
  },
});

// Create color context mui theme
export const ColorContext = React.createContext({
  toggleColorMode: () => {},
});

export const useColorContext = () => {
  const context = React.useContext(ColorContext);
  if (!context) {
    throw new Error(
      "useColorContext must be used within a ColorContextProvider"
    );
  }
  return context;
};

export const ColorContextProvider = (props) => {
  const [colorMode, setColorMode] = React.useState("dark");
  const [colorModeStorage, setColorModeStorage] = useLocalStorage(
    "colorMode",
    "dark"
  );
  const theme = createTheme(themeMode(colorMode));

  const toggleColorMode = () => {
    setColorMode(colorMode === "dark" ? "light" : "dark");
    setColorModeStorage(colorMode === "dark" ? "light" : "dark");
  };

  if (colorModeStorage !== colorMode) {
    setColorMode(colorModeStorage);
  }

  return (
    <ColorContext.Provider
      value={{
        colorMode: colorMode,
        toggleColorMode: toggleColorMode,
        themeMode: themeMode,
        theme: theme,
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
};
