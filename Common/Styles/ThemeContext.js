import React, { createContext, useState } from "react";

// Create ThemeContext
const ThemeContext = createContext();

// Define themes
const themes = {
  light: {
    background: "#ffffff",
    color: "#000000",
    buttonBackground: "#007bff",
    buttonColor: "#ffffff",
  },
  dark: {
    background: "#000000",
    color: "#ffffff",
    buttonBackground: "#6c757d",
    buttonColor: "#000000",
  },
};

// ThemeContext Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// // Custom Hook to use ThemeContext
// export const useTheme = () => useContext(ThemeContext);
