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
        <button
          key={key}
          className="expression"
          onClick={() => handleClick(btn)}
        >
          x
        </button>
      );
    } else if (btn === "C") {
      // Render the "AC" text for the "C" button
      return (
        <button
          key={key}
          className="expression"
          onClick={() => handleClick(btn)}
        >
          {btn}
        </button>
      );
    } else if (btn === "delete") {
      // Render FontAwesomeIcon for the "cut" button
      return (
        <button key={key} onClick={() => handleClick(btn)}>
          <FontAwesomeIcon
            icon={faDeleteLeft}
            className="delete-button expression"
          />
        </button>
      );
    } else if (btn === "÷") {
      // Render the "÷" symbol for the "/" button
      return (
        <button
          key={key}
          className="expression"
          onClick={() => handleClick(btn)}
        >
          {btn}
        </button>
      );
    } else if (btn === "%") {
      // Render the "%" symbol for the "%" button
      return (
        <button
          key={key}
          className="expression"
          onClick={() => handleClick(btn)}
        >
          {btn}
        </button>
      );
    } else if (btn === "-") {
      // Render the "-" symbol for the "-" button
      return (
        <button
          key={key}
          className="expression"
          onClick={() => handleClick(btn)}
        >
          {btn}
        </button>
      );
    } else if (btn === "+") {
      // Render the "+" symbol for the "+" button
      return (
        <button
          key={key}
          className="expression"
          onClick={() => handleClick(btn)}
        >
          {btn}
        </button>
      );
    } else if (btn === "=") {
      // Render the "=" symbol for the "=" button
      return (
        <button key={key} className="evaluate" onClick={() => handleClick(btn)}>
          {btn}
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
      <div className="calculator-keypad-inner">
        <div className="custom-shape-divider-top-1703069621">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        {buttons.map((btn, key) => renderButton(btn, key))}
      </div>
    </div>
  );
}

Keypad.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Keypad;
