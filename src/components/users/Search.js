import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter some text', 'light');
      return;
    }

    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { clearUsers, count } = this.props;

    return (
      <div>
        <form className='form' onSubmit={e => this.onSubmit(e)}>
          <input
            type='text'
            name='text'
            value={this.state.text}
            onChange={this.onChange}
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
  }
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};

export default Search;
