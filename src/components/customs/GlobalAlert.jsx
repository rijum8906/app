import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { Snackbar, Alert } from '@mui/material';

let showAlertFn = () => {};

const GlobalAlert = forwardRef((props, ref) => {
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'info' });

  useImperativeHandle(ref, () => ({
    showAlert: (message, severity = 'info') => {
      setAlert({ open: true, message, severity });
    }
  }));

  // For global access without provider
  showAlertFn = (message, severity = 'info') => {
    setAlert({ open: true, message, severity });
  };

  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose}>
      <Alert severity={alert.severity} onClose={handleClose}>
        {alert.message}
      </Alert>
    </Snackbar>
  );
});

export const showAlert = (...args) => showAlertFn(...args);

export default GlobalAlert;