import { useState } from "react";
import CalculatorDisplay from "./components/Display";
import CalculatorKeypad from "./components/Keypad";
import "./styles/index.css";
import img from "./assets/Capture.png";

function App() {
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
      const result = eval(displayValue);
      // Update the displayValue with the result
      setDisplayValue(result.toString());
      return;
    } else {
      // Otherwise, update the displayValue based on the button click
      if (displayValue === "0") {
        console.log(buttonValue);
        setDisplayValue(buttonValue);
        return;
      } else if (displayValue === "x") {
        // If the displayValue is "*", replace it with the "x" symbol
        setDisplayValue("x");
        return;
      }
      // If the displayValue is not "0", append the buttonValue to it
      setDisplayValue((prevDisplayValue) => prevDisplayValue + buttonValue);
    }
  };

  return (
    <div className="App">
      <img src={img} alt="iphone" className="iphone" />
      <div className="display-keypad-container">
        <CalculatorDisplay value={displayValue} />
        <CalculatorKeypad onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
