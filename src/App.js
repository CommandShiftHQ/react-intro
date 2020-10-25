import React from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Header from './components/Header';

function App() {
  const author = 'Joe';

  return (
    <div className="App">
      <Header name={author} />
      <Dropdown />
    </div>
  );
}

export default App;
