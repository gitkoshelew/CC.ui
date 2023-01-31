import { IconButton, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MoonIcon } from '../../../assets/icons/MoonIcon';
import { HeaderNavigation } from './HeaderNavigation';
import { HeaderAccount } from './HeaderAccount';

export const HeaderContent = () => {
  const { locale } = useRouter();
  return (
    <Container>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        spacing={1}
        width={1}
        py={1}
        sx={{ '& .MuiTab-root': { mx: { xs: 0.5, md: 2 } } }}
        role='banner'
      >
        <Stack direction='row' alignItems='center' spacing={2}>
          <HeaderAccount />
          <IconButton>
            <MoonIcon />
          </IconButton>
          <Link
            href=' '
            locale={locale === 'en' ? 'ru' : 'en'}
            className='no-underline text-inherit'
          >
            {locale}
          </Link>
        </Stack>
        <HeaderNavigation />
      </Stack>
    </Container>
  );
};
