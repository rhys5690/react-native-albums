import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({props}) => {
const { title, artist, thumbnail_image, image, url } = album;
const {
  thumbnailStyle,
  headerContentStyle,
  thumbnailContainerStyle,
  headerTextStyle,
  imageStyle
} = styles;
  return(
    <Card>
      <CardSection>
          <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  )
}

export default AlbumDetail;
