import React, {useState, useMemo, useEffect} from 'react';

function complexCompute(num) {
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => ({
    color: colored ? 'darkred' : 'black'
  }), [colored]);

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    console.log('Styles changed');
  }, [styles]);

  return (
    <>
      <h1 style={styles}>Counter property: {computed}</h1>
      <button onClick={() => setNumber(prev => prev + 1)}>Increase</button>
      <button onClick={() => setNumber(prev => prev - 1)}>Decrease</button>
      <button onClick={() => setColored(prev => !prev)}>Warning</button>
    </>
  );
}

export default App;
