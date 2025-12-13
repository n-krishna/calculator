import { useRef, useState } from "react";
import "./App.css";

function App() {
  const resultRef = useRef(null);
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  const getInputValue = () => Number(inputRef.current.value);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + getInputValue());
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - getInputValue());
  };

  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * getInputValue());
  };

  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / getInputValue());
  };


  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  const resetResult = (e) =>{
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);
  };

return (
    <div className="App">
      <h1>Simplest Working Calculator</h1>

      <form>
        <p ref={resultRef}>{result}</p>

        <input
          ref={inputRef}
          type="number"
          defaultValue={0}
          placeholder="Type a number"
        />

        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;
