import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
/*
function App() {
  const [currentPrice, setCurrentPrice] = useState(0)

  useEffect(() => {
    fetch('/coffee').then(res => res.json()).then(data => {
      setCurrentPrice(data.price);
    });
  }, []);
*/

function App() {
  const [currentPrice, setCurrentPrice] = useState(0);

  useEffect(() => {
    fetch('/coffee').then(res => res.json()).then(data => {
      setCurrentPrice(data.coffee);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>The current price is {currentPrice}.</p>
      </header>
    </div>
  );
}

export default App;
