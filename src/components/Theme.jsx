import "../styles/theme.css";
import sunPNG from "../assets/sun.png";
import moonPNG from "../assets/moon.png";
import { ThemeContext } from "../App.jsx";
import { useContext } from "react";

function Theme() {
  const { isDarkTheme, handleThemeToggle } = useContext(ThemeContext);

  return (
    <div
      className={`theme-button-container ${
        isDarkTheme ? "dark-theme" : "light-theme"
      }`}
      onClick={handleThemeToggle}
    >
      <img
        src={isDarkTheme ? moonPNG : sunPNG}
        alt={isDarkTheme ? "Dark Theme" : "Light Theme"}
      />
    </div>
  );
}

export default Theme;
