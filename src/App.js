import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyComponent from './myComponent.jsx';
import Counter from './Counter.jsx';
import ParentComponent from './Toggle/ParentComponent.jsx';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       EdhandleClick; <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <MyComponent />
    <Counter />
    <ParentComponent />

    </>
  );
}

export default App;
