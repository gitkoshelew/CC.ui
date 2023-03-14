import { MenuItem } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { SelectChangeEvent } from '@mui/material/Select';
import { SelectStyled } from './styles';

type SortingSelectFieldType = {
  sorts: string[];
  value: string;
  handleChange: (event: SelectChangeEvent<unknown>) => void;
};

export const SortingSelectField = ({
  sorts,
  value,
  handleChange,
}: SortingSelectFieldType) => {
  const { t } = useTranslation('home');

  return (
    <SelectStyled color='info' value={value} onChange={handleChange}>
      {sorts.map((sort) => (
        <MenuItem
          sx={{
            typography: 'subtitle1',
          }}
          key={sort}
          value={sort}
        >
          {t(sort)}
        </MenuItem>
      ))}
    </SelectStyled>
  );
};
