import { AlertColor } from '@mui/material/Alert/Alert';

export type NotificationType = {
  id: string;
  noticeText: null | string;
  noticeStatus: AlertColor;
};
