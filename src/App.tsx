/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { STORYBOOK_ENABLED } from '@env';
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <NewAppScreen templateFileName="App.tsx" />
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

let AppEntryPoint = App;

if (STORYBOOK_ENABLED === 'true') {
  // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  AppEntryPoint = require('../.rnstorybook').default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppEntryPoint;
