import React from 'react';
import PropTypes from 'prop-types';

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

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default Dropdown;
