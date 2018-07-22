import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MARGINS, COLORS, FONT_SIZES, HEADER_HEIGHT } from 'app/constants/design';
import { injectIntl } from 'react-intl';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

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
    fontSize: FONT_SIZES.BIG,
    textAlign: 'center',
  },
};

type Props = {
  intl: any,
  hasBack?: boolean,
  title?: string,
};

const Header = (props: Props) => (
  <View style={styles.header}>
    <View style={styles.left}>
      { props.hasBack &&
        <TouchableOpacity onPress={() => Actions.pop()}>
          <Icon name="chevron-left" size={20} color={COLORS.BLUE_DARKER} />
        </TouchableOpacity>
      }
    </View>
    <View style={styles.body}>
      <Text style={styles.title}>
        {
          props.title
            ? props.title
            : props.intl.formatMessage({ id: 'App.title' })
        }
      </Text>
    </View>
    <View style={styles.right}>
      <Icon name="ellipsis-h" size={20} color={COLORS.BLUE_DARKER} />
    </View>
  </View>
);

Header.defaultProps = {
  hasBack: false,
  title: undefined,
};

export default injectIntl(Header);
export { Header };
