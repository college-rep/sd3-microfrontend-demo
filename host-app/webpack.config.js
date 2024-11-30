const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  output: {
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'hostApp',
      remotes: {
        'microfrontendApp': 'microfrontendApp@http://localhost:4201/remoteEntry.js',
        // We'll add remote microfrontends here
        // Example: 'remoteApp': 'remoteApp@http://localhost:4201/remoteEntry.js',
      },
    }),
  ],
};