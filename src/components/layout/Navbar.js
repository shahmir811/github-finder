import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h3>
        <i className='fab fa-github' /> {title}
      </h3>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Users Finder'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
