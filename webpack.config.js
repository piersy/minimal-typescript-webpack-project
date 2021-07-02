const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.ts$/, // handle all files with .ts extension with ts-loader
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: { // options for resolving module requests
		extensions: ['.ts', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Minimal typescript webpack project',
		}),
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true, // Make sure we empty the dist dir each build
	},
	devServer: { // Make sure the dev server looks in the righ place for content
		contentBase: path.resolve(__dirname, 'dist'),
	}
};
