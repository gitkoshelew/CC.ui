import { useTranslation } from 'next-i18next';
import MuiTab, { TabProps } from '@mui/material/Tab';

type Props = { label: string } & Omit<TabProps, 'label'>;

export const Tab = ({ label, ...props }: Props) => {
  const { t } = useTranslation('home');

  return <MuiTab label={t(label)} {...props} />;
};
