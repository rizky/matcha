// @flow
import React from 'react';
import { View, Image } from 'react-native';
import { COLORS } from 'src/constants/design';

type Props = {|
  isLoading?: boolean,
|};

const Loader = (props: Props) => (
  props.isLoading ?
    <View
      style={{
        alignItems: 'center',
        backgroundColor: COLORS.BLACK_TRANSPARENT,
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
      }}
    >
      {/* eslint-disable-next-line */}
      <Image style={{ height: 50, width: 50 }} source={require('src/assets/images/loading.gif')} />
    </View> :
    null
);

Loader.defaultProps = {
  isLoading: false,
};

export default Loader;
