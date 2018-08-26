import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { injectIntl } from 'react-intl';
import { MARGINS, FONT_SIZES, FIELD_HEIGHT } from 'src/constants/design';
import { signUp } from 'src/pages/Auth/actions';
import Layout from 'src/components/Layout/Basic';
import TextField from 'src/primitives/TextField';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 7 * FIELD_HEIGHT, // eslint-disable-line
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
  signUp: Function,
};

type State = {
  email: string,
  name: string,
  password: string,
  username: string,
}

class Settings extends Component<Props, State> {
  state = {
    email: '',
    name: '',
    password: '',
    username: '',
  }

  render() {
    return (
      <Layout>
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.intl.formatMessage({ id: 'SettingsPage.title' })}</Text>
          <TextField
            placeholder={this.props.intl.formatMessage({ id: 'SettingsPage.username' })}
            title={this.props.intl.formatMessage({ id: 'SettingsPage.username' })}
            value={this.state.username}
            autoCapitalize="none"
            onChangeText={(text) => this.setState({ username: text })}
          />
          <TextField
            placeholder={this.props.intl.formatMessage({ id: 'SettingsPage.name' })}
            value={this.state.name}
            onChangeText={(text) => this.setState({ name: text })}
          />
          <TextField
            placeholder={this.props.intl.formatMessage({ id: 'SettingsPage.email' })}
            value={this.state.email}
            autoCapitalize="none"
            onChangeText={(text) => this.setState({ email: text })}
            keyboardType="email-address"
          />
          <TextField
            placeholder={this.props.intl.formatMessage({ id: 'SettingsPage.password' })}
            value={this.state.password}
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(text) => this.setState({ password: text })}
          />
          <Button
            title={this.props.intl.formatMessage({ id: 'SettingsPage.signUp' })}
            onPress={() => this.props.signUp({
              activeAt: null,
              createdAt: null,
              dob: null,
              email: this.state.email,
              lat: 0,
              long: 0,
              name: this.state.name,
              password: this.state.password,
              picture: '',
              subscribed: false,
              username: this.state.username,
            })}
          />
        </View>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  signUp,
};

export default connect(null, mapDispatchToProps)(injectIntl(Settings));
