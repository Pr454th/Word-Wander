"use client";
import React, { useState } from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div className={`theme ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
