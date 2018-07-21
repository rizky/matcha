import React, { type Node } from 'react';
import { StatusBar, View } from 'react-native';
import Header from 'app/components/Header';
import Nav from 'app/components/Nav';

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
    <Nav />
  </View>
);

export default BasicLayout;
