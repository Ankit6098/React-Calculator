import PropTypes from "prop-types";
import "../styles/display.css";

function Display({ value }) {
  return (
    <div className="calculator-display">
      <input type="text" value={value} className="calculator-display-input" />
    </div>
  );
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
