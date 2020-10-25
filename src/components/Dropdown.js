import React from 'react';

const Dropdown = ({title, options}) => {

  return (
    <div className="dropdown">
      <button className="dropdown__header">
        {title}
      </button>
      <div className="dropdown__body">
        <ul>
          {options.map((option, i) => <li key={i} >{option}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
