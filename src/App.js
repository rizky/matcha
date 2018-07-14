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
import App from 'app/pages/App';
import { store, persistor } from '../configureStore'; //eslint-disable-line

addLocaleData(en);
const RouterWithRedux = connect()(Router);

const Application = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <IntlProvider locale="en" messages={messages.en} textComponent={Text}>
        <RouterWithRedux>
          <Scene key="root" hideNavBar>
            <Scene key="landing" component={Landing} />
            <Scene key="app" component={App} initial />
          </Scene>
        </RouterWithRedux>
      </IntlProvider>
    </PersistGate>
  </Provider>
);

export default Application;
