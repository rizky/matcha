import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import type { UserType } from 'app/types/User';
import { MARGINS, COLORS } from 'app/constants/design';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import geolib from 'geolib';

const styles = StyleSheet.create({
  userContainer: {
    backgroundColor: COLORS.BACKGROUND,
    borderColor: COLORS.GREY,
    borderWidth: 1,
    margin: MARGINS.SMALL,
    padding: MARGINS.SMALL,
  },
  userControl: {
    flexDirection: 'row',
    marginBottom: MARGINS.SMALL,
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
    <ImageBackground style={styles.userImage} source={require('app/assets/images/no-pic.jpg')}>
      <View style={styles.userControl}>
        <Icon style={{ marginRight: MARGINS.SMALL }} name="heart" size={40} color={COLORS.RED} />
        <Icon name="times-circle" size={40} color={COLORS.RED} />
      </View>
    </ImageBackground>
    <Text>{getDistance(props.user.lat, props.user.long, props.currentUser.lat, props.currentUser.long)}</Text>
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
        (user.id !== props.currentUser.id
          ? <User key={user.id} user={user} currentUser={props.currentUser} />
          : null
        ))
    }
  </View>
);

Users.defaultProps = {
  currentUser: {
    activeAt: '2018-07-15T14:25:50.000Z',
    createdAt: '2018-07-15T14:25:50.000Z',
    dob: '1989-05-30T00:00:00.000Z',
    email: 'sawyer@gmail.com',
    id: 1,
    lat: 46.528999,
    long: 6.5,
    name: 'Virgil Sawyer',
    password: '3bb37061e887baa3b48ebe9f060f1a42baf995fb',
    picture: '/img/profiles/no-pic.jpg',
    tokenLost: null,
    tokenValidated: null,
    updatedAt: '2018-07-15T14:25:50.000Z',
    username: 'admin',
  },
};

User.defaultProps = {
  currentUser: {
    activeAt: '2018-07-15T14:25:50.000Z',
    createdAt: '2018-07-15T14:25:50.000Z',
    dob: '1989-05-30T00:00:00.000Z',
    email: 'sawyer@gmail.com',
    id: 1,
    lat: 46.528999,
    long: 6.5,
    name: 'Virgil Sawyer',
    password: '3bb37061e887baa3b48ebe9f060f1a42baf995fb',
    picture: '/img/profiles/no-pic.jpg',
    tokenLost: null,
    tokenValidated: null,
    updatedAt: '2018-07-15T14:25:50.000Z',
    username: 'admin',
  },
};

export default Users;
export { Users, User };
