import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { injectIntl } from 'react-intl';
import { COLORS, MARGINS, FONT_SIZES } from 'app/constants/design';
import { login } from 'app/pages/Auth/actions';
import Layout from 'app/components/Layout/Basic';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
    justifyContent: 'center',
  },
  testInput: {
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
          <TextInput
            style={styles.testInput}
            placeholder={this.props.intl.formatMessage({ id: 'LoginPage.username' })}
            value={this.state.username}
            autoCapitalize="none"
            onChangeText={(text) => this.setState({ username: text })}
          />
          <TextInput
            style={styles.testInput}
            placeholder={this.props.intl.formatMessage({ id: 'LoginPage.password' })}
            value={this.state.password}
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(text) => this.setState({ password: text })}
          />
          <Button
            title={this.props.intl.formatMessage({ id: 'LoginPage.login' })}
            onPress={() => this.props.login({
              password: this.state.password,
              username: this.state.username,
            })}
          />
        </View>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(injectIntl(Login));
