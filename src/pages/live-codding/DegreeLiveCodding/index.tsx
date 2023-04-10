import { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { TabPanel } from './TabPanel';

type Props = {
  tabs: {
    label: string;
    content: React.ReactNode;
  }[];
};

export default function TabbedView({ tabs }: Props) {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange} centered>
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </>
  );
}
