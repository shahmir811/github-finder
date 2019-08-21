import React from 'react';

const Alert = ({ alert }) => {
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
