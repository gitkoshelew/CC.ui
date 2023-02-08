import Stack from '@mui/material/Stack';
import { FormGroup, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { Layout } from '../../components/layout/Layout';
import { wrapper } from '../../store/store';
import { fetchQuizes } from '../../store/reducers/quizes-reducer';
import { registerAC, registerTC } from '../../store/reducers/auth-reducer';

type Inputs = {
  name: string;
  nickname: string;
  email: string;
  password: string;
};

const SignUpPage = () => {
  const { t } = useTranslation('home');
  const router = useRouter();
  const dispatch = useDispatch<any>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      nickname: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(registerTC(data));
    alert(registerTC(data));
    // router.push('/');
  };

  return (
    <Layout>
      <Stack
        spacing={2}
        direction='column'
        sx={{
          width: 1,
          maxWidth: '450px',
          mx: 'auto',
          my: 'auto',
        }}
      >
        <StylizedPaper title='Sign Up'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup className='text-sm'>
              <span>Name</span>
              <TextField
                type='name'
                className='mb-4'
                {...register('name', {
                  required: true,
                  minLength: 2,
                  maxLength: 20,
                })}
              />
              {errors.name && (
                <span className='text-red-600 text-center'>
                  This field is required
                </span>
              )}
              <span>Nickname</span>
              <TextField
                type='nickname'
                className='mb-4'
                {...register('nickname', {
                  required: true,
                  maxLength: 20,
                })}
              />
              {errors.nickname && (
                <span className='text-red-600 text-center'>
                  This field is required
                </span>
              )}
              <span>Email</span>
              <TextField
                type='email'
                className='mb-4'
                {...register('email', {
                  required: true,
                  maxLength: 20,
                  // pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
              />
              {errors.email && (
                <span className='text-red-600 text-center'>
                  This field is required
                </span>
              )}
              <span>Password</span>
              <TextField
                type='password'
                className='mb-4'
                {...register('password', {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                })}
              />
              {errors.password && (
                <span className='text-red-600 text-center'>
                  This field is required
                </span>
              )}
            </FormGroup>
            <div className='flex justify-center'>
              <Button type='submit'>Sign Up</Button>
            </div>
            <hr className='h-px w-80 bg-neutral-300' />
            <span className=' flex justify-center text-slate-500'>
              Already registered?
            </span>
            <Link href='/login' className='flex justify-center'>
              Login
            </Link>
          </form>
        </StylizedPaper>
      </Stack>
    </Layout>
  );
};

export default SignUpPage;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ locale }) =>
    // const datas = await store.getState().regis.data;
    // await store.dispatch(registerTC(datas));
    // const { data } = store.getState().regis;

    ({
      props: {
        // data,
        ...(await serverSideTranslations(locale as string, [
          'home',
          'testPage',
        ])),
      },
    })
  );
