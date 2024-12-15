import React, { useState } from "react";
import "./cals.css";

export default function Calculator() {
    const [display, setDisplay] = useState(""); // Initialize display state as an empty string

    // Function to handle button clicks
    const handleButtonClick = (value) => {
        if (value === "AC") {
            setDisplay(""); // Clear the display
        } else if (value === "+/-") {
            setDisplay((prev) => (prev ? String(-parseFloat(prev)) : "")); // Toggle sign
        } else if (value === "=") {
            try {
                setDisplay((prev) => String(eval(prev))); // Evaluate the expression
            } catch {
                setDisplay("Error"); // Handle invalid expressions
            }
        } else {
            setDisplay((prev) => prev + value); // Append the value to the display
        }
    };

    return (
        <div className="calculator">
            {/* Display Input */}
            <input
                type="text"
                id="display"
                value={display}
                readOnly // Read-only to prevent manual edits
            />
            {/* Buttons */}
            <div id="buttons">
                <button onClick={() => handleButtonClick("AC")}>AC</button>
                <button onClick={() => handleButtonClick("+/-")}>+/-</button>
                <button onClick={() => handleButtonClick("%")}>%</button>
                <button onClick={() => handleButtonClick("/")}>/</button>
                <button onClick={() => handleButtonClick("7")}>7</button>
                <button onClick={() => handleButtonClick("8")}>8</button>
                <button onClick={() => handleButtonClick("9")}>9</button>
                <button onClick={() => handleButtonClick("*")}>*</button>
                <button onClick={() => handleButtonClick("4")}>4</button>
                <button onClick={() => handleButtonClick("5")}>5</button>
                <button onClick={() => handleButtonClick("6")}>6</button>
                <button onClick={() => handleButtonClick("-")}>-</button>
                <button onClick={() => handleButtonClick("1")}>1</button>
                <button onClick={() => handleButtonClick("2")}>2</button>
                <button onClick={() => handleButtonClick("3")}>3</button>
                <button onClick={() => handleButtonClick("+")}>+</button>
                <button onClick={() => handleButtonClick("0")}>0</button>
                <button onClick={() => handleButtonClick(".")}>.</button>
                <button onClick={() => handleButtonClick("=")}>=</button>
            </div>
        </div>
    );
}
