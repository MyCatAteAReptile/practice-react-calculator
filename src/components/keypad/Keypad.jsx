import React from "react";
import Button from "../button/Button";
import classes from "./Keypad.module.css"

const Keypad = ({formula, setFormula, output, setOutput}) => {
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
    if (!isFormulaCompleted(formula)) {
      if (output === "0") {
        setOutput(number);
      } else {
        setOutput(output + number);
      }
    } else {
      setFormula("");
      setOutput(number);
    }
  };

  const processDecimal = (divider) => {
    if (!isFormulaCompleted(formula)) {
      if (output.indexOf(".") === -1) {
        setOutput(output + divider);
      }
    } else {
      setFormula("");
      setOutput("0.");
    }
  };

  const processOperation = (operation) => {
    if (!isFormulaCompleted(formula)) {
      setFormula(
        formula +
          (output.slice(-1) === "." ? output.slice(0, -1) : output) +
          operation
      );
      setOutput("0");
    } else {
      clear();
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

  return (
    <div className={ classes.keypad }>
      <Button
        id="clear"
        styleClassesArray={["button__operation"]}
        value=""
        onClick={clear}
      >
        AC
      </Button>
      <Button
        id="add"
        value="+"
        styleClassesArray={["button__operation"]}
        onClick={(e) => {
          processOperation(e.target.value);
        }}
      >
        +
      </Button>
      <Button
        id="subtract"
        value="-"
        styleClassesArray={["button__operation"]}
        onClick={(e) => {
          processOperation(e.target.value);
        }}
      >
        -
      </Button>
      <Button
        id="one"
        value="1"
        styleClassesArray={["button__digital"]}
        onClick={(e) => {
          processDigit(e.target.value);
        }}
      >
        1
      </Button>
      <Button
        id="two"
        value="2"
        styleClassesArray={["button__digital"]}
        onClick={(e) => {
          processDigit(e.target.value);
        }}
      >
        2
      </Button>
      <Button
        id="three"
        value="3"
        styleClassesArray={["button__digital"]}
        onClick={(e) => {
          processDigit(e.target.value);
        }}
      >
        3
      </Button>
      <Button
        id="multiply"
        value="*"
        styleClassesArray={["button__operation"]}
        onClick={(e) => {
          processOperation(e.target.value);
        }}
      >
        *
      </Button>
      <Button
        id="four"
        value="4"
        styleClassesArray={["button__digital"]}
        onClick={(e) => {
          processDigit(e.target.value);
        }}
      >
        4
      </Button>
      <Button
        id="five"
        value="5"
        styleClassesArray={["button__digital"]}
        onClick={(e) => {
          processDigit(e.target.value);
        }}
      >
        5
      </Button>
      <Button
        id="six"
        value="6"
        styleClassesArray={["button__digital"]}
        onClick={(e) => {
          processDigit(e.target.value);
        }}
      >
        6
      </Button>
      <Button
        id="divide"
        value="/"
        styleClassesArray={["button__operation"]}
        onClick={(e) => {
          processOperation(e.target.value);
        }}
      >
        /
      </Button>
      <Button
        id="seven"
        value="7"
        styleClassesArray={["button__digital"]}
        onClick={(e) => {
          processDigit(e.target.value);
        }}
      >
        7
      </Button>
      <Button
        id="eight"
        value="8"
        styleClassesArray={["button__digital"]}
        onClick={(e) => {
          processDigit(e.target.value);
        }}
      >
        8
      </Button>
      <Button
        id="nine"
        value="9"
        styleClassesArray={["button__digital"]}
        onClick={(e) => {
          processDigit(e.target.value);
        }}
      >
        9
      </Button>
      <Button
        id="zero"
        value="0"
        styleClassesArray={["button__digital"]}
        onClick={(e) => {
          processDigit(e.target.value);
        }}
      >
        0
      </Button>
      <Button
        id="decimal"
        value="."
        styleClassesArray={["button__digital"]}
        onClick={(e) => {
          processDecimal(e.target.value);
        }}
      >
        .
      </Button>
      <Button
        id="equals"
        value="="
        styleClassesArray={["button__operation"]}
        onClick={processFormula}
      >
        =
      </Button>
    </div>
  );
};

export default Keypad;
