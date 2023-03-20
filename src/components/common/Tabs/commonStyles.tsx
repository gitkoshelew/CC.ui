import { styled } from '@mui/material';

export const Tabs = styled('div')({
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '10px',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: 5,
  width: '100%',
  overflow: 'scroll',
  '::-webkit-scrollbar': { width: 5, height: 5 },
});
