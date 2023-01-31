import Stack from '@mui/material/Stack';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Radio from '@mui/material/Radio';
import { useTranslation } from 'next-i18next';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { Layout } from '../../components/layout/Layout';

const LoginPage = () => {
  const { t } = useTranslation('home');
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
        <StylizedPaper title='Log in'>
          <FormGroup className='text-sm'>
            <span>Email</span>
            <TextField type='email' className='mb-4' />
            <span>Password</span>
            <TextField type='password' />
            <div className='flex justify-between items-center text-center '>
              {/* <FormControlLabel */}
              {/*   label='Remember me' */}
              {/*   control={ */}
              {/*     <Checkbox */}
              {/*       size='small' */}
              {/*       // // checked={formik.values.rememberMe} */}
              {/*     /> */}
              {/*     // <Radio size='small' /> */}
              {/*   } */}
              {/* /> */}
              <Checkbox size='small' sx={{ color: '#2D3E6B' }} />
              <span>Remember me</span>
              <a href=' '>Forgotten password?</a>
            </div>
          </FormGroup>
          <div className='flex justify-center'>
            <Button>Login</Button>
          </div>
          <hr className='h-px w-80 bg-neutral-300' />
          <div className=' flex justify-center text-slate-500'>
            Dont you have an account?
          </div>
          <Link href=' ' className='flex justify-center underline;'>
            Create new account?
          </Link>
        </StylizedPaper>
      </Stack>
    </Layout>
  );
};

export default LoginPage;
