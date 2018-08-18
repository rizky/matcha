import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { injectIntl } from 'react-intl';
import { COLORS, MARGINS, FONT_SIZES } from 'app/constants/design';
import { login } from 'app/pages/Auth/actions';
import Layout from 'app/components/Layout/Basic';
import { Actions } from 'react-native-router-flux';
import TextField from 'app/primitives/TextField';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '80%',
  },
  title: {
    fontSize: FONT_SIZES.BIG,
    marginBottom: MARGINS.BIG,
  },
});

type Props = {
  intl: any,
  login: Function,
};

type State = {
  password: string,
  username: string,
}

class Login extends Component<Props, State> {
  state = {
    password: '',
    username: '',
  }

  render() {
    return (
      <Layout noTabs>
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.intl.formatMessage({ id: 'LoginPage.title' })}</Text>
          <TextField
            placeholder={this.props.intl.formatMessage({ id: 'LoginPage.username' })}
            value={this.state.username}
            autoCapitalize="none"
            onChangeText={(text) => this.setState({ username: text })}
          />
          <TextField
            placeholder={this.props.intl.formatMessage({ id: 'LoginPage.password' })}
            value={this.state.password}
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(text) => this.setState({ password: text })}
          />
          <Button
            title={this.props.intl.formatMessage({ id: 'LoginPage.login' })}
            onPress={() => this.props.login(this.state.username, this.state.password)}
          />
          <View style={{ marginTop: MARGINS.MEDIUM2 }}>
            <TouchableOpacity onPress={() => Actions.forgotPassword()}>
              <Text style={{ textAlign: 'center', textDecorationLine: 'underline' }}>
                {this.props.intl.formatMessage({ id: 'LoginPage.forgotPassword' })}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: MARGINS.SMALL }}>
            <TouchableOpacity onPress={() => Actions.signup()}>
              <Text style={{ textAlign: 'center', textDecorationLine: 'underline' }}>
                {this.props.intl.formatMessage({ id: 'LoginPage.noAccount' })}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(injectIntl(Login));
