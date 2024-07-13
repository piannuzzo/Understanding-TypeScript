const path = require('path')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}, {
				test: /\.(tsx|js)$/, 
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js', '.tsx', '.d.ts']
	},
}