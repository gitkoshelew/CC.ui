import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertProps } from '@mui/material/Alert';
import { useDispatch } from 'react-redux';

import { SnackbarCloseReason } from '@mui/material/Snackbar/Snackbar';
import { useAppSelector } from '../../store/store';
import { changeError } from '../../store/reducers/errorHandler-reducer';

// <Remark>
// Why create extra component with some changes, if you could use it directly
// It is not complicated component, neither reusable component, as there is no "export const"

// const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
//   <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
// ));

export function ErrorSnackbar() {
  const noticeText = useAppSelector((state) => state.error.noticeText);
  const noticeStatus = useAppSelector((state) => state.error.noticeStatus);

  const dispatch = useDispatch();
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(changeError(null));
  };

  return (
    <Snackbar
      open={!!noticeText}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
      <Alert
        elevation={6}
        variant='filled'
        onClose={handleClose}
        severity={noticeStatus}
        sx={{ width: '100%' }}
      >
        {noticeText}
      </Alert>
    </Snackbar>
  );
}
