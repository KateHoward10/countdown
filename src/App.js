import React, { useState, useEffect } from 'react';
import { Parser } from 'hot-formula-parser';
import useInterval from './hooks/useInterval';
import Clock from './components/Clock';
import Number from './components/Number';
import Button from './components/Button';
import Target from './components/Target';
import Workings from './components/Workings';
import Cursor from './components/Cursor';
import './App.css';

function App() {
  const [bigNumbers, setBigNumbers] = useState(1);
  const [target, setTarget] = useState('___');
  const [numbers, setNumbers] = useState(['', '', '', '', '', '']);
  const [workings, setWorkings] = useState([]);
  const [total, setTotal] = useState(0);
  const [disabledNumbers, setDisabledNumbers] = useState([]);
  const [countingDown, toggleCountingDown] = useState(false);
  const [degrees, setDegrees] = useState(0);
  const [message, setMessage] = useState(null);
  const [position, setPosition] = useState(0);

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
    if (typeof workings[workings.length - 1 - position] === 'number') {
      const deletedNumber = workings[workings.length - 1 - position];
      const indexInDisabled = disabledNumbers.findIndex(index => numbers[index] === deletedNumber);
      setDisabledNumbers(disabledNumbers.filter((item, index) => index !== indexInDisabled));
    }
    setWorkings(workings.filter((item, index) => index !== workings.length - 1 - position));
  }

  function clearAll() {
    setWorkings([]);
    setDisabledNumbers([]);
    setMessage(null);
  }

  useInterval(
    () => {
      if (degrees < 180) {
        setDegrees(degrees + 3);
      } else {
        toggleCountingDown(false);
        setMessage(`Time's up! ${Math.abs(target - total)} away`);
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

      <Target target={target} toggleCountingDown={toggleCountingDown} setTarget={setTarget} />

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
        <span>
          {workings.map((item, index) => (
            <span key={index}>
              {item}
              {workings.length - 1 - position === index && <Cursor />}
            </span>
          ))}
        </span>

        <p>
          <strong>{total}</strong>
        </p>

        <h3>{message}</h3>

        <div className="clear-buttons">
          <Button onClick={() => setPosition(position + 1 < workings.length ? position + 1 : position)}>←</Button>
          <Button onClick={() => setPosition(position > 0 ? position - 1 : position)}>→</Button>
          <Button onClick={backspace}>Backspace</Button>
          <Button onClick={clearAll}>Clear All</Button>
        </div>
      </Workings>
    </div>
  );
}

export default App;
