import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ onSubmit, setAlert, clearUsers, count }) => {
  const [text, setText] = useState('');

  const formSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter some text', 'light');
      return;
    }

    onSubmit(text);
    setText('');
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form className='form' onSubmit={e => formSubmit(e)}>
        <input
          type='text'
          name='text'
          value={text}
          onChange={e => onChange(e)}
          placeholder='Search Users...'
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {count > 0 && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};

export default Search;
