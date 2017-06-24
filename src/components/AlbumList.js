import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    console.log("yerere");
    axios.get('https://rallycoding.herokuapp/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }
  render() {
  return(
    <View>
      <Text>Album List</Text>
    </View>
    );
  }
}

export default AlbumList;
