import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

import GithubContext from '../../context/github/githubContext';

const Users = () => {
  // Initialize GithubContext
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  const renderUsers = () => {
    if (loading) {
      return <Spinner />;
    }
    return users.map(user => {
      return <UserItem key={user.id} user={user} />;
    });
  };

  return <div style={userStyle}>{renderUsers()}</div>;
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
