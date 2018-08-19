import React from 'react';
import { View, Text } from 'react-native';
import { MARGINS, COLORS } from 'src/constants/design';

type Props = {|
  message: string,
  isShow?: boolean,
|};

const Toast = (props: Props) => (
  props.isShow ?
    <View
      style={{
        alignItems: 'center',
        bottom: MARGINS.EXTREME,
        position: 'absolute',
        width: '100%',
      }}
    >
      <View style={{ backgroundColor: COLORS.BLUE_LIGHT, padding: MARGINS.SMALL }}>
        <Text style={{ color: COLORS.WHITE }}>{props.message}</Text>
      </View>
    </View> :
    null
);

Toast.defaultProps = {
  isShow: false,
};

export default Toast;
