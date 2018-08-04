import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { injectIntl } from 'react-intl';
import { Actions } from 'react-native-router-flux';
import { COLORS, MARGINS, FONT_SIZES } from 'app/constants/design';

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
    position: 'absolute',
    top: MARGINS.EXTREME,
  },
});

type Props = {
  intl: any,
};

type State = {
  emailAddress: string,
  firstName: string,
  lastName: string,
  password: string,
}

class Signup extends Component<Props, State> {
  state = {
    emailAddress: '',
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
          placeholder={this.props.intl.formatMessage({ id: 'SignupPage.emailAddress' })}
          value={this.state.emailAddress}
          autoCapitalize="none"
          onChangeText={(text) => this.setState({ emailAddress: text })}
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
          onPress={() => Actions.push('feed')}
        />
      </View>
    );
  }
}

export default injectIntl(Signup);
export { Signup };
