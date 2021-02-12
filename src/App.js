import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [value, setValue] = useState(0);

  const incrementHandler = (e) => {
    e.preventDefault();
    setValue(value + 1);
  };

  const decrementHandler = (e) => {
    e.preventDefault();
    setValue(value - 1);
  };

  const reset = (e) => {
    e.preventDefault();
    setValue(0);
  };

  return (
    <div className="container">
      <form>
        <h1>{value}</h1>
        <div className="buttons">
          <Button
            id="increment-btn"
            Name="Increment"
            onClick={incrementHandler}
          />
          <Button
            id="decrement-btn"
            Name="Decrement"
            onClick={decrementHandler}
          />
          <Button id="reset-btn" Name="Reset" onClick={reset} />
        </div>
      </form>
    </div>
  );
}

export default App;
