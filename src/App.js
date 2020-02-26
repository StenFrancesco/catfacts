import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <header></header>
      <welcomebar>test</welcomebar>
      {/* this gonna be component */}
      <Main />
    </div>
  );
}

export default App;
