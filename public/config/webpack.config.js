const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

	mode: 'development',
	// entry file path
	entry: path.resolve(__dirname, '../../src/index.tsx'),
	resolve: {
		alias: {
			src: path.resolve(__dirname, '../../src/'),
			assets: path.resolve(__dirname, '../../src/assets/'),
		},
		// for import without file extension
		extensions: ['.ts', '.tsx', '.js']
	},
	output: {
		// file name after packaging
		filename: '[name].[hash:8].js',
		// output file path
		path: path.resolve(__dirname, '../../dist')
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /nodeModules/,
				use: {
					loader: 'awesome-typescript-loader'
				}
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				loader: 'file-loader',
				options: {
					outputPath: (url, resourcePath, context) => {
						return `assets/${url}`;
					},
				}
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin(),

		new HtmlWebpackPlugin({  // Also generate a test.html
			filename: 'index.html',
			template: path.resolve(__dirname, '../template/index.html')
		})

	],
	devServer: {
		// Webpack launch browser automatically
		open: true,
		// local server config
		port: process.env.PORT || 3000,

	}
}