import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h3>
        <i className='fab fa-github' /> {title}
      </h3>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
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