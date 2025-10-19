const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');
const withStorybook = require('@storybook/react-native/metro/withStorybook');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);

const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve(
      'react-native-svg-transformer/react-native',
    ),
    unstable_allowRequireContext: true,
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

const finalConfig = mergeConfig(defaultConfig, config);

module.exports = wrapWithReanimatedMetroConfig(
  withStorybook(finalConfig, {
    enabled: process.env.STORYBOOK_ENABLED === 'true',
    configPath: path.resolve(__dirname, './.rnstorybook'),
    onDisabledRemoveStorybook: true,
  }),
);
