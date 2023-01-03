import { Tab, Tabs } from '@mui/material';

export const HeaderNavigation = () => (
  <Tabs
    value='test list'
    scrollButtons='auto'
    textColor='inherit'
    variant='scrollable'
    aria-label='secondary tabs example'
    role='navigation'
  >
    <Tab label='Users' value='users' />
    <Tab label='Live coding' value='live coding' />
    <Tab label='Test list' value='test list' />
  </Tabs>
);
