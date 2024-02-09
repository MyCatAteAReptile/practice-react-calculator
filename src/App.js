import "./App.css";
import Button from "../src/components/button/Button";
import ButtonDigit from "./components/button/ButtonDigit";

function App() {
  return (
    <div className="App">
      <div className="container">
        <input type="text" />
        <div className="pad">
            <ButtonDigit>1</ButtonDigit>
            <ButtonDigit>2</ButtonDigit>
            <ButtonDigit>3</ButtonDigit>
            <Button>+</Button>
            <ButtonDigit>4</ButtonDigit>
            <ButtonDigit>5</ButtonDigit>
            <ButtonDigit>6</ButtonDigit>
            <Button>-</Button>
            <ButtonDigit>7</ButtonDigit>
            <ButtonDigit>8</ButtonDigit>
            <ButtonDigit>9</ButtonDigit>
            <Button>*</Button>
            <Button>+/-</Button>
            <ButtonDigit>0</ButtonDigit>
            <Button>.</Button>
            <Button>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
