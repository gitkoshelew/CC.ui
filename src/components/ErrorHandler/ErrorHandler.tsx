import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useDispatch } from 'react-redux';
import { SnackbarCloseReason } from '@mui/material/Snackbar/Snackbar';
import { forwardRef, SyntheticEvent, useEffect } from 'react';
import { useAppSelector } from '../../store/store';
import { removeNotice } from '../../store/reducers/errorHandler-reducer';

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
));

export function ErrorSnackbar() {
  const dispatch = useDispatch();
  const notices = useAppSelector((state) => state.error.notices);
  // const allNotices = useAppSelector((state) => state.error.notices);
  // console.log(allNotices);

  const handleClose = (
    event?: SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(removeNotice());
  };
  // useEffect(() => {
  //   if (notices) {
  //     const { id } = notices;
  //     const timerId = setTimeout(() => {
  //       if (notices.id === id) handleClose();
  //     }, 3100);
  //     return () => {
  //       window.clearTimeout(timerId);
  //     };
  //   }
  //   return undefined;
  // }, []);

  return (
    <div>
      {notices.length &&
        notices.map((notice) => (
          <Snackbar
            key={notice.id}
            open
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
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
