
import React, { Component } from 'react';
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
    <Image style={styles.image} source={require('app/assets/images/loading.gif')} />
  </View>
);

const isEmpty = (prop) => (
  prop === null ||
  prop === undefined ||
  (Object.prototype.hasOwnProperty.call(prop, 'length') && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0)
);

const LoadingHOC = (propName) => (WrappedComponent) => (
  class ExtendedCompoment extends Component {
    componentDidMount() {
      this.startTimer = Date.now();
    }

    componentWillUpdate(nextProps) {
      if (!isEmpty(nextProps[propName])) {
        this.endTimer = Date.now();
      }
    }

    render() {
      const myProps = {
        loadingTime: ((this.endTimer - this.startTimer) / 1000).toFixed(2), // eslint-disable-line
      };
      return isEmpty(this.props[propName])
        ? <Loader />
        : <WrappedComponent {...this.props} {...myProps} />;
    }
  }
);

export default LoadingHOC;
