import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import webpackConfig from './webpack.config.babel';

import config from './config'


webpackConfig.devtool = 'inline-source-map';

webpackConfig.plugins.push(
    new CleanWebpackPlugin([config.dirs.dest])
);

// Copy files from assets/images to docs/assets/images
webpackConfig.plugins.push(
    new CopyWebpackPlugin([
        { from: 'assets/img', to: 'assets/img' }
    ])
);

webpackConfig.output = {
    path: path.join(__dirname, config.dirs.dest),
    filename: 'assets/js/[name].[hash].js'
};

export default webpackConfig;
