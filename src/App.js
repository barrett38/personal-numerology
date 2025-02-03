import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DateInput from "./components/DateInput/DateInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <DateInput />
      </header>
    </div>
  );
}

export default App;
