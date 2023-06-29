import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Characters from "./components/Characters";


function App() {

  return (
    <div className="App">
      <header className="App-header">
      <div className="main">

      <Characters/>
    </div>
      </header>
    </div>
  );
}

export default App;
