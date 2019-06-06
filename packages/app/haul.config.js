import { createWebpackConfig } from 'haul';
import path from 'path';

export default {
  webpack: (env, defaults) => {
    const config = createWebpackConfig({
      entry: `./index.js`
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
