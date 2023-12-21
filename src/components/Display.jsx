import PropTypes from "prop-types";
import "../styles/display.css";
import { useContext } from "react";
import { ThemeContext } from "../App.jsx";

function Display({ value }) {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div
      className={`calculator-display ${
        isDarkTheme ? "light-theme" : "dark-theme"
      }`}
    >
      <input
        type="text"
        value={value}
        className="calculator-display-input"
        readOnly
      />
    </div>
  );
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
