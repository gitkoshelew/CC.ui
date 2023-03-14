import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useDispatch } from 'react-redux';
import { SnackbarCloseReason } from '@mui/material/Snackbar/Snackbar';
import { SyntheticEvent } from 'react';
import { useAppSelector } from '../../store/store';
import { removeNotice } from '../../store/reducers/errorHandler-reducer';

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
              elevation={6}
              variant='filled'
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
