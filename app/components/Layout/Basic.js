import React, { type Node } from 'react';
import { connect } from 'react-redux';
import { StatusBar, View } from 'react-native';
import Header from 'app/components/Header';
import Nav from 'app/components/Nav';
import Toast from 'app/components/Layout/Toast';
import { selectToastIsShow, selectToastMessage } from 'app/components/Layout/selector';

type Props = {|
  children: Node,
  noTabs?: boolean,
  hasBack?: boolean,
  title?: string,
  headerActions?: Array<Node>,
|};

const Layout = (props: Props) => (
  <View style={{ flex: 1 }}>
    <StatusBar />
    <Header hasBack={props.hasBack} title={props.title} actions={props.headerActions} />
    <View style={{ flex: 1 }}>
      {props.children}
    </View>
    { !props.noTabs && <Nav />}
    <Toast
      message={props.toastMessage}
      isShow={props.toastIsShow}
    />
  </View>
);

Layout.defaultProps = {
  hasBack: false,
  headerActions: [],
  noTabs: false,
  title: undefined,
};

const mapStateToProps = (state) => ({
  toastIsShow: selectToastIsShow(state),
  toastMessage: selectToastMessage(state),
});

export default connect(mapStateToProps)(Layout);
