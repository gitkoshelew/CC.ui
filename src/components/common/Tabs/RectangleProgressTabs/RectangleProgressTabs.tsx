import { Box } from '@mui/material';
import { useRef, useState } from 'react';
import { TabsDataType } from '../../../../Mocs/RectangleProgressBarMoc';
import { RectangleProgressTabsItem } from './styled';
import { scrollToCenter } from '../../../../utils/scrollToCenter';
import { Tabs } from '../commonStyles';

type RectangleProgressBarPropsType = {
  activeTabId: string;
  tabsData: TabsDataType[];
  isTabsStatusHidden: boolean;
};
export const RectangleProgressTabs = (props: RectangleProgressBarPropsType) => {
  const [activeTabId, setActiveTabId] = useState(
    props.activeTabId || props.tabsData[0].questionId
  );

  const tabsRef = useRef<HTMLDivElement>(null);

  const onTabClickHandler = (
    e: React.MouseEvent<HTMLDivElement>,
    id: string
  ) => {
    setActiveTabId(id);
    scrollToCenter(e, tabsRef);
  };

  return (
    <Box>
      <Tabs ref={tabsRef} sx={{ py: 1.2, px: 2 }}>
        {props.tabsData.map((el) => (
          <RectangleProgressTabsItem
            key={el.questionId}
            onClick={(e) => onTabClickHandler(e, el.questionId)}
            isActive={activeTabId === el.questionId}
            color={props.isTabsStatusHidden ? 'hidden' : el.color}
            sx={{ bgcolor: !el.color ? 'background.defaultAccent1' : '' }}
          />
        ))}
      </Tabs>
    </Box>
  );
};
