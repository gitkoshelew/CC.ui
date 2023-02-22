import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useDispatch } from 'react-redux';
import { SnackbarCloseReason } from '@mui/material/Snackbar/Snackbar';
import { forwardRef, SyntheticEvent } from 'react';
import { useAppSelector } from '../../store/store';
import { removeNotice } from '../../store/reducers/errorHandler-reducer';

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
));

export function ErrorSnackbar() {
  const dispatch = useDispatch();
  const notices = useAppSelector((state) => state.error.notices);

  const handleClose = (
    event?: SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(removeNotice());
  };

  return (
    <div>
      {notices.length !== 0 &&
        notices.map((notice) => (
          <Snackbar
            key={notice.id}
            open
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          >
            <Alert
              onClose={handleClose}
              severity={notice.noticeStatus}
              sx={{ width: '100%' }}
            >
              {notice.noticeText}
            </Alert>
          </Snackbar>
        ))}
    </div>
  );
}
