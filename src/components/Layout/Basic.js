import React, { type Node } from 'react';
import { StatusBar, View } from 'react-native';
import Header from 'app/components/Header';
import Nav from 'app/components/Nav';

type Props = {|
  children: Node,
  noTabs?: boolean,
  hasBack?: boolean,
  title?: string,
  headerActions?: Array<Node>,
|};

const BasicLayout = (props: Props) => (
  <View style={{ flex: 1 }}>
    <StatusBar />
    <Header hasBack={props.hasBack} title={props.title} actions={props.headerActions} />
    <View style={{ flex: 1 }}>
      {props.children}
    </View>
    { !props.noTabs && <Nav />}
  </View>
);

BasicLayout.defaultProps = {
  hasBack: false,
  headerActions: [],
  noTabs: false,
  title: undefined,
};

export default BasicLayout;
