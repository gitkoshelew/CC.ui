import { ChangeEvent, useCallback } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Stack } from '@mui/material';
import MultipleCheckboxes from './multipleCheckboxes/multipleCheckboxes';
import { IDataOptions } from '../../Types/TestQuestionsType';

type PropsType = {
  data: string[];
  valueRadio: string;
  onPress: (label: string) => void;
  answerType: string;
  onPressCheck: (label: string, value: number, isChecked: boolean) => void;
  dataOptions: IDataOptions[];
};
export const TestQuestions = ({
  data,
  valueRadio,
  onPress,
  answerType,
  onPressCheck,
  dataOptions,
}: PropsType) => {
  const onPressRadio = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onPress(e.currentTarget.value);
    },
    [onPress]
  );

  return (
    <Stack direction='column' spacing={0.4}>
      {dataOptions &&
        dataOptions.map((t, index) => (
          <div>
            {answerType === 'single' ? (
              <RadioGroup
                key={index}
                name='use-radio-group'
                value={valueRadio}
                onChange={onPressRadio}
              >
                <FormControlLabel
                  value={t.label}
                  className='Contained'
                  label={t.label}
                  control={<Radio size='small' />}
                />
              </RadioGroup>
            ) : (
              <MultipleCheckboxes item={t} onPress={onPressCheck} />
            )}
          </div>
        ))}
      {!data?.length && (
        <span className='text-red-600 text-center'>questions not created</span>
      )}
    </Stack>
  );
};
