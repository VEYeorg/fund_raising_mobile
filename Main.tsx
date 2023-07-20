import * as React from 'react';
// import Main from './Main';
import Auth from './src/navigations/Auth';
import {useAuth} from './src/context/AuthContext';
import MainNavigation from './src/navigations/MainNavigation';

export default function Main() {
  const {isLoggedIn} = useAuth();
  return isLoggedIn ? <MainNavigation /> : <Auth />;
}
