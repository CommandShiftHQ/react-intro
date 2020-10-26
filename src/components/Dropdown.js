import React from 'react';

const Dropdown = ({title, options}) => {
  const isOpen = false;

  return (
    <div className="dropdown">
      <button className="dropdown__header">
        {title}
      </button>
      {
        isOpen && (
          <div className="dropdown__body">
            <ul>
              {options.map((option, i) => <li key={i} >{option}</li>)}
            </ul>
          </div>
        )
      }

    </div>
  );
}

export default Dropdown;
