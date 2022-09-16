const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [
    // '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    // '@storybook/preset-scss',
    'storybook-addon-pseudo-states',
  ],
  babel: async (options) => {
    // emotion用の注入設定
    // preset-react ローダーを取得してくる
    const presetReact = options.presets.find((p) => /preset-react/.test(p[0]));
    // preset-react　ローダのオプションを設定
    presetReact[1] = {
      ...presetReact[1],
      runtime: 'automatic',
      importSource: '@emotion/react',
    };
    // Emotionプラグインを追加
    options.plugins.push(require.resolve('@emotion/babel-plugin'));

    return options;
  },
  webpackFinal(config) {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src')];
    config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin()];

    // Sass & CSS Modules
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
            },
          },
        },
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
