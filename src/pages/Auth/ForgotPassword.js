// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { injectIntl } from 'react-intl';
import { MARGINS, FONT_SIZES, FIELD_HEIGHT } from 'src/constants/design';
import { resetPassword } from 'src/pages/Auth/actions';
import Layout from 'src/components/Layout/Basic';
import { Actions } from 'react-native-router-flux';
import TextField from 'src/primitives/TextField';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 4 * FIELD_HEIGHT, // eslint-disable-line
    justifyContent: 'space-around',
    width: '80%',
  },
  title: {
    fontSize: FONT_SIZES.BIG,
    marginBottom: MARGINS.BIG,
  },
});

type Props = {
  intl: any,
  resetPassword: Function,
};

type State = {
  email: string,
}

class ForgotPassword extends Component<Props, State> {
  state = {
    email: '',
  }

  render() {
    return (
      <Layout noTabs>
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.intl.formatMessage({ id: 'ForgotPasswordPage.title' })}</Text>
          <TextField
            placeholder={this.props.intl.formatMessage({ id: 'ForgotPasswordPage.email' })}
            value={this.state.email}
            autoCapitalize="none"
            onChangeText={(email) => this.setState({ email })}
          />
          <Button
            title={this.props.intl.formatMessage({ id: 'ForgotPasswordPage.button' })}
            onPress={() => this.props.resetPassword(this.state.email)}
          />
          <View>
            <TouchableOpacity onPress={() => Actions.login()}>
              <Text style={{ textAlign: 'center', textDecorationLine: 'underline' }}>
                {this.props.intl.formatMessage({ id: 'ForgotPasswordPage.login' })}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => Actions.signup()}>
              <Text style={{ textAlign: 'center', textDecorationLine: 'underline' }}>
                {this.props.intl.formatMessage({ id: 'ForgotPasswordPage.signup' })}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  resetPassword,
};

export default connect(null, mapDispatchToProps)(injectIntl(ForgotPassword));
