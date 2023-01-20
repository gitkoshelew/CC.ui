import { Tab, Tabs } from '@mui/material';
import { useTranslation } from 'next-i18next';

export const HeaderNavigation = () => {
  const { t } = useTranslation('home');
  return (
    <Tabs
      value='test list'
      scrollButtons='auto'
      textColor='inherit'
      variant='scrollable'
      aria-label='secondary tabs example'
      role='navigation'
    >
      <Tab label={t('users')} value='Users' />
      <Tab label={t('liveCodding')} value='live coding' />
      <Tab label={t('testList')} value='test list' />
    </Tabs>
  );
};
