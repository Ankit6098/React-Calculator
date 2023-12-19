import PropTypes from "prop-types";
import "../styles/keypad.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

function Keypad({ onButtonClick }) {
  const buttons = [
    "C",
    "delete",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  const renderButton = (btn, key) => {
    if (btn === "*") {
      // Render the "x" symbol for the "*" button
      return (
        <button key={key} onClick={() => handleClick(btn)}>
          x
        </button>
      );
    } else if (btn === "delete") {
      // Render FontAwesomeIcon for the "cut" button
      return (
        <button key={key} onClick={() => handleClick(btn)}>
          <FontAwesomeIcon icon={faDeleteLeft} className="delete-button" />
        </button>
      );
    } else {
      // Render regular button for other buttons
      return (
        <button key={key} onClick={() => handleClick(btn)}>
          {btn}
        </button>
      );
    }
  };

  const handleClick = (buttonValue) => {
    // Call the onButtonClick function passed as a prop with the button value
    onButtonClick(buttonValue);
  };

  return (
    <div className="calculator-keypad">
      {buttons.map((btn, key) => renderButton(btn, key))}
    </div>
  );
}

Keypad.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Keypad;
