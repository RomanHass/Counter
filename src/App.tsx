import React, { useState } from 'react';
import './App.css';
import { Counter } from './Counter';

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container-big">
        <Counter value={count} />
      </div>
    </div>
  );
}

export default App;
