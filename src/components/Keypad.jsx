function Keypad() {
    
    const buttons = ["AC", "+/-", "%", "÷", "7", "8", "9", "×", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="] 

    const handelClickEvent = (e) => {
        const value = e.target.value;
        if (value == "AC") {
            
        }
    }

    return(
        <div className="calculator-keypad">
            {buttons.map((btn, key) => (
            <button key={key} value={btn} onClick={handelClickEvent}>
                {btn}
            </button>
            ))}
        </div>
    )
}

export default Keypad