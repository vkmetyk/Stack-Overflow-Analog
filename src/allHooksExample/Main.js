import React from "react";
import {useAlert} from "./alert/AlertContext";

export default function Main() {
  const {show} = useAlert();

  return (
    <>
      <h1>Hello from example with Context</h1>
      <button onClick={() => show('This text is from Main.js')}>Show alert</button>
    </>
  );
}