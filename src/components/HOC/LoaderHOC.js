
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  image: {
    height: 50,
    width: 50,
  },
});

const Loader = () => (
  <View style={styles.container}>
    {/* eslint-disable-next-line */}
    <Image style={styles.image} source={require('src/assets/images/loading.gif')} />
  </View>
);

const isEmpty = (prop) => (
  prop === null ||
  prop === undefined ||
  (Object.prototype.hasOwnProperty.call(prop, 'length') && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0)
);

const LoadingHOC = (propName) => (Component) => {
  const ExtendedComponent = (props) => (isEmpty(props[propName])
    ? <Loader />
    : <Component {...props} />
  );
  ExtendedComponent.displayName = `LoadingHOC(${Component.displayName || Component.name})`;
  return ExtendedComponent;
};

export default LoadingHOC;
