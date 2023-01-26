import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, useAppSelector } from '../../store/store';
import { changeError } from '../../store/reducers/errorHandler-reducer';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
));

export function ErrorSnackbar() {
  // const error = useSelector<AppState, string | null>(
  //   (state) => state.error.error
  // );
  const error = useAppSelector((state) => state.error.error);

  const dispatch = useDispatch();
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(changeError(null));
    // setOpen(false);
  };

  return (
    <Snackbar open={!!error} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
        {error}
      </Alert>
    </Snackbar>
  );
}
