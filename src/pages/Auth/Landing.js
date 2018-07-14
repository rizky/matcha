import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { injectIntl } from 'react-intl';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
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
  </View>
);

export default injectIntl(Landing);
export { Landing };
