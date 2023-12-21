import { useState } from "react";
import Calculator from "./components/Calculator";
import Theme from "./components/Theme";
import "./styles/index.css";
import { createContext } from "react";

const ThemeContext = createContext();

function App() {
  // State to track the current theme
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Function to handle the click event
  const handleThemeToggle = () => {
    // Toggle the theme state
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={`App ${isDarkTheme ? "light-theme" : "dark-theme"}`}>
      <ThemeContext.Provider
        value={{ isDarkTheme, setIsDarkTheme, handleThemeToggle }}
      >
        <Calculator />
        <Theme />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

export { ThemeContext };
