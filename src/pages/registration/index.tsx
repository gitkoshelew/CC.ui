import { FormGroup } from '@mui/material';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import React from 'react';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { Layout } from '../../components/layout/Layout';
import { useAppDispatch, wrapper } from '../../store/store';
import { registration } from '../../store/reducers/auth-reducer';
import { RegistrationFormType } from '../../types/AuthTypes';
import { initializeApp } from '../../store/reducers/app-reducer';
import { AuthTextField } from '../../components/common/auth/AuthTextField';
import { AuthButtonsGroup } from '../../components/common/auth/AuthButtonsGroup';

const SignUpPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegistrationFormType>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      nickname: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<RegistrationFormType> = async (data) => {
    await dispatch(registration(data));
    await dispatch(initializeApp());
    router.push('/');
  };

  return (
    <Layout>
      <StylizedPaper title='Sign Up' i18nName='login' maxWidth='450px'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup className='text-sm'>
            <AuthTextField
              register={register}
              errors={errors}
              name='name'
              required='warningRequired'
            />
            <AuthTextField
              register={register}
              errors={errors}
              name='nickName'
              required='warningRequired'
            />
            <AuthTextField
              register={register}
              errors={errors}
              name='email'
              required='loginRequired'
            />
            <AuthTextField
              register={register}
              errors={errors}
              name='password'
              required='passwordRequired'
            />
          </FormGroup>
          <AuthButtonsGroup
            isValid={isValid}
            nameButton='Sign Up'
            href='login'
          />
        </form>
      </StylizedPaper>
    </Layout>
  );
};
export default SignUpPage;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale as string, [
        'home',
        'testPage',
        'login',
      ])),
    },
  }));
