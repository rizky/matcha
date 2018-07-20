import React from 'react';
import { Text, View } from 'react-native';
import type { Photo } from 'app/types/Photo';

type Props = {
  photos: Array<Photo>,
};

const Photos = (props: Props) => (
  <View>
    {
      (props.photos)
        ? props.photos.map((photo) => (<Text key={photo.id}>{photo.url}</Text>))
        : null
    }
  </View>
);

export default Photos;
export { Photos };
