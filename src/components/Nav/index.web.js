// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { MARGINS, COLORS, FONT_SIZES, HEADER_HEIGHT } from 'src/constants/design';
import { injectIntl } from 'react-intl';
import { Actions } from 'react-native-router-flux';
import { logout } from 'src/pages/Auth/actions';
import { selectCurrentUser } from 'src/pages/Auth/selector';

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
    justifyContent: 'flex-end',
    paddingTop: 160,
    position: 'absolute',
    right: 0,
    width: 200,
  },
  left: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: MARGINS.SMALL,
  },
  nav: {
    margin: MARGINS.SMALL,
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
  currentUser: UserType,
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
                  style={styles.nav}
                  onPress={() => { this.setState({ hover: false }); Actions.replace('profile'); }}
                >
                  <Text style={styles.title}>{this.props.currentUser.username}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.nav}
                  onPress={() => { this.setState({ hover: false }); Actions.replace('settings'); }}
                >
                  <Text style={styles.title}>{this.props.intl.formatMessage({ id: 'Nav.settings' })}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.nav}
                  onPress={() => { this.setState({ hover: false }); this.props.logout(); }}
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

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Nav));
