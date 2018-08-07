import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { injectIntl } from 'react-intl';
import { COLORS, MARGINS, FONT_SIZES } from 'app/constants/design';
import { signUp } from 'app/pages/Auth/actions';

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
  signUp: Function,
};

type State = {
  email: string,
  firstName: string,
  lastName: string,
  password: string,
}

class Signup extends Component<Props, State> {
  state = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.intl.formatMessage({ id: 'SignupPage.title' })}</Text>
        <TextInput
          style={styles.testInput}
          placeholder={this.props.intl.formatMessage({ id: 'SignupPage.firstName' })}
          value={this.state.firstName}
          onChangeText={(text) => this.setState({ firstName: text })}
        />
        <TextInput
          style={styles.testInput}
          placeholder={this.props.intl.formatMessage({ id: 'SignupPage.lastName' })}
          value={this.state.lastName}
          onChangeText={(text) => this.setState({ lastName: text })}
        />
        <TextInput
          style={styles.testInput}
          placeholder={this.props.intl.formatMessage({ id: 'SignupPage.email' })}
          value={this.state.email}
          autoCapitalize="none"
          onChangeText={(text) => this.setState({ email: text })}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.testInput}
          placeholder={this.props.intl.formatMessage({ id: 'SignupPage.password' })}
          value={this.state.password}
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(text) => this.setState({ password: text })}
        />
        <Button
          title={this.props.intl.formatMessage({ id: 'SignupPage.signUp' })}
          onPress={() => this.props.signUp({
            activeAt: null,
            createdAt: null,
            dob: null,
            email: this.state.email,
            lat: 0,
            long: 0,
            name: this.state.firstName,
            password: this.state.password,
            picture: '',
            subscribed: false,
            username: this.state.lastName,
          })}
        />
      </View>
    );
  }
}

const mapDispatchToProps = {
  signUp,
};

export default connect(null, mapDispatchToProps)(injectIntl(Signup));
