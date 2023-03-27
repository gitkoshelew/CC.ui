import { useMemo } from 'react';
import SwitchSelector from 'react-switch-selector';
import { useTranslation } from 'next-i18next';
import { palette } from '../../../../../styles/theme/commonDefaultTheme';
import { SelectorNOQType } from '../../../../../types/SelectorType';

export const SwitchSelectorNOQ = ({
  onPressNOQ,
  type,
  valueNOQ,
}: SelectorNOQType) => {
  const { t } = useTranslation('SwitchSelector');
  const SelectorsDataNOQ = useMemo(() => {
    if (type === 'number') {
      return [
        { label: '5', value: '5' },
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
        options={SelectorsDataNOQ}
        initialSelectedIndex={0}
        forcedSelectedIndex={SelectorsDataNOQ.findIndex(
          (el) => el.value === valueNOQ
        )}
        onChange={onPressNOQ}
        selectedBackgroundColor={palette.primary.main}
        backgroundColor={palette.primary.contrastText}
        fontSize={15}
      />
    </div>
  );
};
