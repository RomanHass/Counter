import React, { useState } from 'react';
import './App.css';
import { Counter } from './Counter';
import { SettingCounterBlock } from './SettingsCounterBlock';

function App() {
  
  const [count, setCount] = useState(0)
  const [startValue, setStartValue] = useState(0)
  const [maxValue, setMaxValue] = useState(0)

  return (
    <div className="App">
      <div className="container-big">
        <SettingCounterBlock startValue={startValue}
                             maxValue={maxValue}          
        />
        <Counter value={count} onChange={setCount} />
      </div>
    </div>
  );
}

export default App;
