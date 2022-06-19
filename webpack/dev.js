const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: path.resolve(__dirname, '../playground/index.ts'),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  devServer: {
    port: 8080,
    compress: true,
    open: true,
    client: { 
      progress: true,
    },
  },
  module: {
    rules: [
      {
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.ttf$/,
				type: 'asset/resource',
			},
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader', 
          'ts-loader',
        ],
      },
		]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../playground/index.html'),
    }),
    new MonacoWebpackPlugin({
      languages: [
        'typescript',
        'html',
        'json',
        'css',
      ],
    }),
  ],
}