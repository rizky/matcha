// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { injectIntl } from 'react-intl';
import { Actions } from 'react-native-router-flux';
import { selectCurrentUser } from 'src/pages/Auth/selector';
import { FIELD_HEIGHT } from 'src/constants/design';
import Layout from 'src/components/Layout/Basic';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 2 * FIELD_HEIGHT, // eslint-disable-line
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
      <Layout noTabs>
        <View style={styles.container}>
          <Text>{this.props.intl.formatMessage({ id: 'LandingPage.welcome' })}</Text>
          <View>
            <TouchableOpacity onPress={() => Actions.push('oauth')}>
              <Text style={{ textAlign: 'center', textDecorationLine: 'underline' }}>
                {this.props.intl.formatMessage({ id: 'LoginPage.login' })}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => Actions.signup()}>
              <Text style={{ textAlign: 'center', textDecorationLine: 'underline' }}>
                {this.props.intl.formatMessage({ id: 'SignupPage.signUp' })}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(injectIntl(Landing));
