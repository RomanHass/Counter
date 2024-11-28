import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './Counter';
import { SettingCounterBlock } from './SettingsCounterBlock';

function App() {
  
  const [count, setCount] = useState(0)
  const [startValue, setStartValue] = useState(0)
  const [maxValue, setMaxValue] = useState(0)
  const [isDisabled, setIsDisabled] = useState(true)
  const [message, setMessage] = useState("enter values and press 'set'")

  useEffect(() => {
    const savedMaxValue = localStorage.getItem("maxValue")
    const savedStartValue = localStorage.getItem("startValue")

    if (savedMaxValue && savedStartValue) {
      setMaxValue(JSON.parse(savedMaxValue))
      setStartValue(JSON.parse(savedStartValue))
      setCount(JSON.parse(savedStartValue))
      setIsDisabled(false)
    }
  }, []);

  const changeMaxValue = (maxValue: number) => {
    setMaxValue(maxValue)
  }

  const changeStartValue = (startValue: number)  => {
    setStartValue(startValue)
    setMessage("enter values and press 'set'")
  }

  const changeDisableStatus = (value: boolean) => {
    setIsDisabled(value)
    setMessage("enter values and press 'set'")
  }

  const handleSetClick = () => {
    setCount(startValue)
    setIsDisabled(false)
  }

  const handleSetValues = (start: number, max: number) => {
    setStartValue(start);
    setMaxValue(max);
    setCount(start);
    localStorage.setItem("startValue", JSON.stringify(start));
    localStorage.setItem("maxValue", JSON.stringify(max));
    setIsDisabled(false)
  };

  return (
    <div className="App">
      <div className="container-big">
        <SettingCounterBlock startValue={startValue}
                             maxValue={maxValue}          
                             changeMaxValue={changeMaxValue}
                             changeStartValue={changeStartValue}
                             changeDisableStatus={changeDisableStatus}
                             onSetClick={handleSetClick}
                             onSet={handleSetValues}
        />
        <Counter value={count} 
                 startValue={startValue}
                 maxValue={maxValue}
                 isDisabled={isDisabled}
                 message={message}
                 onChange={setCount} 
        />
      </div>
    </div>
  );
}

export default App;
