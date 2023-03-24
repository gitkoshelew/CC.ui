import Box from '@mui/system/Box';
import { Button, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { HeaderContent } from '../HeaderContent';
import { FullHeaderWrapper } from './FullHeaderWrapper';
import { ListIcon } from '../../../../assets/icons/ListIcon';
import { ButtonNums } from '../ButtonNums';
import { HeaderStatistic } from '../HeaderStatistic';
import { getTokenFromStorage } from '../../../../utils/token';

export const FullHeader = () => {
  const { t } = useTranslation('home');
  const token = getTokenFromStorage();
  return (
    <FullHeaderWrapper>
      <Stack height={1} bgcolor='rgba(0, 0, 0, 0.5)'>
        <Box bgcolor='rgba(255, 255, 255, 0.05)'>
          <HeaderContent />
        </Box>
        <Container>
          <Stack
            direction='column'
            justifyContent='space-between'
            flexGrow={1}
            height={1}
            py={4}
            role='article'
          >
            <Typography sx={{ typography: { xs: 'h5', sm: 'h4' } }}>
              {t('title')}
            </Typography>
            <HeaderStatistic />
            <Stack
              spacing={{ xs: 2, sm: 4 }}
              direction='row'
              sx={{ '& .MuiButton-contained': { px: { xs: 2, md: 5 } } }}
              role='menubar'
            >
              <Link href={token ? '/create-test/create-quiz' : '/guest'}>
                <Button color='info' variant='contained'>
                  {t('createTest')}
                </Button>
              </Link>
              {!!token && (
                <Button
                  color='info'
                  variant='contained'
                  startIcon={<ListIcon />}
                  endIcon={<ButtonNums value={99} />}
                >
                  {t('myTests')}
                </Button>
              )}
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </FullHeaderWrapper>
  );
};
