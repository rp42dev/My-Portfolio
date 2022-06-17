import React from "react";
import useLocalStorage from "./localStorage";

// Create color context mui theme
export const ColorContext = React.createContext({
    toggleColorMode: () => {} 
});

export const useColorContext = () => {
    const context = React.useContext(ColorContext);
    if (!context) {
        throw new Error("useColorContext must be used within a ColorContextProvider");
    }
    return context;
};

export const ColorContextProvider = (props) => {
    const [colorMode, setColorMode] = React.useState("dark");
    const [colorModeStorage, setColorModeStorage] = useLocalStorage("colorMode", "dark");

    const toggleColorMode = () => {
        setColorMode(colorMode === "dark" ? "light" : "dark");
        setColorModeStorage(colorMode === "dark" ? "light" : "dark");
        document.location.reload(true);
    };

    if (colorModeStorage !== colorMode) {
        setColorMode(colorModeStorage);
    }

    return (
        <ColorContext.Provider value={{ colorMode, toggleColorMode }}>
            {props.children}
        </ColorContext.Provider>
    );
}