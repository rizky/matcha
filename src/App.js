// @flow
import React from 'react';
import 'intl';
import { Text } from 'react-native';
import { Router, Scene, Modal, Stack } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
// $FlowFixMe
import { PersistGate } from 'redux-persist/integration/react';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/fr';
import messages from 'src/translation/message';
import Landing from 'src/pages/Auth/Landing';
import OAuth from 'src/pages/Auth/OAuth';
import Profile from 'src/pages/Profile';
import Settings from 'src/pages/Profile/Settings';
import { store, persistor } from 'src/configureStore';

addLocaleData(en);
const RouterWithRedux = connect()(Router);

const Application = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <IntlProvider locale="en" messages={messages.en} textComponent={Text}>
        <RouterWithRedux>
          <Modal key="modal" hideNavBar>
            <Stack key="root" hideNavBar>
              <Scene key="landing" component={Landing} initial />
              <Scene key="profile" component={Profile} />
              <Scene key="settings" component={Settings} />
            </Stack>
            <Stack key="login" hideNavBar>
              <Scene key="oauth" component={OAuth} />
            </Stack>
          </Modal>
        </RouterWithRedux>
      </IntlProvider>
    </PersistGate>
  </Provider>
);

export default Application;
