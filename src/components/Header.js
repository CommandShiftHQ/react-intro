import React from 'react';
import PropTypes from 'prop-types';

const Header = ({name}) => {
  return (
    <header>
      <h1>React Intro</h1>
      <div>by {name}</div>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
