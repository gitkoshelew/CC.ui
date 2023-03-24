import { useMemo } from 'react';
import SwitchSelector from 'react-switch-selector';
import { useTranslation } from 'next-i18next';
import { palette } from '../../../../styles/theme/commonDefaultTheme';
import { SelectorType } from '../../../../types/SelectorType';

export const SwitchSelectors = ({ onPress, type, value }: SelectorType) => {
  const { t } = useTranslation('SwitchSelector');
  const SelectorsData = useMemo(() => {
    if (type === 'level') {
      return [
        { label: `${t('Easy')}`, value: 'light' },
        { label: `${t('Medium')}`, value: 'medium' },
        { label: `${t('Hard')}`, value: 'hard' },
      ];
    }
    if (type === 'number') {
      return [
        { label: '10', value: '10' },
        { label: '15', value: '15' },
        { label: '20', value: '20' },
        { label: '25', value: '25' },
        { label: '30', value: '30' },
      ];
    }
    return [
      { label: `${t('All')}`, value: 'All' },
      { label: `${t('My')}`, value: 'My' },
    ];
  }, [type]);

  return (
    <div className='h-10'>
      <SwitchSelector
        options={SelectorsData}
        initialSelectedIndex={0}
        forcedSelectedIndex={SelectorsData.findIndex(
          (el) => el.value === value
        )}
        onChange={onPress}
        selectedBackgroundColor={palette.primary.main}
        backgroundColor={palette.primary.contrastText}
        fontSize={15}
      />
    </div>
  );
};
