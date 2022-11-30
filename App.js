import React from 'react';
import { StatusBar } from 'react-native';

import routes from './scr/Routes';

export default function App(){
  return(
    <>
    <StatusBar barStyle={"auto"} />
    <Routes/>

    </>
  );
}

