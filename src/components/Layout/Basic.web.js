import React, { type Node } from 'react';
import { StatusBar, View } from 'react-native';
import Nav from 'app/components/Nav';
import Footer from 'app/components/Footer';

type Props = {|
  children: Node,
  style?: Object,
|};

const BasicLayout = (props: Props) => (
  <View style={{ flex: 1 }}>
    <StatusBar />
    <Nav />
    <View style={[{ flex: 1 }, props.style]}>
      {props.children}
    </View>
    <Footer />
  </View>
);

BasicLayout.defaultProps = {
  style: {},
};

export default BasicLayout;
