import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { selectCurrentTheme } from "./theme.selector";

const DarkThemeProvider = ({ children }) => {
  const darkThemeEnabled = useSelector(selectCurrentTheme);
  return (
    <ThemeProvider theme={{ theme: darkThemeEnabled ? "dark" : "light" }}>
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;