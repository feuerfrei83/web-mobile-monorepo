import { createWebpackConfig } from 'haul';
import path from 'path';

export default {
  webpack: (env, defaults) => {
    const config = createWebpackConfig({
      entry: `./index.js`,
      resolve: {
        alias: {
          'react-hot-loader': path.resolve(path.join(__dirname, './node_modules/react-hot-loader')),
          'react': path.resolve(path.join(__dirname, './node_modules/react')),
          'react-dom': path.resolve(path.join(__dirname, './node_modules/react-dom'))
        }
      }
    })(env);

    config.module.rules = [
      {
        test: /\.js?$/,
        loaders: ['babel-loader']
      },
      ...config.module.rules
    ];

    return config;
  }
};
