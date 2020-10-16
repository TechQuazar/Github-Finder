import React, { useContext } from 'react';
import AlertContext from '../../context/Alert/alertContext';
import { InfoCircle } from 'react-bootstrap-icons';
const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <InfoCircle />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
