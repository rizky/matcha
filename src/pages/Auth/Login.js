import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { injectIntl } from 'react-intl';
import { MARGINS, FONT_SIZES, FIELD_HEIGHT } from 'src/constants/design';
import { login } from 'src/pages/Auth/actions';
import Layout from 'src/components/Layout/Basic';
import { Actions } from 'react-native-router-flux';
import TextField from 'src/primitives/TextField';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 5 * FIELD_HEIGHT, // eslint-disable-line
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
          <View>
            <TouchableOpacity onPress={() => Actions.forgotPassword()}>
              <Text style={{ textAlign: 'center', textDecorationLine: 'underline' }}>
                {this.props.intl.formatMessage({ id: 'LoginPage.forgotPassword' })}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
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
