import React from 'react';
import { View, Text } from 'react-native';
import { MARGINS, COLORS, FONT_SIZES, HEADER_HEIGHT } from 'app/constants/design';
import { injectIntl } from 'react-intl';

const styles = {
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  nav: {
    backgroundColor: COLORS.BACKGROUND,
    flexDirection: 'row',
    height: HEADER_HEIGHT,
    justifyContent: 'center',
    paddingHorizontal: MARGINS.SMALL,
  },
  title: {
    color: COLORS.BLUE_DARKER,
    fontSize: FONT_SIZES.BIG,
    textAlign: 'center',
  },
};

type Props = {
  intl: any,
};

const Nav = (props: Props) => (
  <View style={styles.nav}>
    <View style={styles.body}>
      <Text style={styles.title}>{props.intl.formatMessage({ id: 'Nav.home' })}</Text>
    </View>
    <View style={styles.body}>
      <Text style={styles.title}>{props.intl.formatMessage({ id: 'Nav.discover' })}</Text>
    </View>
    <View style={styles.body}>
      <Text style={styles.title}>{props.intl.formatMessage({ id: 'Nav.messages' })}</Text>
    </View>
    <View style={styles.body}>
      <Text style={styles.title}>{props.intl.formatMessage({ id: 'Nav.profile' })}</Text>
    </View>
  </View>
);
export default injectIntl(Nav);
export { Nav };

