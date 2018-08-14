import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { injectIntl } from 'react-intl';
import { Actions } from 'react-native-router-flux';
import { COLORS, MARGINS } from 'app/constants/design';
import { selectCurrentUser } from 'app/pages/Auth/selector';
import type { UserType } from 'app/types/User';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
    justifyContent: 'center',
  },
});

type Props = {
    currentUser: UserType,
    intl: any,
};

class Landing extends Component<Props> {
  componentWillMount() {
    if (this.props.currentUser !== undefined) {
      Actions.replace('feed');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.intl.formatMessage({ id: 'LandingPage.welcome' })}</Text>
        <View style={{ marginTop: MARGINS.MEDIUM2 }}>
          <TouchableOpacity onPress={() => Actions.login()}>
            <Text style={{ textAlign: 'center', textDecorationLine: 'underline' }}>
              {this.props.intl.formatMessage({ id: 'LoginPage.login' })}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: MARGINS.SMALL }}>
          <TouchableOpacity onPress={() => Actions.signup()}>
            <Text style={{ textAlign: 'center', textDecorationLine: 'underline' }}>
              {this.props.intl.formatMessage({ id: 'SignupPage.signUp' })}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(injectIntl(Landing));
