import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import type { UserType } from 'src/types/User';
import { MARGINS, COLORS } from 'src/constants/design';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import geolib from 'geolib';
import LoadingHOC from 'src/components/HOC/LoaderHOC';

const styles = StyleSheet.create({
  userContainer: {
    backgroundColor: COLORS.BACKGROUND,
    borderColor: COLORS.GREY_LIGHTEST,
    borderWidth: 1,
    margin: MARGINS.SMALL,
    padding: MARGINS.SMALL,
  },
  userControl: {
    alignSelf: 'center',
    bottom: 50,
    flexDirection: 'row',
    marginBottom: MARGINS.SMALL,
    position: 'absolute',
  },
  userHeader: {
    flexDirection: 'row',
    marginBottom: MARGINS.SMALL,
  },
  userImage: {
    alignItems: 'center',
    backgroundColor: COLORS.GREY_DARK,
    height: 325,
    justifyContent: 'flex-end',
    margin: 0,
    marginBottom: MARGINS.SMALL,
    width: 325,
  },
  userProfile: {
    backgroundColor: COLORS.GREY_DARK,
    borderRadius: 10,
    height: 20,
    marginRight: MARGINS.SMALL,
    width: 20,
  },
  usersContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

const getDistance = (lat1, long1, lat2, long2) => {
  const distance = geolib.getDistance(
    { latitude: lat1, longitude: long1 },
    { latitude: lat2, longitude: long2 },
  );
  /* eslint-disable-next-line */
  return distance < 500 ? `${distance} meters away` : `${distance/1000} kilometers away`;
};

type UserProps = {
  user: UserType,
  currentUser?: UserType,
};

const User = (props: UserProps) => (
  <View style={styles.userContainer}>
    <View style={styles.userHeader}>
      <Text>{props.user.name}</Text>
    </View>
    {/* eslint-disable-next-line */}
    <Image style={styles.userImage} source={props.user.picture} defaultSource={require('src/assets/images/no-pic.jpg')} />
    {
      props.currentUser &&
      <Text>{getDistance(props.user.lat, props.user.long, props.currentUser.lat, props.currentUser.long)}</Text>
    }
    <Text>{moment(props.user.activeAt).fromNow()}</Text>
  </View>
);

type UsersProps = {
  users: Array<UserType>,
  currentUser?: UserType,
};

const Users = (props: UsersProps) => (
  <View style={styles.usersContainer}>
    {
      props.users.map((user) =>
        (user.id !== props.currentUser.id ?
          <View key={user.id}>
            <User user={user} currentUser={props.currentUser} />
            <View style={styles.userControl}>
              <Icon style={{ marginRight: MARGINS.SMALL }} name="heart" size={40} color={COLORS.RED} />
              <Icon name="times-circle" size={40} color={COLORS.RED} />
            </View>
          </View>
          : null
        ))
    }
  </View>
);

Users.defaultProps = {
  currentUser: undefined,
};

User.defaultProps = {
  currentUser: undefined,
};

export default LoadingHOC('users')(Users);
export { Users, User };
