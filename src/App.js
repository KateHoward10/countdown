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
  const [degrees, setDegrees] = useState(0);

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
    setTarget(Math.ceil(Math.random() * 899) + 100);
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

  function clearFromWorkings() {
    if (typeof workings[workings.length - 1] === 'number') {
      disabledNumbers.pop();
      setDisabledNumbers(disabledNumbers);
    }
    setWorkings(workings.slice(0, workings.length - 1));
  }

  function reset() {
    setTarget(null);
    setNumbers([]);
    setWorkings([]);
    setTotal(0);
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

  useInterval(() => setDegrees(degrees + 3), 1000);

  useEffect(() => {
    const formattedWorkings = workings
      .join('')
      .replace(/×/g, '*')
      .replace(/÷/g, '/');
    const parser = new Parser();
    const result = parser.parse(formattedWorkings);
    if (!result.error) setTotal(result.result);
  }, [workings]);

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

        <Button onClick={reset}>Reset</Button>
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

        {total === target && <h3>That's it, well done!</h3>}

        <Button className="clear-button" onClick={clearFromWorkings}>
          CLEAR
        </Button>
      </Workings>
    </div>
  );
}

export default App;
