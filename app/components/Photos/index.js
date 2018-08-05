import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import type { PhotoType } from 'app/types/Photo';
import { MARGINS, COLORS } from 'app/constants/design';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import LoadingHOC from 'app/components/HOC/LoaderHOC';

const styles = StyleSheet.create({
  photoContainer: {
    backgroundColor: COLORS.BACKGROUND,
    borderColor: COLORS.GREY,
    borderWidth: 1,
    margin: MARGINS.SMALL,
    padding: MARGINS.SMALL,
  },
  photoControl: {
    flexDirection: 'row',
    marginBottom: MARGINS.SMALL,
  },
  photoHeader: {
    flexDirection: 'row',
    marginBottom: MARGINS.SMALL,
  },
  photoImage: {
    backgroundColor: COLORS.GREY_DARK,
    height: 325,
    margin: 0,
    marginBottom: MARGINS.SMALL,
    width: 325,
  },
  photoProfile: {
    backgroundColor: COLORS.GREY_DARK,
    borderRadius: 10,
    height: 20,
    marginRight: MARGINS.SMALL,
    width: 20,
  },
  photosContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

type PhotoProps = {
  photo: PhotoType,
};

const Photo = (props: PhotoProps) => (
  <View style={styles.photoContainer}>
    <View style={styles.photoHeader}>
      {/* eslint-disable-next-line */}
      <Image style={styles.photoProfile} source={{ uri: props.photo.user.picture }} defaultSource={require('app/assets/images/no-pic.jpg')} />
      <Text>{props.photo.user.username}</Text>
    </View>
    <Image style={styles.photoImage} source={{ uri: props.photo.url }} />
    <View style={styles.photoControl}>
      <Icon style={{ marginRight: MARGINS.SMALL }} name="heart" size={20} color={COLORS.GREY_DARK} />
      <Icon name="comment" size={20} color={COLORS.GREY_DARK} />
    </View>
    <Text>{moment(props.photo.createdAt).fromNow()}</Text>
  </View>
);

type PhotosProps = {
  photos: Array<PhotoType>,
};

const Photos = (props: PhotosProps) => (
  <View style={styles.photosContainer}>
    {
      props.photos.map((photo) => (<Photo key={photo.id} photo={photo} />))
    }
  </View>
);

export default LoadingHOC('photos')(Photos);
export { Photos };
