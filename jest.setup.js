import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-gesture-handler', () => {
  return {
    GestureHandlerRootView: ({ children }) => children,
  };
});

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  Reanimated.default.call = () => undefined;

  return Reanimated;
});
