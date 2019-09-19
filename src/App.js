import React, { useState, useEffect, useRef } from 'react';
import { Parser } from 'hot-formula-parser';
import Clock from './components/Clock';
import Number from './components/Number';
import Button from './components/Button';
import Target from './components/Target';
import Workings from './components/Workings';
import './App.css';

function App() {
  const [bigNumbers, setBigNumbers] = useState(1);
  const [target, setTarget] = useState(null);
  const [numbers, setNumbers] = useState([]);
  const [workings, setWorkings] = useState([]);
  const [total, setTotal] = useState(0);
  const [disabledNumbers, setDisabledNumbers] = useState([]);
  const [countingDown, toggleCountingDown] = useState(false);
  const [degrees, setDegrees] = useState(0);
  const [message, setMessage] = useState(null);

  function generateNumbers() {
    setWorkings([]);
    setTotal(0);
    setDisabledNumbers([]);
    setDegrees(0);
    setMessage(null);
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
    setTarget(Math.ceil(Math.random() * 899) + 100);
    toggleCountingDown(true);
  }

  function addToWorkings(item, index) {
    if (
      item === '(' ||
      item === ')' ||
      workings[workings.length - 1] === '(' ||
      workings[workings.length - 1] === ')' ||
      (typeof item === 'number' && typeof workings[workings.length - 1] !== 'number') ||
      (typeof item !== 'number' && typeof workings[workings.length - 1] === 'number')
    ) {
      setWorkings([...workings, item]);
      if (index !== undefined) setDisabledNumbers([...disabledNumbers, index]);
    }
  }

  function backspace() {
    if (typeof workings[workings.length - 1] === 'number') {
      disabledNumbers.pop();
      setDisabledNumbers(disabledNumbers);
    }
    setWorkings(workings.slice(0, workings.length - 1));
  }

  function clearAll() {
    setWorkings([]);
    setDisabledNumbers([]);
  }

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(
    () => {
      if (degrees < 180) {
        setDegrees(degrees + 3);
      } else {
        toggleCountingDown(false);
        alert("Time's up!");
      }
    },
    countingDown ? 500 : null
  );

  useEffect(() => {
    const formattedWorkings = workings
      .join('')
      .replace(/×/g, '*')
      .replace(/÷/g, '/');
    const parser = new Parser();
    const result = parser.parse(formattedWorkings);
    if (!result.error) setTotal(result.result);
  }, [workings]);

  useEffect(() => {
    if (target === total) {
      toggleCountingDown(false);
      setMessage(`Solved in ${degrees / 6} seconds`);
    }
  }, [target, total, degrees]);

  return (
    <div className="App">
      <Clock degrees={degrees} />

      <div className="controls-container">
        <select onChange={e => setBigNumbers(e.target.value)}>
          <option value={1}>1 large</option>
          <option value={2}>2 large</option>
          <option value={3}>3 large</option>
          <option value={4}>4 large</option>
        </select>

        <Button onClick={generateNumbers}>Get numbers!</Button>
      </div>

      <Target target={target} />

      <div className="numbers-container">
        {numbers &&
          numbers.length > 0 &&
          numbers.map((number, index) => (
            <Number
              key={index}
              value={number}
              disabled={disabledNumbers.includes(index)}
              onClick={() => addToWorkings(number, index)}
            />
          ))}
      </div>

      <div className="operators-container">
        {['+', '-', '×', '÷', '(', ')'].map((operator, index) => (
          <Button key={index} onClick={() => addToWorkings(operator)}>
            {operator}
          </Button>
        ))}
      </div>

      <Workings>
        <p>
          {workings.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>

        <p>
          <strong>{total}</strong>
        </p>

        <h3>{message}</h3>

        <div className="clear-buttons">
          <Button onClick={backspace}>Backspace</Button>
          <Button onClick={clearAll}>Clear All</Button>
        </div>
      </Workings>
    </div>
  );
}

export default App;
