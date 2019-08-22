import React, { useReducer } from 'react';

import AlertContext from './alertContext';
import AlertReducer from './AlertReducer';

import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  const initialState = {
    alert: null
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Show Alert
  const showAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };
  return (
    <AlertContext.Provider value={{ alert: state.alert, showAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
