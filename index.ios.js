//import library to create a component

//Create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => (
  <Header/>
);


//render it o the device
AppRegistry.registerComponent('albums', () => App);
