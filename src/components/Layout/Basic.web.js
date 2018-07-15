import React, { type Node } from 'react';
import { StatusBar, View } from 'react-native';
import Nav from 'app/components/Nav';
import Footer from 'app/components/Footer';

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
    <Footer />
  </View>
);

export default BasicLayout;
