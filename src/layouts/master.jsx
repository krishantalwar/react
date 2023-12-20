import * as React from 'react';
import {  createTheme, ThemeProvider } from '@mui/material/styles';


import Login from '../pages/login/login';
import Home from './home';

// import { Outlet } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

// import { selectIsCartOpen } from '../../store/cart/cart.selector';
// import { selectCurrentUser } from '../../store/user/user.selector';
// import { signOutStart } from '../../store/user/user.action';


const defaultTheme = createTheme();

export default function Dashboard(children ) {
  // const dispatch = useDispatch();
  // const currentUser = useSelector(selectCurrentUser);
  // const signOutUser = () => dispatch(signOutStart());
    const currentUser=0;
  return (
    <ThemeProvider theme={defaultTheme}>

        {currentUser?<Home/>:<Login/>}

    </ThemeProvider>
  );
}