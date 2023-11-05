/**
 * @format
 */

import 'react-native-get-random-values';
import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

LogBox.ignoreLogs([
  'BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values.',
]); // Ignore log notification by message

AppRegistry.registerComponent(appName, () => App);
