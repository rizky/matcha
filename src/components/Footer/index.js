import React from 'react';
import { View, Text } from 'react-native';
import { MARGINS, COLORS, FONT_SIZES, HEADER_HEIGHT } from 'src/constants/design';
import { injectIntl } from 'react-intl';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = {
  body: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: COLORS.BACKGROUND,
    flexDirection: 'row',
    height: HEADER_HEIGHT,
    justifyContent: 'center',
  },
  left: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: MARGINS.SMALL,
  },
  right: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: MARGINS.SMALL,
  },
  title: {
    color: COLORS.BLUE_DARKER,
    fontSize: FONT_SIZES.MEDIUM2,
    textAlign: 'center',
  },
};

type Props = {
  intl: any,
};

const Footer = (props: Props) => (
  <View style={styles.header}>
    <View style={styles.left} />
    <View style={styles.body}>
      <Text style={styles.title}>{props.intl.formatMessage({ id: 'Footer.title' })}</Text>
    </View>
    <View style={styles.right}>
      <Icon name="github" size={20} color={COLORS.BLUE_DARKER} />
    </View>
  </View>
);
export default injectIntl(Footer);
