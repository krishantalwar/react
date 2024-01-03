import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from '../../layouts/copyright';
// import {useGetPostsQuery} from '../../store/user/user.reducer';
// import {apiSlice} from '../../apis/api';
// import { useDispatch } from 'react-redux';

import {useLoginMutation} from '../../features/auth/authService';

// import { useDispatch } from 'react-redux';

// import { setAuth } from '../../features/auth/authSlice';

const defaultFormFields = {
  email: '',
  password: '',
};


export default function SignIn() {

  // const [Login, { currentData,isUninitialized,isFetching,isLoading
  //     , isError,
  //       isSuccess,
  //       error}] = useLoginMutation()

    const [Login, { isLoading}] = useLoginMutation()

  const [formFields, setFormFields] = React.useState(defaultFormFields);
  const { email, password } = formFields;
// const dispatch = useDispatch();
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    try {
      // let asd =
        await Login({
          email: data.get('email'),
      password: data.get('password') }).unwrap()
      // dispatch(setAuth({ isAuthenticated: true, user: { 'asdas': 'das' } }));
      

      // console.log("asd",asd);
      // console.log(isLoading)
      // console.log(isError)
      // console.log(isSuccess)
      // console.log(error)
      resetFormFields()
      // Redirect to the dashboard page after successful login
      // history.push('/dashboard');
    } catch (error) {
      // Handle login error
      console.error('Login error:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  
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
          <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              onChange={handleChange}
              value={email}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChange}
              value={password}
              autoComplete="current-password"
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