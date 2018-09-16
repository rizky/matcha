import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MARGINS, COLORS, FONT_SIZES, HEADER_HEIGHT } from 'src/constants/design';
import { injectIntl } from 'react-intl';
import { Actions } from 'react-native-router-flux';

const styles = {
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  nav: {
    backgroundColor: COLORS.BACKGROUND,
    borderColor: COLORS.GREY_LIGHTEST,
    borderTopWidth: 1,
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
    <TouchableOpacity style={styles.body} onPress={() => Actions.replace('feed')}>
      <Text style={styles.title}>{props.intl.formatMessage({ id: 'Nav.home' })}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.body} onPress={() => Actions.replace('discover')}>
      <Text style={styles.title}>{props.intl.formatMessage({ id: 'Nav.discover' })}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.body} onPress={() => Actions.replace('messages')}>
      <Text style={styles.title}>{props.intl.formatMessage({ id: 'Nav.messages' })}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.body} onPress={() => Actions.replace('profile')}>
      <Text style={styles.title}>{props.intl.formatMessage({ id: 'Nav.profile' })}</Text>
    </TouchableOpacity>
  </View>
);
export default injectIntl(Nav);
