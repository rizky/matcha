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
import { getToken } from 'src/services/oAuth42';
import { authorizeUrl } from 'src/services/oAuth42/config';

type Props = {
    currentUser: UserType,
};

const { width } = Dimensions.get('window');

class Landing extends Component<Props> {
  componentWillMount() {
    if (this.props.currentUser !== undefined) {
      Actions.replace('feed');
    }
  }

  onNavigationStateChange = async (webViewState) => {
    const { hostname, query } = url.parse(webViewState.url);
    if (hostname === 'us-central1-intra42-f046e.cloudfunctions.net') {
      const code = new URLSearchParams(query).get('code');
      await getToken(code);
      Actions.reset('root');
    }
  }

  render() {
    return (
      <Layout noTabs>
        <WebView
          source={{ uri: authorizeUrl }}
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
