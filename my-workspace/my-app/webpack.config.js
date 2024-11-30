const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { NxReactWebpackPlugin } = require('@nx/react/webpack-plugin');
const { join } = require('path');
const { merge } = require('webpack-merge');
const nxWebpackConfig = require('@nrwl/react/plugins/webpack');

module.exports = (config, context) => {
  return merge(config, {
    output: {
      path: join(__dirname, '../dist/my-app'),
    },
    devServer: {
      port: 4200,
      historyApiFallback: {
        index: '/index.html', // Ensure the fallback to index.html
        disableDotRule: true,
        htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
      },
    },
    plugins: [
      new NxAppWebpackPlugin({
        tsConfig: './tsconfig.app.json', // Ensure this file exists and is correctly configured
        compiler: 'babel', // Babel compiler for JSX/React support
        main: './src/main.tsx', // Ensure main entry file exists
        index: './src/index.html', // Ensure the HTML template is available
        baseHref: '/',
        assets: ['./src/favicon.ico', './src/assets'], // Ensure assets are correctly referenced
        styles: ['./src/styles.css'], // Ensure styles are loaded correctly
        outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none', // Enable hashing in production
        optimization: process.env['NODE_ENV'] === 'production', // Enable optimization for production
      }),
      new NxReactWebpackPlugin({
        // svgr: false, // Uncomment if you don't want to use SVGR (SVG as React components)
      }),
    ],
  });
};
