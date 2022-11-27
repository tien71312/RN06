/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LifeCycle from './screens/lifecycle/LifeCycle'
import DemoFetch from './screens/lifecycle/DemoFetch';
AppRegistry.registerComponent(appName, () => DemoFetch);
