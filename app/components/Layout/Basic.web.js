import React, { type Node } from 'react';
import { StatusBar, View } from 'react-native';
import Nav from 'app/components/Nav';
import Footer from 'app/components/Footer';

type Props = {|
  children: Node,
  noTabs?: boolean,
  style?: Object,
|};

const BasicLayout = (props: Props) => (
  <View style={{ flex: 1 }}>
    <StatusBar />
    {!props.noTabs && <Nav />}
    <View style={[{ flex: 1 }, props.style]}>
      {props.children}
    </View>
    <Footer />
  </View>
);

BasicLayout.defaultProps = {
  noTabs: false,
  style: {},
};

export default BasicLayout;
