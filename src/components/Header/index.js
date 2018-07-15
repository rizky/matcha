import React from 'react';
import { View, Text } from 'react-native';
import { MARGINS, COLORS, FONT_SIZES, HEADER_HEIGHT } from 'app/constants/design';
import { injectIntl } from 'react-intl';
import ThreeDots from 'app/components/Icons/ThreeDots';
import ChevronLeft from 'app/components/Icons/ChevronLeft';

const styles = {
  body: {
    alignItems: 'center',
    flex: 1,
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
    justifyContent: 'center',
    paddingHorizontal: MARGINS.SMALL,
  },
  right: {
    alignItems: 'flex-end',
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

const Header = (props: Props) => (
  <View style={styles.header}>
    <View style={styles.left}>
      <ChevronLeft size={20} color={COLORS.BLUE_DARKER} />
    </View>
    <View style={styles.body}>
      <Text style={styles.title}>{props.intl.formatMessage({ id: 'App.title' })}</Text>
    </View>
    <View style={styles.right}>
      <ThreeDots size={20} color={COLORS.BLUE_DARKER} />
    </View>
  </View>
);
export default injectIntl(Header);
export { Header };
