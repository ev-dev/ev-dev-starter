const path = require('path')
const webpack = require('webpack')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const autoprefixer = require('autoprefixer')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          presets: [require.resolve('babel-preset-react-app')],
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules', 'font-awesome')
        ],
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9'
                  ],
                  flexbox: 'no-2009'
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(svg|ttf|eot|eof|woff|woff2)$/,
        loader: require.resolve('file-loader')
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css', '*'],
    alias: {
      'babel-runtime': path.dirname(
        require.resolve('babel-runtime/package.json')
      )
    }
  },
  devtool: isDev ? 'cheap-module-eval-source-map' : 'source-map',
  plugins: isDev 
    ? [
        new LiveReloadPlugin({
          appendScriptTag: true
        })
      ] 
    : []
}