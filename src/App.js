import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const author = 'Joe';

  return (
    <div className="App">
      <Header name={author} />
    </div>
  );
}

export default App;
