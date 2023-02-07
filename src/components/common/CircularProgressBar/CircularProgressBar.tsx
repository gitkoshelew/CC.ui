import React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type CircularProgressBar = {
  value: number;
  fontSize: 'xx-large' | 'x-large' | 'large';
};

// try to use export default style for components with single functional component
export const CircularProgressBar = ({
  fontSize = 'xx-large',
  size = 166,
  ...props
}: CircularProgressProps & CircularProgressBar) => (
  <Box sx={{ position: 'relative', display: 'inline-flex' }}>
    <CircularProgress
      variant='determinate'
      value={100}
      size={size}
      color='info'
      sx={{
        position: 'absolute',
      }}
    />
    <CircularProgress
      color='secondary'
      {...props}
      variant='determinate'
      size={size}
    />
    <Box
      sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        component='div'
        fontSize={fontSize}
        fontWeight='600'
        color='secondary.main'
      >
        {`${Math.round(props.value)}%`}
      </Typography>
    </Box>
  </Box>
);
