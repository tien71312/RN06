/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App'; 
import Login from './screens/login/Login';
import DataBiding from './screens/contact/DataBiding';
import Contact from './screens/contact/Contact';
import Emoji from './screens/emoji/Emoji';
import Newfeed from './screens/newfeed/Newfeed';
import Btnewfeed from './screens/btnewfeed/Btnewfeed';
import Btzalo from './screens/btzalo/Btzalo';
import {name as appName} from './app.json';
 
AppRegistry.registerComponent(appName, () => Btzalo);
