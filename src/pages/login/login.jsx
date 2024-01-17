import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from '../../layouts/copyright';

import {
  useLoginEmailMutation,
  // useLoginGoogleMutation
} from '../../features/auth/authService';

// import Input  from '../../components/ui/forminputs/input';
import Input from '../../components/ui/forminputs/input';

// import { useDispatch } from 'react-redux';

// import { setAuth } from '../../features/auth/authSlice';
import { GoogleLogin, useGoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';

import { useForm, Controller } from 'react-hook-form';




// const defaultFormFields = {
//   email: '',
//   password: '',
// };


export default function SignIn() {
  const { handleSubmit, control,
    // errors,
    // getValues, getFieldState, 
    formState
    // reset, watch,
  } = useForm(
    {
      mode: 'onChange',
      defaultValues: {
        email: "",
        password: "",
      },
    }
  );
  // console.log(errors)
  // console.log(formState);
  // const [Login, { currentData,isUninitialized,isFetching,isLoading
  //     , isError,
  //       isSuccess,
  //       error}] = useLoginMutation()

  const [LoginEmail, {
    // currentData, 
    // isFetching,
    isLoading,
    // isSuccess, isError,
    // error,
    // status
  }] = useLoginEmailMutation();
  // const [LoginGoogle, { isLoadings }] = useLoginGoogleMutation();

  // const [APIError, setAPIError] = React.useState('');
  // const { email, password } = formFields;

  // const dispatch = useDispatch();
  const resetFormFields = () => {
    // setFormFields(defaultFormFields);
  };



  const onSubmit = async (data) => {
    // event.preventDefault();
    // console.log(data)
    // const data = new FormData(event.currentTarget);
    try {
      // console.log(isFetching);
      // console.log(status);
      console.log(isLoading);
      // console.log(isSuccess);
      // console.log(isError);
      // console.log(error);
      console.log(!isLoading);
      if (!isLoading) {
        await LoginEmail({
          email: data.email,
          password: data.password
        }).unwrap()
      }

      // dispatch(setAuth({ isAuthenticated: true, user: { 'asdas': 'das' } }));

      // resetFormFields()
      // Redirect to the dashboard page after successful login
      // history.push('/dashboard');
    } catch (error) {
      // console.error('Login error:');
      // console.log(isFetching);
      // console.log(status);
      // console.log(isLoading);
      // console.log(isSuccess);
      // console.log(isError);
      // console.log(error);
      // console.log(!isLoading);
      // Handle login error
      // setAPIError(error.data)
      console.error('Login error:', error);
    }
  };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormFields({ ...formFields, [name]: value });
  // };


  const responseMessage = async (response) => {
    // console.log(response);

    // console.log(response.clientId);

    // await LoginGoogle(response).unwrap()
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
    onError: Error => console.log(Error),
    flow: 'auth-code'
  });

  const useGoogleOneTapLogisn = useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      console.log('One Tap login successful', credentialResponse);
      // Handle the successful login here
    },
    onError: () => {
      console.error('One Tap login failed');
      // Handle login errors here
    },
    // Additional configuration options can be provided here
    // auto_select: true, // Automatically prompt the user if they have a single session
  });

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>


          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>

            <Controller
              name="email"
              control={control}
              rules={{ required: 'Email is required', pattern: /^\S+@\S+$/i }}
              render={({ field }) => (
                <Input
                  {...field}
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  type="email"
                  autoComplete="email"
                  autoFocus
                  formcontrolpops={{
                    "fullWidth": true,
                    "variant": "standard",
                  }}
                  error={Boolean(formState?.errors?.email)}
                  helperText={formState?.errors?.email?.message}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{ required: 'Password is required', minLength: 8 }}
              render={({ field }) => (
                <Input
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  formcontrolpops={{
                    "fullWidth": true,
                    "variant": "standard",
                  }}
                  error={Boolean(formState?.errors?.password)}
                  helperText={formState?.errors?.password?.message}
                />
              )}
            />



            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mb: 2, background: '#4D82E5', py: '10px', textTransform: 'none' }}
              onClick={() => login()}
            >
              Sign in with Google
            </Button>
            {useGoogleOneTapLogisn}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>

              </Grid>
            </Grid>
          </Box>

        </Box>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}