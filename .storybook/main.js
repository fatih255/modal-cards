const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const nextConfig = require('../next.config');

module.exports = {
    "stories": [
        "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-essentials",
        "addon-redux",
        {
            name: "storybook-addon-sass-postcss",
            options: {
                loadSassAfterPostCSS: true,
            },
        },

    ],
    staticDirs: ["../public"],
    "core": {
        "builder": "webpack5"
    },
    webpackFinal: async (config, { configType }) => {
        config.resolve.plugins = [new TsconfigPathsPlugin()];
        const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
        fileLoaderRule.exclude = /\.svg$/;
        config.module.rules.push({
            test: /\.svg$/,
            enforce: 'pre',
            loader: require.resolve('@svgr/webpack'),
        });

        return config;
    }
}
