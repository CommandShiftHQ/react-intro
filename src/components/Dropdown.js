import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({title, options}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const selectedOption = options.find((option) => option.id === selectedValue);

  const getDropdownTitle = selectedOption 
      ? `${title} - ${selectedOption.label}`
      : title;

  return (
    <div className="dropdown">
      <button className="dropdown__header" onClick={() => setIsOpen(!isOpen)}>
        {getDropdownTitle}
      </button>
      {
        isOpen && (
          <div className="dropdown__body">
            <ul>
              {options.map((option) => (
              <li key={option.id} onClick={() => setSelectedValue(option.id)}>
                {option.label}
              </li>
            ))}
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
