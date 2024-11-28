import React, { useState } from 'react';
import './App.css';
import { Counter } from './Counter';
import { SettingCounterBlock } from './SettingsCounterBlock';

function App() {
  
  const [count, setCount] = useState(0)
  const [startValue, setStartValue] = useState(0)
  const [maxValue, setMaxValue] = useState(0)

  const changeMaxValue = (maxValue: number) => {
    setMaxValue(maxValue)
  }

  const changeStartValue = (startValue: number)  => {
    setStartValue(startValue)
  }

  return (
    <div className="App">
      <div className="container-big">
        <SettingCounterBlock startValue={startValue}
                             maxValue={maxValue}          
                             changeMaxValue={changeMaxValue}
                             changeStartValue={changeStartValue}
        />
        <Counter value={count} 
                 onChange={setCount} 
        />
      </div>
    </div>
  );
}

export default App;
