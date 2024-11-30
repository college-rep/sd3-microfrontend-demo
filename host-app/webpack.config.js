const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'hostApp',
      remotes: {
        'microfrontendApp': 'microfrontendApp@http://localhost:4201/remoteEntry.js', // URL of the microfrontend's remoteEntry.js
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' },
        '@angular/common': { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' },
        '@angular/router': { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' },
      },
    }),
  ],
};
