import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = ({ setAlert }) => {
  // Initialize GithubContext
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const count = githubContext.users.length;
  const { clearUsers } = githubContext;
  const { showAlert } = alertContext;

  const [text, setText] = useState('');

  const formSubmit = e => {
    e.preventDefault();
    if (text === '') {
      showAlert('Please enter some text', 'light');
      return;
    }

    // onSubmit(text);
    githubContext.searchUsers(text);
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

export default Search;
