import React, { type Node } from 'react';
import { StatusBar, View, ScrollView } from 'react-native';
import Header from 'app/components/Header';
import Nav from 'app/components/Nav';

type Props = {|
  children: Node,
|};

const BasicLayout = (props: Props) => (
  <View style={{ flex: 1 }}>
    <StatusBar />
    <Header />
    <ScrollView style={{ flex: 1 }}>
      {props.children}
    </ScrollView>
    <Nav />
  </View>
);

export default BasicLayout;
