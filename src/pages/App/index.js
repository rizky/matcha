import React from 'react';
import { Text, View } from 'react-native';
import Footer from 'app/components/Footer';
import Layout from 'app/components/Layout/Basic';

const App = () => (
  <Layout>
    <View style={{ flex: 1 }}>
      <Text>Test</Text>
    </View>
    <Footer />
  </Layout>
);

export default App;
export { App };
