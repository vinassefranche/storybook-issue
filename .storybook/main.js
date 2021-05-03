module.exports = {
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport/register',
  ],
  features: {
    postcss: false,
  },
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
