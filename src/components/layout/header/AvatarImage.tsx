import { Avatar } from '@mui/material';

export const AvatarImage = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => (
  <Avatar
    sx={{ width, height }}
    src='https://i.imgur.com/XBQQHe9.png'
    alt='Avatar'
  />
);
