import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuItems from './menuItems.js'
import { useState } from 'react';

const App = () => {
const [counter, incrementCounter] = useState(0);

  return (
    <React.Fragment>
      <MenuItems/>
      <div>
      <div>{counter}</div>
      <button onClick={() => incrementCounter(counter + 1)}>increment</button>
      <button onClick={() => incrementCounter(counter - 1)}>decrement</button>
      </div>
    </React.Fragment>
  );
};

export default App;
