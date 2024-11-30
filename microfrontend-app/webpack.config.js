const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  output: {
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'microfrontendApp',
      filename: 'remoteEntry.js',
      exposes: {
        // Expose modules or components for the host to load
        './FeatureComponent': './src/app/feature/feature.component.ts',
      },
      shared: {
        '@angular/core': { singleton: true },
        '@angular/common': { singleton: true },
        '@angular/router': { singleton: true },
      },
    }),
  ],
};
