import "./App.css";
import React, { useState } from "react";
import Keypad from "./components/keypad/Keypad";
import Display from "./components/display/Display";

function App() {
  const [formula, setFormula] = useState("");
  const [output, setOutput] = useState("0");

  return (
    <div className="App">
      <div className="container">
        <Display 
          formula={formula} 
          output={output} 
        />
        <Keypad
          formula={formula}
          setFormula={setFormula}
          output={output}
          setOutput={setOutput}
        />
      </div>
    </div>
  );
}

export default App;
