import { styled } from '@mui/material';

export const Tabs = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: 10,
  width: '100%',
  overflow: 'auto',
  '::-webkit-scrollbar': { width: 0, height: 0 },
});
