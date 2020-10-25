import React from 'react';

const Dropdown = () => {
  return (
    <div className="dropdown">
      <button className="dropdown__header">
        Dropdown header - functional
      </button>
      <div className="dropdown__body">
        <ul>
          <li>option 1</li>
          <li>option 2</li>
          <li>option 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
