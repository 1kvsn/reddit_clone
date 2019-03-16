const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './assets/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.(s*)css$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	devServer: {
		port: 7001,
		contentBase: path.join(__dirname, './dist'),
		hot: true
	},
	plugins: [new HtmlWebpackPlugin({
		template: './index.html'
	})]
};