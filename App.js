import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './scr/Routes';

export default function App() {
  return(
    <>
    <StatusBar barStyle={"auto"} />
    <Routes />

    </>
  );
}

