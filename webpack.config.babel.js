import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

import config from './config'

export default {
	devtool: 'inline-source-map',

	context: path.join(__dirname, config.dirs.src),

	entry: {
		'pages/infinitedTube': path.resolve(__dirname, `${config.dirs.src}/app/infinitedTube/index.js`),
		'pages/timeMachine': path.resolve(__dirname, `${config.dirs.src}/app/timeMachine/index.js`),
		'pages/ripple': path.resolve(__dirname, `${config.dirs.src}/app/ripple/index.js`),
		'pages/ripple-clickable': path.resolve(__dirname, `${config.dirs.src}/app/ripple-clickable/index.js`),
		'vendor': ['three'],
	},

	// output: {
	// 	path: path.join(__dirname, `${config.dirs.dest}/assets/js/pages/`),
	// 	filename: '[name].js',
	// },

	devServer: {
		inline: true,
		hot: true,
		contentBase: config.dirs.dest,
	},

	resolve: {
		extensions: ['.js', '.jsx']
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			// {
			// 	test: /\.(glsl|frag|vert)$/,
			// 	exclude: /node_modules/,
			// 	loader: 'glslify-import-loader'
			// },
			// {
			// 	test: /\.(glsl|frag|vert)$/,
			// 	exclude: /node_modules/,
			// 	loader: 'raw-loader'
			// },
			// {
			// 	test: /\.(glsl|frag|vert)$/,
			// 	exclude: /node_modules/,
			// 	loader: 'glslify-loader'
			// },
			{
				test: /\.(glsl|vert|frag)$/,
				loader: 'shader-loader',
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader'
			},
			{
				test: /\.styl$/,
				use: ExtractTextPlugin.extract({
				  use: ['css-loader', 'stylus-loader']
				})
			},
			{
				test: /\.(jpe*g|png|gif)$/,
				use: [
				  'file-loader?name=[name].[ext]&outputPath=assets/img/&publicPath=img/',
				  {
					loader: 'image-webpack-loader',
					query: {
					  progressive: true,
					  optimizationLevel: 7,
					  interlaced: false,
					  pngquant: {
						quality: '65-90',
						speed: 4
					  }
					}
				  }
				]
			}
		]
	},


	plugins: [
 		new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'assets/js/vendor.bundle.js' }),
		// new BrowserSyncPlugin({
		// 	server: {
		// 		baseDir: [config.dirs.dest]
		// 	},
		// }),
		new webpack.ProvidePlugin({
			'THREE': 'three/build/three'
		}),
		new HtmlWebpackPlugin({
			title: 'infinitedTube',
			filename: 'infinitedTube/index.html',
			template: 'pug/infinitedTube/index.pug',
			chunks: ['vendor', 'pages/infinitedTube'],
			chunksSortMode: 'auto',
		}),
		new HtmlWebpackPlugin({
			title: 'timeMachine',
			filename: 'timeMachine/index.html',
			template: 'pug/timeMachine/index.pug',
			chunks: ['vendor', 'pages/timeMachine'],
			chunksSortMode: 'auto',
		}),
		new HtmlWebpackPlugin({
			title: 'ripple',
			filename: 'ripple/index.html',
			template: 'pug/ripple/index.pug',
			chunks: ['vendor', 'pages/ripple'],
			chunksSortMode: 'auto',
		}),
		new HtmlWebpackPlugin({
			title: 'ripple-clickable',
			filename: 'ripple-clickable/index.html',
			template: 'pug/ripple-clickable/index.pug',
			chunks: ['vendor', 'pages/ripple-clickable'],
			chunksSortMode: 'auto',
		}),
		new ExtractTextPlugin('assets/css/[name].css'),
	],
}
