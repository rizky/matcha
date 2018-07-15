import React from 'react';
import { View, Text } from 'react-native';
import Layout from 'app/components/Layout/Basic';
import { injectIntl } from 'react-intl';

type Props = {
  intl: any,
};

const Discover = (props: Props) => (
  <Layout>
    <Text>{props.intl.formatMessage({ id: 'Nav.discover' })}</Text>
    <View style={{ flex: 1 }} />
  </Layout>
);

export default injectIntl(Discover);
export { Discover };
