import React from 'react';
import { View, Text } from 'react-native';
import Layout from 'app/components/Layout/Basic';
import { injectIntl } from 'react-intl';

type Props = {
  intl: any,
};

const Messages = (props: Props) => (
  <Layout>
    <Text>{props.intl.formatMessage({ id: 'Nav.messages' })}</Text>
    <View style={{ flex: 1 }} />
  </Layout>
);

export default injectIntl(Messages);
export { Messages };
