import React, { type Node } from 'react';
import { connect } from 'react-redux';
import { StatusBar, View } from 'react-native';
import Nav from 'app/components/Nav';
import Footer from 'app/components/Footer';
import Toast from 'app/components/Layout/Toast';
import Loader from 'app/components/Layout/Loader';
import { selectToastIsShow, selectToastMessage, selectIsLoading } from 'app/components/Layout/selector';

type Props = {|
  children: Node,
  isLoading: boolean,
  noTabs?: boolean,
  style?: Object,
  toastIsShow: boolean,
  toastMessage: string,
|};

const Layout = (props: Props) => (
  <View style={{ flex: 1 }}>
    <StatusBar />
    {!props.noTabs && <Nav />}
    <View style={[{ alignItems: 'center', flex: 1, justifyContent: 'center' }, props.style]}>
      {props.children}
    </View>
    <Footer />
    <Toast
      message={props.toastMessage}
      isShow={props.toastIsShow}
    />
    <Loader isLoading={props.isLoading} />
  </View>
);

Layout.defaultProps = {
  noTabs: false,
  style: {},
};

const mapStateToProps = (state) => ({
  isLoading: selectIsLoading(state),
  toastIsShow: selectToastIsShow(state),
  toastMessage: selectToastMessage(state),
});

export default connect(mapStateToProps)(Layout);
