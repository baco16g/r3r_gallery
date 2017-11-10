import webpackConfig from './webpack.config.babel';

import config from './config'

webpackConfig.devtool = '#inline-source-map';

webpackConfig.output = {
    // pathinfo: true,
    // publicPath: '/',
    filename: 'assets/js/[name].[hash].js'
};

export default webpackConfig;
