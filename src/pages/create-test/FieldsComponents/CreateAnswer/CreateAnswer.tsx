import { Control, FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Box, Button, Stack, Typography } from '@mui/material';
import { AddAnswer } from './AddAnswer';

type CreateAnswerPropsType = {
  control: Control<FieldValues>;
  fields: any;
  isCheckingDuplicate: boolean;
  type: string;
  correctAnswer: string[];
  addNewOptionPressed: () => void;
  deleteOptionPressed: (index: number) => void;
  checkedCorrectOption: (
    index: number,
    checked: boolean,
    textOption: string
  ) => void;
};

export const CreateAnswer = ({
  fields,
  isCheckingDuplicate,
  correctAnswer,
  control,
  type,
  addNewOptionPressed,
  deleteOptionPressed,
  checkedCorrectOption,
}: CreateAnswerPropsType) => {
  const isDisabledDeleteBtn = fields.length <= 2;
  const { t } = useTranslation('validationFields');

  return (
    <Stack>
      <Typography>Answer choice</Typography>
      {fields.map(
        (item: { id: null | undefined; option: string }, index: number) => (
          <AddAnswer
            key={item.id}
            option={item.option}
            index={index}
            type={type}
            control={control}
            correctAnswer={correctAnswer}
            isDisabledDeleteBtn={isDisabledDeleteBtn}
            onPressDelete={deleteOptionPressed}
            onPressCorrectAnswer={checkedCorrectOption}
            isCheckingDuplicate={isCheckingDuplicate}
          />
        )
      )}
      {isCheckingDuplicate && (
        <Typography>{t('option.CheckingForDuplication')}</Typography>
      )}
      <Box>
        <Button onClick={addNewOptionPressed} disabled={fields.length > 6} />
        <Typography>Add answer</Typography>
      </Box>
    </Stack>
  );
};
