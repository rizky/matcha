import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { injectIntl } from 'react-intl';
import { COLORS, MARGINS, FONT_SIZES } from 'app/constants/design';
import { changePassword } from 'app/pages/Auth/actions';
import Layout from 'app/components/Layout/Basic';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: 1,
    borderColor: COLORS.GREY,
    margin: MARGINS.SMALL2,
    width: 300,
  },
  title: {
    fontSize: FONT_SIZES.BIG,
    marginBottom: MARGINS.BIG,
  },
});

type Props = {
  intl: any,
  changePassword: Function,
};

type State = {
  password: string,
  password2: string,
  token: string,
}

class ChangePassword extends Component<Props, State> {
  state = {
    password: '',
    password2: '',
    token: '',
  }

  render() {
    return (
      <Layout noTabs>
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.intl.formatMessage({ id: 'ChangePasswordPage.title' })}</Text>
          <TextInput
            style={styles.textInput}
            placeholder={this.props.intl.formatMessage({ id: 'ChangePasswordPage.token' })}
            value={this.state.token}
            autoCapitalize="none"
            onChangeText={(token) => this.setState({ token })}
          />
          <TextInput
            style={styles.textInput}
            placeholder={this.props.intl.formatMessage({ id: 'ChangePasswordPage.password' })}
            value={this.state.password}
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(password) => this.setState({ password })}
          />
          <TextInput
            style={styles.textInput}
            placeholder={this.props.intl.formatMessage({ id: 'ChangePasswordPage.password2' })}
            value={this.state.password2}
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(password2) => this.setState({ password2 })}
          />
          <Button
            title={this.props.intl.formatMessage({ id: 'ChangePasswordPage.button' })}
            onPress={() => this.props.changePassword(this.state.token, this.state.password, this.state.password2)}
          />
          <View style={{ marginTop: MARGINS.SMALL }}>
            <TouchableOpacity onPress={() => Actions.login()}>
              <Text style={{ textAlign: 'center', textDecorationLine: 'underline' }}>
                {this.props.intl.formatMessage({ id: 'ChangePasswordPage.login' })}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: MARGINS.SMALL }}>
            <TouchableOpacity onPress={() => Actions.signup()}>
              <Text style={{ textAlign: 'center', textDecorationLine: 'underline' }}>
                {this.props.intl.formatMessage({ id: 'ChangePasswordPage.signup' })}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  changePassword,
};

export default connect(null, mapDispatchToProps)(injectIntl(ChangePassword));
