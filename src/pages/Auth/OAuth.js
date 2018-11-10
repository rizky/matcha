// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import { injectIntl } from 'react-intl';
import { Actions } from 'react-native-router-flux';
import { selectCurrentUser } from 'src/pages/Auth/selector';
import Layout from 'src/components/Layout/Basic';
import { WebView } from 'react-native-webview';
import url from 'url';
import URLSearchParams from 'url-search-params';

type Props = {
    currentUser: UserType,
};

// eslint-disable-next-line max-len
const uri = 'https://api.intra.42.fr/oauth/authorize?client_id=c42500c79cf50e14075b01a612fb8d033bf05afb5047bdaa3a097ac15dcf6e40&redirect_uri=https%3A%2F%2Fus-central1-intra42-f046e.cloudfunctions.net%2Fintra42&response_type=code';

const { width } = Dimensions.get('window');

class Landing extends Component<Props> {
  componentWillMount() {
    if (this.props.currentUser !== undefined) {
      Actions.replace('feed');
    }
  }

  onNavigationStateChange = (webViewState) => {
    const { hostname, query } = url.parse(webViewState.url);
    if (hostname === 'us-central1-intra42-f046e.cloudfunctions.net') {
      const code = new URLSearchParams(query).get('code');
      console.log(code);
      Actions.reset('root');
    }
  }

  render() {
    return (
      <Layout noTabs>
        <WebView
          source={{ uri }}
          startInLoadingState
          style={{ flex: 1, width }}
          onNavigationStateChange={this.onNavigationStateChange}
        />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(injectIntl(Landing));
