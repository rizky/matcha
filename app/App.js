import React from 'react';
import 'intl';
import { Text } from 'react-native';
// $FlowFixMe
import { Router, Scene } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
// $FlowFixMe
import { PersistGate } from 'redux-persist/integration/react';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/fr';
import messages from 'app/translation/message';
import Landing from 'app/pages/Auth/Landing';
import Feed from 'app/pages/Feed';
import Discover from 'app/pages/Discover';
import Messages from 'app/pages/Messages';
import Conversation from 'app/pages/Messages/Conversation';
import Profile from 'app/pages/Profile';
import Signup from 'app/pages/Auth/Signup';
import Login from 'app/pages/Auth/Login';
import Confirmation from 'app/pages/Auth/Confirmation';

import { store, persistor } from '../configureStore'; //eslint-disable-line


addLocaleData(en);
const RouterWithRedux = connect()(Router);

const Application = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <IntlProvider locale="en" messages={messages.en} textComponent={Text}>
        <RouterWithRedux>
          <Scene key="root" hideNavBar>
            <Scene key="landing" component={Landing} initial />
            <Scene key="signup" component={Signup} />
            <Scene key="confirmation" component={Confirmation} />
            <Scene key="login" component={Login} />
            <Scene key="feed" component={Feed} />
            <Scene key="discover" component={Discover} />
            <Scene key="messages" component={Messages} />
            <Scene key="conversation" component={Conversation} />
            <Scene key="profile" component={Profile} />
          </Scene>
        </RouterWithRedux>
      </IntlProvider>
    </PersistGate>
  </Provider>
);

export default Application;
