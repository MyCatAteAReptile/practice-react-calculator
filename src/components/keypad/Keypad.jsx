import React from "react";
import Button from "../button/Button";
import classes from "./Keypad.module.css";

const Keypad = ({ formula, setFormula, output, setOutput }) => {
  const isMath = (string) => {
    const matchedCharArray = string.match("[-.=+*/0-9/s]{1,}");
    return matchedCharArray[0].length === string.length;
  };

  const isFormulaCompleted = (string) => string.slice(-1) === "=";

  const clear = () => {
    setFormula("");
    setOutput("0");
  };

  const processDigit = (number) => {
    if (isFormulaCompleted(formula)) {
      setFormula("");
      setOutput(number);
    } else {
      if (output === "0") {
        setOutput(number);
      } else {
        setOutput(output + number);
      }
    }
  };

  const processDecimal = (divider) => {
    if (isFormulaCompleted(formula)) {
      setFormula("");
      setOutput("0.");
    } else {
      if (output.indexOf(".") === -1) {
        setOutput(output + divider);
      }
    }
  };

  const processOperation = (operation) => {
    if (isFormulaCompleted(formula)) {
      clear();
    } else {
      setFormula(
        formula + (output.slice(-1) === "." ? output.slice(0, -1) : output) + operation
      );
      setOutput("0");
    }
  };

  const processFormula = () => {
    const resultFormula =
      formula + (output.slice(-1) === "." ? output.slice(0, -1) : output);

    if (!isFormulaCompleted(formula)) {
      if (isMath(resultFormula)) {
        setFormula(resultFormula + "=");
        // eslint-disable-next-line
        setOutput(eval(resultFormula).toString());
      }
    }
  };

  const buttons = [
    {
      id: "clear",
      styleClassesArray: ["button__operation"],
      value: "AC",
      onClick: clear
    },
    {
      id: "add",
      styleClassesArray: ["button__operation"],
      value: "+",
      onClick: (e) => {
        processOperation(e.target.value);
      }
    },
    {
      id: "subtract",
      styleClassesArray: ["button__operation"],
      value: "-",
      onClick: (e) => {
        processOperation(e.target.value);
      }
    },
    {
      id: "one",
      styleClassesArray: ["button__digital"],
      value: "1",
      onClick: (e) => {
        processDigit(e.target.value);
      }
    },
    {
      id: "two",
      styleClassesArray: ["button__digital"],
      value: "2",
      onClick: (e) => {
        processDigit(e.target.value);
      }
    },
    {
      id: "three",
      styleClassesArray: ["button__digital"],
      value: "3",
      onClick: (e) => {
        processDigit(e.target.value);
      }
    },
    {
      id: "multiply",
      styleClassesArray: ["button__operation"],
      value: "*",
      onClick: (e) => {
        processOperation(e.target.value);
      }
    },
    {
      id: "four",
      styleClassesArray: ["button__digital"],
      value: "4",
      onClick: (e) => {
        processDigit(e.target.value);
      }
    },
    {
      id: "five",
      styleClassesArray: ["button__digital"],
      value: "5",
      onClick: (e) => {
        processDigit(e.target.value);
      }
    },
    {
      id: "six",
      styleClassesArray: ["button__digital"],
      value: "6",
      onClick: (e) => {
        processDigit(e.target.value);
      }
    },
    {
      id: "divide",
      styleClassesArray: ["button__operation"],
      value: "/",
      onClick: (e) => {
        processOperation(e.target.value);
      }
    },
    {
      id: "seven",
      styleClassesArray: ["button__digital"],
      value: "7",
      onClick: (e) => {
        processDigit(e.target.value);
      }
    },
    {
      id: "eight",
      styleClassesArray: ["button__digital"],
      value: "8",
      onClick: (e) => {
        processDigit(e.target.value);
      }
    },
    {
      id: "nine",
      styleClassesArray: ["button__digital"],
      value: "9",
      onClick: (e) => {
        processDigit(e.target.value);
      }
    },
    {
      id: "zero",
      styleClassesArray: ["button__digital"],
      value: "0",
      onClick: (e) => {
        processDigit(e.target.value);
      }
    },
    {
      id: "decimal",
      styleClassesArray: ["button__digital"],
      value: ".",
      onClick: (e) => {
        processDecimal(e.target.value);
      }
    },
    {
      id: "equals",
      styleClassesArray: ["button__operation"],
      value: "=",
      onClick: (e) => {
        processFormula(e.target.value);
      }
    }
  ]

  return (
    <div className={classes.keypad}>
      { buttons.map(button => 
        <Button
          id={button.id}
          styleClassesArray={button.styleClassesArray}
          value={button.value}
          onClick={button.onClick}
        >
          {button.value}
        </Button>
      )}
    </div>
  );
};

export default Keypad;
