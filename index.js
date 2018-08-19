import { AppRegistry, YellowBox } from 'react-native';
import App from './app/App'; //eslint-disable-line

YellowBox.ignoreWarnings([
  'Warning: Failed prop type: Invalid prop `source` supplied to `Image`',
  'Module RCTImageLoader',
]);
AppRegistry.registerComponent('matcha', () => App);
