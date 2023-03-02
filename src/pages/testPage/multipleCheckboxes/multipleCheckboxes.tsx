import React from 'react';
import { Checkbox, FormGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { IDataOptions } from '../../../Types/TestQuestionsType';

export type PropsType = {
  item: IDataOptions;
  onPress: (label: string, value: number, isChecked: boolean) => void;
};

const MultipleCheckboxes = ({
  item: { value, label, isChecked },
  onPress,
}: PropsType) => {
  const handlerPressCheck = () => {
    onPress(label, value, !isChecked);
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked}
            color='primary'
            onChange={handlerPressCheck}
          />
        }
        label={label}
      />
    </FormGroup>
  );
};

export default MultipleCheckboxes;
