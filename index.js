/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

// const SHOW_STORYBOOK = process.env.SHOW_STORYBOOK === 'true';

// const _App = SHOW_STORYBOOK ? StoryBookApp : App;

AppRegistry.registerComponent(appName, () => App);
