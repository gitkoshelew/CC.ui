import { useMemo } from 'react';
import SwitchSelector from 'react-switch-selector';
import { useTranslation } from 'next-i18next';
import { palette } from '../../../../../styles/theme/commonDefaultTheme';
import { SelectorDifficultyType } from '../../../../../types/SelectorType';

export const SwitchSelectorDifficulty = ({
  onPressDifficulty,
  type,
  valueDifficulty,
  name
}: SelectorDifficultyType) => {
  const { t } = useTranslation('SwitchSelector');
  const SelectorsDataDifficulty = useMemo(() => {
    if (type === 'difficulty') {
      return [
        { label: `${t('light')}`, value: 'light' },
        { label: `${t('medium')}`, value: 'medium' },
        { label: `${t('hard')}`, value: 'hard' },
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
        options={SelectorsDataDifficulty}
        initialSelectedIndex={0}
        forcedSelectedIndex={SelectorsDataDifficulty.findIndex(
          (el) => el.value === valueDifficulty
        )}
        onChange={onPressDifficulty}
        selectedBackgroundColor={palette.primary.main}
        backgroundColor={palette.background.paperAccent2}
        fontSize={15}
        name={name}
      />
    </div>
  );
};
