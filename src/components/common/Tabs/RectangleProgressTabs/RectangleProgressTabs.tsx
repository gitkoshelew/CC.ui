import { Box } from '@mui/material';
import { RectangleProgressTabsItem } from './styled';
import { Tabs } from '../commonStyles';
import { TabsDataType } from '../../../../types/types';

type RectangleProgressBarPropsType = {
  activeTabId: number;
  tabsData: TabsDataType[];
};
export const RectangleProgressTabs = ({
  activeTabId,
  tabsData,
}: RectangleProgressBarPropsType) => (
  <Box>
    <Tabs sx={{ py: 1.2, px: 2 }}>
      {tabsData.map((el) => (
        <RectangleProgressTabsItem
          key={el.id}
          isActive={activeTabId === el.id}
          color={el.color}
          sx={{
            bgcolor: !el.color ? 'background.defaultAccent2' : '',
          }}
        />
      ))}
    </Tabs>
  </Box>
);
