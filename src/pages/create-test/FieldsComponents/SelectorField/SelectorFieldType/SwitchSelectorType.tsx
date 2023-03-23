import { useMemo } from 'react';
import SwitchSelector from 'react-switch-selector';
import { useTranslation } from 'next-i18next';
import { palette } from '../../../../../styles/theme/commonDefaultTheme';
import { SelectorTypeOfQuestionType } from '../../../../../types/SelectorType';

export const SwitchSelectorType = ({
  onPressType,
  type,
  valueType,
  name
}: SelectorTypeOfQuestionType) => {
  const { t } = useTranslation('SwitchSelector');
  const SelectorsDataType = useMemo(() => {
    if (type === 'type') {
      return [
        { label: `${t('single')}`, value: 'single' },
        { label: `${t('multi')}`, value: 'multi' },
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
        options={SelectorsDataType}
        initialSelectedIndex={0}
        forcedSelectedIndex={SelectorsDataType.findIndex(
          (el) => el.value === valueType
        )}
        onChange={onPressType}
        selectedBackgroundColor={palette.primary.main}
        backgroundColor={palette.background.paperAccent2}
        fontSize={15}
        name={name}
      />
    </div>
  );
};
