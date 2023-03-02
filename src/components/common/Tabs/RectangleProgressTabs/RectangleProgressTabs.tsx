import { Box } from '@mui/material';
import { useRef, useState } from 'react';
import { RectangleProgressTabsItem } from './styled';
import { scrollToCenter } from '../../../../utils/scrollToCenter';
import { Tabs } from '../commonStyles';
// eslint-disable-next-line import/no-cycle
import { TabsDataType } from '../../../../pages/result-page';

type RectangleProgressBarPropsType = {
  activeTabId: string;
  tabsData: TabsDataType[];
};
export const RectangleProgressTabs = (props: RectangleProgressBarPropsType) => {
  const [activeTabId, setActiveTabId] = useState(
    props.activeTabId || props.tabsData[0].id
  );

  const tabsRef = useRef<HTMLDivElement>(null);

  const onTabClickHandler = (
    e: React.MouseEvent<HTMLDivElement>,
    id: number
  ) => {
    setActiveTabId(id);
    scrollToCenter(e, tabsRef);
  };

  return (
    <Box>
      <Tabs ref={tabsRef} sx={{ py: 1.2, px: 2 }}>
        {props.tabsData.map((el) => (
          <RectangleProgressTabsItem
            key={el.id}
            onClick={(e) => onTabClickHandler(e, el.id)}
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
};
