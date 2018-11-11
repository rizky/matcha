// @flow
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { COLORS, MARGINS } from 'src/constants/design';
import { User } from 'src/components/Users';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: '100%',
    margin: MARGINS.TINY,
  },
  photoImageThumbnail: {
    backgroundColor: COLORS.GREY_DARK,
    height: 100,
    margin: MARGINS.TINY,
    width: 100,
  },
  photosContainer: {
    backgroundColor: COLORS.BACKGROUND,
    borderColor: COLORS.GREY_LIGHTEST,
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: 347,
  },
});

type Props = {
  user: UserType,
};

const Profile = (props: Props) => (
  <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
    <User user={props.user} />
  </ScrollView>
);

export default Profile;
