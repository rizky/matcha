import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { injectIntl } from 'react-intl';
import { MARGINS, FONT_SIZES, FIELD_HEIGHT } from 'app/constants/design';
import { confirmation } from 'app/pages/Auth/actions';
import Layout from 'app/components/Layout/Basic';
import { Actions } from 'react-native-router-flux';
import TextField from 'app/primitives/TextField';

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
  confirmation: Function,
};

type State = {
  email: string,
  token: string,
}

class Confirmation extends Component<Props, State> {
  state = {
    email: '',
    token: '',
  }

  render() {
    return (
      <Layout noTabs>
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.intl.formatMessage({ id: 'ConfirmationPage.title' })}</Text>
          <TextField
            placeholder={this.props.intl.formatMessage({ id: 'ConfirmationPage.email' })}
            value={this.state.email}
            autoCapitalize="none"
            onChangeText={(email) => this.setState({ email })}
          />
          <TextField
            placeholder={this.props.intl.formatMessage({ id: 'ConfirmationPage.token' })}
            value={this.state.token}
            autoCapitalize="none"
            onChangeText={(token) => this.setState({ token })}
          />
          <Button
            title={this.props.intl.formatMessage({ id: 'ConfirmationPage.button' })}
            onPress={() => this.props.confirmation(this.state.email, this.state.token)}
          />
          <View>
            <TouchableOpacity onPress={() => {}}>
              <Text style={{ textAlign: 'center', textDecorationLine: 'underline' }}>
                {this.props.intl.formatMessage({ id: 'ConfirmationPage.resend' })}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => Actions.signup()}>
              <Text style={{ textAlign: 'center', textDecorationLine: 'underline' }}>
                {this.props.intl.formatMessage({ id: 'ConfirmationPage.signup' })}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  confirmation,
};

export default connect(null, mapDispatchToProps)(injectIntl(Confirmation));
