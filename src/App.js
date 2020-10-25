import React from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Header from './components/Header';

function App() {
  const author = 'Joe';
  const dropdown = {
    title: "Sample dropdown",
    options: [
      'option 1',
      'option 2',
      'option 3',
      'option 4',
    ]
  }

  return (
    <div className="App">
      <Header name={author} />
      <Dropdown title={dropdown.title} options={dropdown.options} />
    </div>
  );
}

export default App;
