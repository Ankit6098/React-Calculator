import { useState } from "react";
import CalculatorDisplay from "./Display";
import CalculatorKeypad from "./Keypad";
import "../styles/calculator.css";
import iphone from "../assets/capture.png";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");

  const handleButtonClick = (buttonValue) => {
    // Update the displayValue in the state based on the button click
    if (buttonValue === "C") {
      // If "AC" is clicked, reset the display to "0"
      setDisplayValue("0");
      return;
    } else if (buttonValue === "delete") {
      // If "delete" is clicked, delete the last character from the display
      if (displayValue.length === 1) {
        // If the displayValue is only one character, set it to "0"
        setDisplayValue("0");
        return;
      }
      // Otherwise, delete the last character from the displayValue
      setDisplayValue((prevDisplayValue) =>
        prevDisplayValue.substring(0, prevDisplayValue.length - 1)
      );
      return;
    } else if (buttonValue === "=") {
      // If "=" is clicked, calculate the result
      try {
        const result = eval(displayValue);
        // Check for division by zero
        if (!isFinite(result) || isNaN(result)) {
          throw new Error("Cannot divide by zero");
        }
        // Update the displayValue with the result
        setDisplayValue(result.toString());
      } catch (error) {
        // Handle errors, e.g., division by zero
        setDisplayValue("Error");
        console.error(error.message);
      }
      return;
    } else if (
      buttonValue === "+" ||
      buttonValue === "-" ||
      buttonValue === "*" ||
      buttonValue === "/"
    ) {
      // If an operator is clicked, check for special cases
      const lastChar = displayValue[displayValue.length - 1];
      if (
        lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "*" ||
        lastChar === "/"
      ) {
        // If the last character is an operator, replace it with the new operator
        setDisplayValue(
          (prevDisplayValue) =>
            prevDisplayValue.substring(0, prevDisplayValue.length - 1) +
            buttonValue
        );
      } else {
        // Otherwise, append the operator to the displayValue
        setDisplayValue((prevDisplayValue) => prevDisplayValue + buttonValue);
      }
    } else if (buttonValue === "0" && displayValue === "0") {
      // If the current display value is "0" and the user enters another "0", do nothing
      return;
    } else if (displayValue === "0" && /[1-9]/.test(buttonValue)) {
      // If the current display value is "0" and the user enters a digit, replace "0" with the digit
      setDisplayValue(buttonValue);
    } else {
      // For other buttons, update the displayValue based on the button click
      setDisplayValue((prevDisplayValue) => prevDisplayValue + buttonValue);
    }
  };

  return (
    <div className="Calculator-container">
      <img src={iphone} alt="iphone" className="iphone" />
      <div className="display-keypad-container">
        <CalculatorDisplay value={displayValue} />
        <CalculatorKeypad onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default Calculator;
