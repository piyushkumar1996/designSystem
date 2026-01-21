/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require('path');

const config = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    check: false,
    reactDocgen: false,
  },
  babel: async (options) => {
    return {
      ...options,
      presets: [
        ['react-app', { runtime: 'automatic' }],
      ],
    };
  },
  webpackFinal: async (config) => {
    const srcPath = path.resolve(__dirname, '../src');
    
    // Ensure babel-loader processes all JS/JSX files in src
    config.module.rules.push({
      test: /\.(js|jsx|mjs)$/,
      include: srcPath,
      exclude: /node_modules/,
      use: {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            ['react-app', { runtime: 'automatic' }],
          ],
          cacheDirectory: true,
        },
      },
    });

    return config;
  },
};
export default config;
