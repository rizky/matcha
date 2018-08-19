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
import messages from 'src/translation/message';
import Landing from 'src/pages/Auth/Landing';
import Feed from 'src/pages/Feed';
import Discover from 'src/pages/Discover';
import Messages from 'src/pages/Messages';
import Conversation from 'src/pages/Messages/Conversation';
import Profile from 'src/pages/Profile';
import Signup from 'src/pages/Auth/Signup';
import Login from 'src/pages/Auth/Login';
import Confirmation from 'src/pages/Auth/Confirmation';
import ForgotPassword from 'src/pages/Auth/ForgotPassword';
import ChangePassword from 'src/pages/Auth/ChangePassword';

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
            <Scene key="forgotPassword" component={ForgotPassword} />
            <Scene key="changePassword" component={ChangePassword} />
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
