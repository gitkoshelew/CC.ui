import { Box } from '@mui/material';
import { useRef, useState } from 'react';
import { TabsDataType } from '../../../../Mocs/RectangleProgressBarMoc';
import { RectangleProgressTabsItem } from './styled';
import { scrollToCenter } from '../../../../utils/scrollToCenter';
import { Tabs } from '../commonStyles';

// use Props without "type"
type RectangleProgressBarProps = {
  activeTabId: string;
  tabsData: TabsDataType[];
  isTabsStatusHidden: boolean;
};

// need more space between types and name of the component
// destructure the props
export const RectangleProgressTabs = ({
  tabsData,
  activeTabId,
  isTabsStatusHidden,
}: RectangleProgressBarProps) => {
  const defaultActiveTabId = activeTabId || tabsData[0].questionId;

  // TODO should be observed
  const [activeTabId, setActiveTabId] = useState(defaultActiveTabId);

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
        {tabsData.map((el) => (
          <RectangleProgressTabsItem
            key={el.questionId}
            onClick={(e) => onTabClickHandler(e, el.questionId)}
            isActive={activeTabId === el.questionId}
            color={isTabsStatusHidden ? 'hidden' : el.color}
            sx={{ bgcolor: !el.color ? 'background.defaultAccent1' : '' }}
          />
        ))}
      </Tabs>
    </Box>
  );
};
