import React from 'react';
import { View } from 'react-native';
import Footer from 'app/components/Footer';
import Layout from 'app/components/Layout/Basic';

const App = () => (
  <Layout>
    <View style={{ flex: 1 }} />
    <Footer />
  </Layout>
);

export default App;
export { App };
