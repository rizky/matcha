import React, { type Node } from 'react';
import { StatusBar, View } from 'react-native';
import { injectIntl } from 'react-intl';
import Nav from 'app/components/Nav';

type Props = {|
  children: Node,
|};

const BasicLayout = (props: Props) => (
  <View style={{ flex: 1 }}>
    <StatusBar />
    <Nav />
    <View style={{ flex: 1 }}>
      {props.children}
    </View>
  </View>
);

export default injectIntl(BasicLayout);
export { BasicLayout };
