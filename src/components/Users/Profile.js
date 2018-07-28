import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import type { UserType } from 'app/types/User';
import { COLORS, MARGINS } from 'app/constants/design';
import { User } from 'app/components/Users';
import type { PhotoType } from 'app/types/Photo';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 0,
    margin: MARGINS.TINY,
  },
  photoImageThumbnail: {
    backgroundColor: COLORS.GREY_DARK,
    height: 100,
    margin: MARGINS.TINY,
    width: 100,
  },
  photosContainer: {
    borderColor: COLORS.GREY,
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: 347,
  },
});

type PhotoThumbnailProps = {
  photo: PhotoType,
};

const PhotoThumbnail = (props: PhotoThumbnailProps) => (
  <Image style={styles.photoImageThumbnail} source={{ uri: props.photo.url }} />
);

type Props = {
  user: UserType,
  photos: Array<PhotoType>,
};

const Profile = (props: Props) => (
  <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
    <User user={props.user} />
    {
      props.photos.length !== 0 &&
      <View style={styles.photosContainer}>
        {
          props.photos.map((photo) => (<PhotoThumbnail key={photo.id} photo={photo} />))
        }
      </View>
    }
  </ScrollView>
);

export default Profile;
