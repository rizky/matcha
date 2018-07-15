import React from 'react';
import { View } from 'react-native';
import Nav from 'app/components/Nav';
import Layout from 'app/components/Layout/Basic';

const App = () => (
  <Layout>
    <View style={{ flex: 1 }} />
    <Nav />
  </Layout>
);

export default App;
export { App };
