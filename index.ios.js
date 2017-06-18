//import library to create a component

//Create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

const App = () => (
  <Text>Some Text</Text>
);


//render it o the device
AppRegistry.registerComponent('albums', () => App);
