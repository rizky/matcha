import React from 'react';
import { View, Text } from 'react-native';
import { MARGINS, COLORS, FONT_SIZES, HEADER_HEIGHT } from 'app/constants/design';

const styles = {
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
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

const Footer = () => (
  <View style={styles.footer}>
    <View style={styles.body}>
      <Text style={styles.title}>Left</Text>
    </View>
    <View style={styles.body}>
      <Text style={styles.title}>Center</Text>
    </View>
    <View style={styles.body}>
      <Text style={styles.title}>Right</Text>
    </View>
  </View>
);
export default Footer;
export { Footer };

