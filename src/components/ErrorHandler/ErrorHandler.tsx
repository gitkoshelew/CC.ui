import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../store/store';
import { changeError } from '../../store/reducers/errorHandler-reducer';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
));

export function ErrorSnackbar() {
  const noticeText = useAppSelector((state) => state.error.noticeText);
  const noticeStatus = useAppSelector((state) => state.error.noticeStatus);

  const dispatch = useDispatch();
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
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
        onClose={handleClose}
        severity={noticeStatus}
        sx={{ width: '100%' }}
      >
        {noticeText}
      </Alert>
    </Snackbar>
  );
}
