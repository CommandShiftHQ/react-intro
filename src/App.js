import React from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Header from './components/Header';

function App() {
  const author = 'Joe';
  const dropdown = {
    title: "Sample dropdown",
    options: [
      {
        id: 1,
        label: 'option 1',
      },
      {
        id: 2,
        label: 'option 2',
      },
      {
        id: 3,
        label: 'option 3',
      },
      {
        id: 4,
        label: 'option 4',
      }
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
