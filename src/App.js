import React, { useState } from "react";
import Button from "./components/Button";

function App() {
  const [value, setValue] = useState(0);

  const incrementHandler = () => setValue(value + 1);
  const decrementHandler = () => setValue(value - 1);
  const reset = () => setValue(0);

  return (
    <div className="container">
        <div className="buttons">
          <h1>{value}</h1>
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
    </div>
  );
}

export default App;
