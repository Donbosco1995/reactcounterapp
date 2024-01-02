import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  // const [undoStack, setUndoStack] = useState([]);

  const increment = () => {
    setCount(count + 1);
    setHistory([...history, count]);
  };

  const decrement = () => {
    if  (count !==0)
    setCount(count - 1);
    setHistory([...history, count+2]);
  };

  const clearHistory = () => {
    setCount(0);
  };

  const undo = () => {
    if (history.length > 0) {
      const previousCount = history.push();
      setCount(previousCount);
      setHistory([...history]);
      // setUndoStack([...undoStack, count]);
    }
  };

  
  return (
    <div>
      <h1>Counter App</h1>
      <div>
        <p>Count: {count}</p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick={clearHistory}>Clear History</button>
        <button onClick={undo}>Undo</button>
        </div>
    </div>
  );
}

export default CounterApp;
