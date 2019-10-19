import React, { useState, useEffect } from 'react';
import { Parser } from 'hot-formula-parser';
import useInterval from './hooks/useInterval';
import usePrevious from './hooks/usePrevious';
import Clock from './components/Clock';
import Number from './components/Number';
import Button from './components/Button';
import Target from './components/Target';
import Workings from './components/Workings';
import Cursor from './components/Cursor';
import ClearButtons from './components/ClearButtons';
import './App.css';

function App() {
  const [bigNumbers, setBigNumbers] = useState(1);
  const [target, setTarget] = useState('___');
  const [numbers, setNumbers] = useState(['', '', '', '', '', '']);
  const [numbersSet, setNumbersSet] = useState(0);
  const [placingNumbers, togglePlacingNumbers] = useState(false);
  const [workings, setWorkings] = useState([]);
  const [total, setTotal] = useState(null);
  const [disabledNumbers, setDisabledNumbers] = useState([]);
  const [countingDown, toggleCountingDown] = useState(false);
  const [degrees, setDegrees] = useState(0);
  const [message, setMessage] = useState(null);
  const [position, setPosition] = useState(0);
  const [wins, setWins] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const prevWorkings = usePrevious(workings);
  const prevTotal = usePrevious(total);

  function generateNumbers() {
    setTarget('___');
    setNumbers(['', '', '', '', '', '']);
    setNumbersSet(0);
    setWorkings([]);
    setTotal(null);
    setDisabledNumbers([]);
    setDegrees(0);
    setMessage(null);
    setPosition(0);
    togglePlacingNumbers(true);
    setGamesPlayed(gamesPlayed + 1);
  }

  useInterval(
    () => {
      let newNumbers = numbers;
      if (numbersSet < 6) {
        let newNumber;
        if (numbersSet < bigNumbers) {
          newNumber = Math.ceil(Math.random() * 4) * 25;
        } else {
          newNumber = Math.ceil(Math.random() * 10);
        }
        newNumbers[numbersSet] = newNumber;
        setNumbers(newNumbers);
        setNumbersSet(numbersSet + 1);
      } else {
        togglePlacingNumbers(false);
        setTarget(Math.ceil(Math.random() * 899) + 100);
      }
    },
    placingNumbers ? 300 : null
  );

  function addToWorkings(item, index) {
    if (
      item === '(' ||
      item === ')' ||
      (typeof item !== typeof workings[workings.length - position - 1] &&
        typeof item !== typeof workings[workings.length - position])
    ) {
      setWorkings([
        ...workings.slice(0, workings.length - position),
        item,
        ...workings.slice(workings.length - position)
      ]);
      if (index !== undefined) setDisabledNumbers([...disabledNumbers, index]);
    }
  }

  function backspace() {
    if (typeof workings[workings.length - 1 - position] === 'number') {
      const deletedNumber = workings[workings.length - position - 1];
      const indexInDisabled = disabledNumbers.findIndex(index => numbers[index] === deletedNumber);
      setDisabledNumbers(disabledNumbers.filter((item, index) => index !== indexInDisabled));
    }
    setWorkings(workings.filter((item, index) => index !== workings.length - position - 1));
  }

  function clearAll() {
    setWorkings([]);
    setDisabledNumbers([]);
    setMessage(null);
    setPosition(0);
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
    if (prevWorkings !== workings) {
      const formattedWorkings = workings
        .join('')
        .replace(/×/g, '*')
        .replace(/÷/g, '/');
      const parser = new Parser();
      const result = parser.parse(formattedWorkings);
      if (!result.error) setTotal(result.result);
    }
  }, [workings, prevWorkings]);

  useEffect(() => {
    if (prevTotal !== total && degrees < 180 && target === total) {
      toggleCountingDown(false);
      setMessage(`Solved in ${degrees / 6} seconds`);
      setWins(wins + 1);
    }
  }, [target, prevTotal, total, degrees, wins]);

  return (
    <div className="App">
      <Clock degrees={degrees} score={`${wins} / ${gamesPlayed}`} />

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
        {numbers.map((number, index) => (
          <Number
            key={index}
            value={number}
            disabled={disabledNumbers.includes(index)}
            onClick={() => addToWorkings(number, index)}
          />
        ))}
      </div>

      <div>
        {['+', '-', '×', '÷', '(', ')'].map((operator, index) => (
          <Button key={index} onClick={() => addToWorkings(operator)}>
            {operator}
          </Button>
        ))}
      </div>

      <ClearButtons
        prev={() => setPosition(position + 1 <= workings.length ? position + 1 : position)}
        next={() => setPosition(position > 0 ? position - 1 : position)}
        backspace={backspace}
        clearAll={clearAll}
      />
      <Workings>
        <span>
          {workings.map((item, index) => (
            <span key={index}>
              {workings.length === position && index === 0 && <Cursor />}
              {item}
              {workings.length - position - 1 === index && <Cursor />}
            </span>
          ))}
        </span>

        <p>
          <strong>{total}</strong>
        </p>

        <h3>{message}</h3>
      </Workings>
    </div>
  );
}

export default App;
