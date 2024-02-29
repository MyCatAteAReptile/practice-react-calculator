import "./App.css";
import Button from "../src/components/button/Button";
import React, { useState } from "react";

function App() {
  const [formula, setFormula] = useState("");
  const [output, setOutput] = useState("0");

  const isMath = (string) => {
    const matchedCharArray = string.match("[-.=+*/0-9/s]{1,}");
    console.log(matchedCharArray);
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
      setOutput(output + divider);
    } else {
      setFormula("");
      setOutput("0.");
    }
  };

  const processOperation = (operation) => {
    if (!isFormulaCompleted(formula)) {
      setFormula(formula + output + operation);
      setOutput("0");
    } else {
      clear();
    }
  };

  const processFormula = () => {
    const resultFormula = formula + output;
    console.log(resultFormula);

    if (isMath(resultFormula)) {
      console.log("2");
      setFormula(resultFormula + "=");
      setOutput(eval(resultFormula));
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="display display__formula">{formula}</div>
        <div className="display" id="display">
          {output}
        </div>
        <div className="pad">
          <Button
            id="clear"
            style={{ gridColumn: "1/3" }}
            value=""
            onClick={clear}
          >
            AC
          </Button>
          <Button
            id="add"
            value="+"
            onClick={(e) => {
              processOperation(e.target.value);
            }}
          >
            +
          </Button>
          <Button
            id="subtract"
            value="-"
            onClick={(e) => {
              processOperation(e.target.value);
            }}
          >
            -
          </Button>
          <Button
            id="one"
            value="1"
            onClick={(e) => {
              processDigit(e.target.value);
            }}
          >
            1
          </Button>
          <Button
            id="two"
            value="2"
            onClick={(e) => {
              processDigit(e.target.value);
            }}
          >
            2
          </Button>
          <Button
            id="three"
            value="3"
            onClick={(e) => {
              processDigit(e.target.value);
            }}
          >
            3
          </Button>
          <Button
            id="multiply"
            value="*"
            onClick={(e) => {
              processOperation(e.target.value);
            }}
          >
            *
          </Button>
          <Button
            id="four"
            value="4"
            onClick={(e) => {
              processDigit(e.target.value);
            }}
          >
            4
          </Button>
          <Button
            id="five"
            value="5"
            onClick={(e) => {
              processDigit(e.target.value);
            }}
          >
            5
          </Button>
          <Button
            id="six"
            value="6"
            onClick={(e) => {
              processDigit(e.target.value);
            }}
          >
            6
          </Button>
          <Button
            id="divide"
            value="/"
            onClick={(e) => {
              processOperation(e.target.value);
            }}
          >
            /
          </Button>
          <Button
            id="seven"
            value="7"
            onClick={(e) => {
              processDigit(e.target.value);
            }}
          >
            7
          </Button>
          <Button
            id="eight"
            value="8"
            onClick={(e) => {
              processDigit(e.target.value);
            }}
          >
            8
          </Button>
          <Button
            id="nine"
            value="9"
            onClick={(e) => {
              processDigit(e.target.value);
            }}
          >
            9
          </Button>
          <Button
            id="zero"
            style={{ gridColumn: "1/3" }}
            value="0"
            onClick={(e) => {
              processDigit(e.target.value);
            }}
          >
            0
          </Button>
          <Button
            id="decimal"
            value="."
            onClick={(e) => {
              processDecimal(e.target.value);
            }}
          >
            .
          </Button>
          <Button
            id="equals"
            style={{ gridRow: "4/6", gridColumn: "4/5" }}
            value="="
            onClick={processFormula}
          >
            =
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
