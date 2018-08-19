import React, { type Node } from 'react';
import { connect } from 'react-redux';
import { StatusBar, View, KeyboardAvoidingView } from 'react-native';
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import Toast from 'src/components/Layout/Toast';
import Loader from 'src/components/Layout/Loader';
import { selectToastIsShow, selectToastMessage, selectIsLoading } from 'src/components/Layout/selector';
import { HEADER_HEIGHT } from 'src/constants/design';

type Props = {|
  children: Node,
  hasBack?: boolean,
  headerActions?: Array<Node>,
  isLoading: boolean,
  noTabs?: boolean,
  title?: string,
|};

const Layout = (props: Props) => (
  <View style={{ flex: 1 }}>
    <StatusBar />
    <Header
      hasBack={props.hasBack}
      title={props.title}
      actions={props.headerActions}
    />
    <KeyboardAvoidingView
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        marginTop: HEADER_HEIGHT,
      }}
      behavior="padding"
    >
      {props.children}
    </KeyboardAvoidingView>
    { !props.noTabs && <Nav />}
    <Toast
      message={props.toastMessage}
      isShow={props.toastIsShow}
    />
    <Loader isLoading={props.isLoading} />
  </View>
);

Layout.defaultProps = {
  hasBack: false,
  headerActions: [],
  noTabs: false,
  title: undefined,
};

const mapStateToProps = (state) => ({
  isLoading: selectIsLoading(state),
  toastIsShow: selectToastIsShow(state),
  toastMessage: selectToastMessage(state),
});

export default connect(mapStateToProps)(Layout);
