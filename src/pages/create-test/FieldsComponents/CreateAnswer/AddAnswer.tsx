import { Input } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { useCallback, useEffect, useState } from 'react';
import { Control, Controller, FieldValues, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { CreateQuestionFieldType } from '../../../../Types/QuestionFormType';
import { CheckBoxField } from '../CheckBoxField';

type AddingAnswerPropsType = {
  type: string;
  index: number;
  option: string;
  control: Control<FieldValues>;
  correctAnswer: string[];
  onPressDelete: (index: number) => void;
  isCheckingDuplicate: boolean;
  isDisabledDeleteBtn: boolean;
  onPressCorrectAnswer: (
    index: number,
    checked: boolean,
    textOption: string
  ) => void;
};

export const AddAnswer = (props: AddingAnswerPropsType) => {
  const {
    type,
    index,
    option,
    control,
    onPressDelete,
    correctAnswer,
    isCheckingDuplicate,
    isDisabledDeleteBtn,
    onPressCorrectAnswer,
  } = props;
  const { t } = useTranslation(['validationFields']);
  const findCorrectInput = correctAnswer.find((el) => el === option);
  const [isChecked, setIsChecked] = useState(false);
  const [correctInput, setCorrectInput] = useState(findCorrectInput);
  const isCurrentOptionText = useWatch({
    name: `options.${index}.option`,
    control,
  });

  const onPressCorrectAnswerHandler = useCallback(
    (checked: boolean) => {
      setIsChecked(checked);
      setCorrectInput(isCurrentOptionText);
      onPressCorrectAnswer(index, checked, isCurrentOptionText);
    },
    [index, isCurrentOptionText, onPressCorrectAnswer]
  );
  const onPressDeletePressed = useCallback(() => {
    onPressDelete(index);
  }, [index, onPressDelete]);

  useEffect(() => {
    if (correctInput !== isCurrentOptionText) {
      onPressCorrectAnswer(index, false, correctInput!);
      setIsChecked(false);
      setCorrectInput('');
    }
  }, [index, correctInput, isCurrentOptionText, onPressCorrectAnswer]);

  useEffect(() => {
    setIsChecked(correctAnswer.includes(isCurrentOptionText));
  }, [isCurrentOptionText, correctAnswer, option]);

//   const isSingle = type === 'single';
//   const isSingleDisabled =
//     (!isChecked && correctAnswer.length) || !isCurrentOptionText;
//   const isMultipleDisabled = !isCurrentOptionText;

//   const isDisabledDeleteOption = isDisabledDeleteBtn || isChecked;

  return (
    <Box>
      <Stack>
        <Controller
          render={() => <Input />}
          rules={{
            required: `${t('option.required')}`,
            maxLength: {
              value: 50,
              message: `${t('validationFields.option.minLength')}`,
            },
          }}
          name={`options.${index}.option`}
          control={props.control}
        />
      </Stack>
      <Stack >
        {/* <CheckBox
          onPress={onPressCorrectAnswerHandler}
          isChecked={isChecked}
          disabled={Boolean(isSingle ? isSingleDisabled : isMultipleDisabled)}
          fillColor={isCheckingDuplicate ? Color.Red : Color.GreenLight}
        />
        <TouchableOpacity
          style={isDisabledDeleteOption && styles.disabled}
          onPress={onPressDeletePressed}
          disabled={isDisabledDeleteOption}
        >
          <AntDesign name='minuscircleo' size={30} color={Color.Red} />
        </TouchableOpacity> */}
        <CheckBoxField />
      </Stack>
    </Box>
  );
};
