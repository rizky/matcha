import React, { type Node } from 'react';
import { connect } from 'react-redux';
import { StatusBar, View } from 'react-native';
import Nav from 'app/components/Nav';
import Footer from 'app/components/Footer';
import Toast from 'app/components/Layout/Toast';
import { selectToastIsShow, selectToastMessage } from 'app/components/Layout/selector';

type Props = {|
  children: Node,
  noTabs?: boolean,
  style?: Object,
  toastIsShow: boolean,
  toastMessage: string,
|};

const Layout = (props: Props) => (
  <View style={{ flex: 1 }}>
    <StatusBar />
    {!props.noTabs && <Nav />}
    <View style={[{ flex: 1 }, props.style]}>
      {props.children}
    </View>
    <Toast
      message={props.toastMessage}
      isShow={props.toastIsShow}
    />
    <Footer />
  </View>
);

Layout.defaultProps = {
  noTabs: false,
  style: {},
};

const mapStateToProps = (state) => ({
  toastIsShow: selectToastIsShow(state),
  toastMessage: selectToastMessage(state),
});

export default connect(mapStateToProps)(Layout);
