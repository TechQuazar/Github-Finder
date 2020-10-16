import React, { useReducer } from 'react';
import AlertContext from '../Alert/alertContext';
import AlertReducer from '../Alert/alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set alerts
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        msg,
        type,
      },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 2500);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
