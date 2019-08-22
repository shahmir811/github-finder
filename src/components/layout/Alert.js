import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  // Initialize State
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  const renderAlert = () => {
    if (alert) {
      return (
        <div className={`alert alert-${alert.type}`}>
          <i className='fas fa-info-circle' /> {alert.msg}
        </div>
      );
    }
    return null;
  };

  return <>{renderAlert()}</>;
};

export default Alert;
