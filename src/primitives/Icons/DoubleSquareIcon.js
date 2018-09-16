import React, { type Node } from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from 'src/constants/design';

type Props = {
  sizeBigSquare: number,
  sizeSmallSquare: number,
  icon: Node,
  colorSmallSquare: string,
  SquareBigStyle?: Object,
};

const styles = StyleSheet.create({
  SquareBig: {
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    elevation: 3,
    justifyContent: 'center',
  },
  SquareSmall: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const DoubleSquareIcon = (props: Props) => {
  DoubleSquareIcon.defaultProps = {
    SquareBigStyle: {},
  };
  return (
    <View
      style={[styles.SquareBig, {
        borderRadius: 5,
        height: props.sizeBigSquare,
        width: props.sizeBigSquare,
      }, props.SquareBigStyle]}
    >
      <View
        style={[styles.SquareSmall, {
          backgroundColor: props.colorSmallSquare,
          borderRadius: 3,
          height: props.sizeSmallSquare,
          width: props.sizeSmallSquare,
        }]}
      >
        {props.icon}
      </View>
    </View>
  );
};

export default DoubleSquareIcon;
