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
import axios from 'axios';

type Props = {
    currentUser: UserType,
};

// eslint-disable-next-line max-len
const uri = 'https://api.intra.42.fr/oauth/authorize?client_id=c42500c79cf50e14075b01a612fb8d033bf05afb5047bdaa3a097ac15dcf6e40&scope=public%20forum%20projects%20profile%20elearning%20tig&redirect_uri=https%3A%2F%2Fus-central1-intra42-f046e.cloudfunctions.net%2Fintra42&response_type=code';

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
      await this.getToken(code);
      Actions.reset('root');
    }
  }

  getToken = async (code: string) => {
    try {
      const response = await axios.post(
        'https://api.intra.42.fr/oauth/token',
        {
          client_id: 'c42500c79cf50e14075b01a612fb8d033bf05afb5047bdaa3a097ac15dcf6e40',
          client_secret: '3bac53c2a1829bec749b813062f1fa347b574607b056c1e623ccefe27106f2f1',
          code,
          grant_type: 'authorization_code',
          redirect_uri: 'https://us-central1-intra42-f046e.cloudfunctions.net/intra42',
        },
      );
      const { data: { access_token: accessToken } } = response;
      console.log(accessToken);
      console.log(response);
    } catch (err) {
      console.error(err);
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
