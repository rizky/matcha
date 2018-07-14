import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  color: string,
  size: number,
};

const ThreeDots = (props: Props) => (<Icon name="ellipsis-h" size={props.size} color={props.color} />);

export default ThreeDots;

