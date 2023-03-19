import React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Button, Stack } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { ButtonBackHome } from '../../../components/common/ButtonBackHome';
import { StylizedPaper } from '../../../components/common/StylizedPaper/StylizedPaper';
import { InputField } from '../FieldsComponents/InputFieald';
import TopicSelect from '../FieldsComponents/CreateTopic/CreateTopic';
import { SelectorField } from '../FieldsComponents/SelectorField/SelectorField';
import { TypeSwitchSelect } from '../../../types/SelectorType';
import { Layout } from '../../../components/layout/Layout';
import { CreateQuizType } from '../../../types/CreateQuizType';

type CreateQuizContainerType = {
  onSubmit: SubmitHandler<CreateQuizType>;
};

export const CreateQuizContainer = ({ onSubmit }: CreateQuizContainerType) => {
  const { handleSubmit, control } = useForm<CreateQuizType>();
  const { t } = useTranslation('create-quiz');
  return (
    <Layout>
      <ButtonBackHome />
      <StylizedPaper title={t('Create Quiz')}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            bgcolor='background.paperAccent2'
            borderRadius={1}
            border={1}
            borderColor='background.border'
            spacing={2}
            p={3}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <Box sx={{ flexGrow: 1 }}>
                <InputField
                  nameTitle={t('Test title')}
                  nameControl='title'
                  control={control}
                />
              </Box>
              <Box sx={{ flexGrow: 2 }}>
                <InputField
                  nameControl='description'
                  nameTitle={t('Test description')}
                  control={control}
                />
              </Box>
            </Stack>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              flexWrap='wrap'
              spacing={3}
            >
              <Box flexGrow={1}>
                <TopicSelect name='topic' control={control} />
              </Box>
              <Box flexGrow={1}>
                <SelectorField
                  label={t('Number of questions')}
                  name='numberOfQuestions'
                  control={control}
                  type={TypeSwitchSelect.NUMBER}
                />
              </Box>
            </Stack>
            <InputField
              nameControl='comment'
              nameTitle={t('Comment')}
              control={control}
            />
            <Stack alignItems='center' marginTop='20px'>
              <Button type='submit'>{t('Save quiz')}</Button>
            </Stack>
          </Stack>
        </form>
      </StylizedPaper>
    </Layout>
  );
};
