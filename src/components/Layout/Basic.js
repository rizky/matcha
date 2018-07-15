import React, { type Node } from 'react';
import { StatusBar, View } from 'react-native';
import { injectIntl } from 'react-intl';
import Header from 'app/components/Header';

type Props = {|
  children: Node,
|};

const BasicLayout = (props: Props) => (
  <View style={{ flex: 1 }}>
    <StatusBar />
    <Header />
    <View style={{ flex: 1 }}>
      {props.children}
    </View>
  </View>
);

export default injectIntl(BasicLayout);
export { BasicLayout };
