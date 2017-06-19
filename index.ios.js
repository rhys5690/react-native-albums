//import library to create a component

//Create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
<View>
  <Header headerText={'albums'}/>
  <AlbumList />
</View>
);


//render it o the device
AppRegistry.registerComponent('albums', () => App);
