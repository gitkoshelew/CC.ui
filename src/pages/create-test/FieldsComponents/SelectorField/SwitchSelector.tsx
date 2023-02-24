
import { useMemo } from 'react';
import SwitchSelector from 'react-switch-selector';
import { palette } from '../../../../styles/theme/commonDefaultTheme';
import { SelectorType } from '../../../../Types/SelectorType';

export const SwitchSelectors = ({ onPress, type, value }: SelectorType) => {
  const SelectorsData = useMemo(
    () =>
      // eslint-disable-next-line no-nested-ternary
      type === 'level'
        ? [
            { label: 'Easy', value: 'light' },
            { label: 'Medium', value: 'medium' },
            { label: 'Hard', value: 'hard' },
          ]
        : type === 'number'
        ? [
            { label: '10', value: '10' },
            { label: '15', value: '15' },
            { label: '20', value: '20' },
            { label: '25', value: '25' },
            { label: '30', value: '30' },
          ]
        : [
            { label: 'All', value: 'All' },
            { label: 'My', value: 'My' },
          ],
    [type]
  );

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
