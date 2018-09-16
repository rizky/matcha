import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import { injectIntl } from 'react-intl';
import { MARGINS, FONT_SIZES } from 'src/constants/design';
import { signUp } from 'src/pages/Auth/actions';
import Layout from 'src/components/Layout/Basic';
import TextField from 'src/primitives/TextField';
import Checkbox from 'src/primitives/Checkbox';
import RadioButton from 'src/primitives/RadioButton';
import { selectCurrentUser } from 'src/pages/Auth/selector';

const styles = StyleSheet.create({
  container: {
    width: '80%',
  },
  title: {
    fontSize: FONT_SIZES.BIG,
    marginVertical: MARGINS.BIG,
  },
});

type Props = {
  currentUser: UserType,
  intl: any,
  signUp: Function,
};

type State = {
  bio: string,
  dob: string,
  email: string,
  gender: string,
  interests: string,
  location: string,
  name: string,
  password: string,
  photos: string,
  sexPreferences: string,
  username: string,
}

class Settings extends Component<Props, State> {
  state = {
    bio: '',
    dob: '',
    email: this.props.currentUser.email,
    gender: '',
    interests: '',
    location: '',
    name: this.props.currentUser.name,
    password: '',
    photos: '',
    sexPreferences: '',
    username: this.props.currentUser.username,
  }

  render() {
    return (
      <Layout>
        <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
          <Text style={styles.title}>{this.props.intl.formatMessage({ id: 'SettingsPage.profileTitle' })}</Text>
          <TextField
            placeholder={this.props.intl.formatMessage({ id: 'SettingsPage.bio' })}
            value={this.state.bio}
            autoCapitalize="none"
            onChangeText={(bio) => this.setState({ bio })}
            keyboardType="email-address"
          />
          <TextField
            placeholder={this.props.intl.formatMessage({ id: 'SettingsPage.interests' })}
            value={this.state.interests}
            onChangeText={(interests) => this.setState({ interests })}
          />
          <TextField
            placeholder={this.props.intl.formatMessage({ id: 'SettingsPage.location' })}
            value={this.state.location}
            autoCapitalize="none"
            onChangeText={(location) => this.setState({ location })}
          />
          <TextField
            placeholder={this.props.intl.formatMessage({ id: 'SettingsPage.dob' })}
            value={this.state.dob}
            autoCapitalize="none"
            onChangeText={(dob) => this.setState({ dob })}
          />
          <TextField
            placeholder={this.props.intl.formatMessage({ id: 'SettingsPage.gender' })}
            value={this.state.gender}
            autoCapitalize="none"
            onChangeText={(gender) => this.setState({ gender })}
          />
          <RadioButton
            choices={[{ id: '0', value: 'Male' }, { id: '1', value: 'Female' }]}
            onChange={(gender) => this.setState({ gender })}
            value={null}
          />
          <TextField
            placeholder={this.props.intl.formatMessage({ id: 'SettingsPage.sexPreferences' })}
            value={this.state.sexPreferences}
            onChangeText={(sexPreferences) => this.setState({ sexPreferences })}
          />
          <Checkbox
            choices={[{ id: '0', value: 'Male' }, { id: '1', value: 'Female' }]}
            onChange={(sexPreferences) => this.setState({ sexPreferences })}
            value={null}
          />
          <TextField
            placeholder={this.props.intl.formatMessage({ id: 'SettingsPage.photos' })}
            value={this.state.photos}
            autoCapitalize="none"
            onChangeText={(photos) => this.setState({ photos })}
          />
          <Text style={styles.title}>{this.props.intl.formatMessage({ id: 'SettingsPage.accountTitle' })}</Text>
          <TextField
            placeholder={this.props.intl.formatMessage({ id: 'SettingsPage.username' })}
            value={this.state.username}
            autoCapitalize="none"
            onChangeText={(username) => this.setState({ username })}
          />
          <TextField
            placeholder={this.props.intl.formatMessage({ id: 'SettingsPage.name' })}
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
          />
          <TextField
            placeholder={this.props.intl.formatMessage({ id: 'SettingsPage.email' })}
            value={this.state.email}
            autoCapitalize="none"
            onChangeText={(email) => this.setState({ email })}
            keyboardType="email-address"
          />
          <TextField
            placeholder={this.props.intl.formatMessage({ id: 'SettingsPage.password' })}
            value={this.state.password}
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(password) => this.setState({ password })}
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
        </ScrollView>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = {
  signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Settings));
