import React, {useState} from "react";

function computeInitialCounter() {
  console.log('Some calculations...')
  return Math.trunc(Math.random() * 20)
}

function App() {
  const [counter, setCounter] = useState(() => computeInitialCounter())

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now()
  });

  function increment() {
    setCounter(prevCounter => prevCounter + 1);
  }

  function decrement() {
    setCounter(prevCounter => prevCounter - 1);
  }

  function updateTitle() {
    setState(prev => {
      return {
        ...prev,
        title: 'New name'
      }
    });
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Remove</button>
      <button onClick={updateTitle}>Default</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;