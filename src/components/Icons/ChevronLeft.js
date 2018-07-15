import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  color: string,
  size: number,
  style?: Object,
};

const ChevronLeft = (props: Props) =>
  (<Icon name="chevron-left" size={props.size} color={props.color} style={props.style} />);

ChevronLeft.defaultProps = {
  style: {},
};

export default ChevronLeft;

