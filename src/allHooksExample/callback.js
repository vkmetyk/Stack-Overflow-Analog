import React, {useState, useCallback} from 'react';
import ItemsList from "./itemsList";

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  const generateItemsFromAPI = useCallback((indexNumber) => {
    return new Array(count).fill('').map((_, index) => `Element ${index + indexNumber}`);
  }, [count]);

  return (
    <>
      <h1 style={styles}>Counter property: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Add</button>
      <button onClick={() => setColored(prev => !prev)}>Change</button>
      <ItemsList getItems={generateItemsFromAPI}/>
    </>
  );
}

export default App;


// import React, {useEffect, useState} from "react";
//
// export default function ItemsList({getItems}) {
//   const [items, setItems] = useState([]);
//
//   useEffect(() => {
//     console.log("TEST")
//     const newItems = getItems(42);
//     setItems(newItems);
//   }, [getItems]);
//
//   return (
//     <ul>
//       {items.map(i => <li key={i}>{i}</li>)}
//     </ul>
//   )
// }