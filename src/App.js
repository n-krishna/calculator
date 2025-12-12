import { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);


  const getInputValue = () => Number(inputRef.current.value);

  function plus(e) {
    e.preventDefault();
    setResult((prev) => prev + getInputValue());
  }

  function minus(e) {
    e.preventDefault();
    setResult((prev) => prev - getInputValue());
  }

  function times(e) {
    e.preventDefault();
    setResult((prev) => prev * getInputValue());
  }

  function divide(e) {
    e.preventDefault();
    const inputValue = getInputValue();
    if (inputValue !== 0) {
      setResult((prev) => prev / inputValue);
    }
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>

      <form>
        <p>{result}</p>

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
