import React from "react";
import LogError from "./challenges/LogError";
import UrlParser from "./challenges/UrlParser";
import Zoo from "./challenges/Zoo";

function App() {
  return (
    <div className="App">
      <h1>Rotunda Challenge</h1>
      <LogError />
      <UrlParser />
      <Zoo />
    </div>
  )
}

export default App
