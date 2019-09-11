import React, { useState } from 'react';
import './App.css';

function App() {
  const [bigNumbers, setBigNumbers] = useState(1);
  const [target, setTarget] = useState(null);
  const [numbers, setNumbers] = useState([]);

  function generateNumbers() {
    setTarget(null);
    let newNumbers = [];
    for (let i = 0; i < 6; i++) {
      let newNumber;
      if (i < bigNumbers) {
        newNumber = Math.ceil(Math.random() * 4) * 25;
      } else {
        newNumber = Math.ceil(Math.random() * 10);
      }
      newNumbers.push(newNumber);
      setNumbers(newNumbers);
    }
    setTarget(Math.ceil(Math.random() * 999));
  }

  function addToWorkings(e) {
    console.log(e);
  }

  return (
    <div className="App">
      <select onChange={e => setBigNumbers(+e.value)}>
        <option value={1}>1 large</option>
        <option value={2}>2 large</option>
        <option value={3}>3 large</option>
        <option value={4}>4 large</option>
      </select>

      <button className="generate" onClick={generateNumbers}>
        Get numbers!
      </button>

      <div className="operators-container"></div>
      <div className="numbers-container">
        {numbers &&
          numbers.length > 0 &&
          numbers.map((number, index) => (
            <button key={index} value={number} className="number-button" onClick={addToWorkings}>
              {number}
            </button>
          ))}
      </div>

      <p className="target-container">{`Target: ${target}`}</p>

      <div className="workings"></div>
    </div>
  );
}

export default App;
