const path = require('path')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, '../src/index.ts'),
  output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'index.js',
    clean: true,
    library: {
      name: 'VueMonacoEditor',
      type: 'commonjs',
    },
    // library: {
    //   type: 'module',
    // },
	},
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  optimization: {
    minimize: true,
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
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, '../tsconfig.build.json'),
            },
          },
        ],
      },
		]
  },
  plugins: [
    new MonacoWebpackPlugin({
      languages: [
        'typescript',
        'html',
        'json',
        'css',
      ],
    }),
  ],
  // experiments: {
  //   outputModule: true,
  // },
}
