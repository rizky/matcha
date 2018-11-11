import { AppRegistry, YellowBox } from 'react-native';
import App from './src/App'; //eslint-disable-line

YellowBox.ignoreWarnings([
  'Warning: Failed prop type: Invalid prop',
  'Module RCTImageLoader',
  'Warning: isMounted',
]);
AppRegistry.registerComponent('matcha', () => App);
