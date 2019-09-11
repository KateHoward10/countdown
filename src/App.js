import React, { useState } from 'react';
import './App.css';

function App() {
  const [bigNumbers, setBigNumbers] = useState(1);
  const [target, setTarget] = useState(null);
  const [numbers, setNumbers] = useState([]);
  const [workings, setWorkings] = useState([]);

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

  function addToWorkings(number) {
    setWorkings([...workings, number]);
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

      <div className="operators-container">
        {['+', '-', '×', '÷'].map((operator, index) => (
          <button key={index} onClick={() => addToWorkings(operator)}>
            {operator}
          </button>
        ))}
      </div>

      <div className="numbers-container">
        {numbers &&
          numbers.length > 0 &&
          numbers.map((number, index) => (
            <button key={index} className="number-button" onClick={() => addToWorkings(number)}>
              {number}
            </button>
          ))}
      </div>

      <p className="target-container">{`Target: ${target}`}</p>

      <div className="workings">
        <p>
          {workings.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default App;
