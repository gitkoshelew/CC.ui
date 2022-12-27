import { Box, Stack } from '@mui/material';
import { useRef, useState } from 'react';
import { TabsDataType } from '../../../Mocs/RectangleProgressBarMoc';
import { RectangleProgressTabsItem } from './styled';

type RectangleProgressBarPropsType = {
  activeTabId: string;
  tabsData: TabsDataType[];
  isTabsStatusHidden: boolean;
};
export const RectangleProgressTabs = (props: RectangleProgressBarPropsType) => {
  const [activeTabId, setActiveTabId] = useState(
    props.activeTabId || props.tabsData[0].questionId
  );

  const tabsRef = useRef();

  const scrollToCenter = (e: React.MouseEvent<HTMLDivElement>) => {
    const ref = tabsRef.current as unknown as HTMLDivElement;
    ref.scrollTo({
      left: Number(e.currentTarget?.offsetLeft) - ref.offsetWidth / 2,
      behavior: 'smooth',
    });
  };

  const onTabClickHandler = (
    e: React.MouseEvent<HTMLDivElement>,
    id: string
  ) => {
    setActiveTabId(id);
    scrollToCenter(e);
  };

  return (
    <Box>
      <Stack
        ref={tabsRef}
        alignItems='center'
        direction='row'
        spacing={2}
        justifyContent='space-between'
        padding={1.2}
        width={1}
        overflow='auto'
        sx={{
          '::-webkit-scrollbar': { width: 0, height: 0 },
        }}
      >
        {props.tabsData.map((el) => (
          <RectangleProgressTabsItem
            key={el.questionId}
            onClick={(e) => onTabClickHandler(e, el.questionId)}
            isActive={activeTabId === el.questionId}
            color={props.isTabsStatusHidden ? 'hidden' : el.color}
            sx={{ bgcolor: !el.color ? 'background.defaultAccent1' : '' }}
          />
        ))}
      </Stack>
    </Box>
  );
};
