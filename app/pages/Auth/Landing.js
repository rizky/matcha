import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { injectIntl } from 'react-intl';
import { Actions } from 'react-native-router-flux';
import { COLORS } from 'app/constants/design';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
    justifyContent: 'center',
  },
});

type Props = {
    intl: any,
};

const Landing = (props: Props) => (
  <View style={styles.container}>
    <Text>{props.intl.formatMessage({ id: 'LandingPage.welcome' })}</Text>
    <Button onPress={() => Actions.push('app')} title={props.intl.formatMessage({ id: 'LandingPage.login' })} />
    <Button onPress={() => {}} title={props.intl.formatMessage({ id: 'LandingPage.signUp' })} />
  </View>
);

export default injectIntl(Landing);
