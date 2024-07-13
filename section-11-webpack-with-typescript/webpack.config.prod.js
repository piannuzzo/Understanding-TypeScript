const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: false,
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}, {
				test: /\.(js|jsx|ts|tsx)$/, 
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', 'jsx']
	},
	plugins: [
		new CleanWebpackPlugin.CleanWebpackPlugin()
	]
}