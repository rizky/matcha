import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { MARGINS, COLORS, FONT_SIZES, HEADER_HEIGHT } from 'src/constants/design';
import { injectIntl } from 'react-intl';
import { Actions } from 'react-native-router-flux';
import { logout } from 'src/pages/Auth/actions';

const styles = {
  body: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: COLORS.BACKGROUND,
    borderBottomWidth: 1,
    borderColor: COLORS.GREY_LIGHTEST,
    flexDirection: 'row',
    height: HEADER_HEIGHT,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  hover: {
    backgroundColor: COLORS.BACKGROUND,
    height: 150,
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    width: 100,
  },
  left: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: MARGINS.SMALL,
  },
  nav: {
    marginHorizontal: MARGINS.SMALL,
  },
  right: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
  logout: Function,
};

type State = {
  hover: boolean,
}

class Nav extends Component <Props, State> {
  state = {
    hover: false,
  }
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.left}>
          <TouchableOpacity style={styles.nav} onPress={() => Actions.replace('feed')}>
            <Text style={styles.title}>{this.props.intl.formatMessage({ id: 'Nav.home' })}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nav} onPress={() => Actions.replace('discover')}>
            <Text style={styles.title}>{this.props.intl.formatMessage({ id: 'Nav.discover' })}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nav} onPress={() => Actions.replace('messages')}>
            <Text style={styles.title}>{this.props.intl.formatMessage({ id: 'Nav.messages' })}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>
            {
              this.props.intl.formatMessage({ id: 'App.title' })
            }
          </Text>
        </View>
        <View style={styles.right}>
          {
            this.state.hover &&
              <View
                style={styles.hover}
                onMouseEnter={() => this.setState({ hover: true })}
                onMouseLeave={() => this.setState({ hover: false })}
              >
                <TouchableOpacity
                  style={[styles.nav, { marginTop: 90 }]}
                  onPress={() => {
                    this.setState({ hover: false });
                    this.props.logout();
                  }}
                >
                  <Text style={styles.title}>{this.props.intl.formatMessage({ id: 'Nav.logout' })}</Text>
                </TouchableOpacity>
              </View>
          }
          <TouchableOpacity
            onPress={() => Actions.replace('profile')}
            onMouseEnter={() => this.setState({ hover: true })}
            style={styles.nav}
          >
            <Text style={styles.title}>{this.props.intl.formatMessage({ id: 'Nav.profile' })}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = {
  logout,
};

export default connect(null, mapDispatchToProps)(injectIntl(Nav));
