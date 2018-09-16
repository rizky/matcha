// @flow
import React, { type Node } from 'react';
import { connect } from 'react-redux';
import { StatusBar, View } from 'react-native';
import Nav from 'src/components/Nav';
import Footer from 'src/components/Footer';
import Toast from 'src/components/Layout/Toast';
import Loader from 'src/components/Layout/Loader';
import { selectToastIsShow, selectToastMessage, selectIsLoading } from 'src/components/Layout/selector';
import { HEADER_HEIGHT } from 'src/constants/design';

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
    <View
      style={
        [
          {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            marginTop: HEADER_HEIGHT,
          },
          props.style,
        ]
      }
    >
      {props.children}
    </View>
    <Footer />
    {!props.noTabs && <Nav />}
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
