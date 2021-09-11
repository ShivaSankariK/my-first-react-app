import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
const [counter, incrementCounter] = useState(0);

  return (
    <div>
    <div>{counter}</div>
    <button onClick={() => incrementCounter(counter + 1)}>increment</button>
    <button onClick={() => incrementCounter(counter - 1)}>decrement</button>
    </div>
  );
};

export default App;
