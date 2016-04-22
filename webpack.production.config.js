var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');

module.exports = {
	entry: [
		'./index.web.js' // Your appʼs entry point
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		alias: {
			'react-native': 'react-native-web'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: loaders
	}
};
