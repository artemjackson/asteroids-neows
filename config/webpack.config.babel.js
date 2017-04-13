import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

/**
 * @param {String} env - either 'development', 'staging' or 'production'
 */
export default (env = 'development') => {
  const isDevelopment = env === 'development';
  const isProduction = env === 'production';
  return {
    entry: {
      app: ['babel-polyfill', path.resolve('src')]
    },
    output: {
      chunkFilename: 'js/[name].[chunkhash].js',
      filename: 'js/[name].[chunkhash].js',
      path: path.resolve('docs'),
      publicPath: ''
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        include: path.resolve('src'),
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            env: {
              production: {
                plugins: ['transform-react-remove-prop-types']
              }
            },
            presets: [
              ['env', {
                targets: {
                  browsers: 'last 2 versions'
                },
                modules: false,
                loose: true,
                useBuiltIns: true
              }],
              'react'
            ],
            plugins: [
              'transform-decorators-legacy',
              'transform-object-rest-spread',
              'transform-class-properties',
              'react-hot-loader/babel'
            ]
          }
        }
      }, {
        test: /\.styl$/,
        include: path.resolve('src'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: isProduction ?
                '[local]_[hash:base64:8]' :
                '[path][name]__[local]'
            }
          }, {
            loader: 'stylus-loader'
          }]
        })
      }]
    },
    resolve: {
      alias: {
        root: path.resolve('src'),
        elements: path.resolve('src/elements'),
        lib: path.resolve('src/lib'),

        app: path.resolve('src/modules/app'),
        asteroids: path.resolve('src/modules/asteroids')
      },
      extensions: ['.js', '.jsx', '.styl']
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env),
          API_URI: JSON.stringify('https://api.nasa.gov/neo/rest/v1/neo'),
          API_KEY: JSON.stringify('DNnIOj3S7fHn8Ztb9XuGI9W45hpwmZWcqSwnHIPT')
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: (module) => /node_modules/.test(module.context)
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest'
      }),
      new ExtractTextPlugin({
        disable: !isProduction,
        filename: 'css/[name].[chunkhash].css',
        allChunks: true
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve('src/index.html'),
        favicon: path.resolve('src/favicon.png')
      }),
      new CompressionPlugin({
        test: /\.css$|\.js$|\.html$/,
        threshold: isDevelopment ? Infinity : 0
      })
    ],
    devtool: isDevelopment ? 'cheap-module-source-map' : 'source-maps',
    performance: {
      hints: isDevelopment ? false : 'warning'
    },
    stats: { children: false },
    devServer: {
      contentBase: path.resolve('public'),
      publicPath: '/',
      historyApiFallback: true,
      stats: {
        assets: false,
        chunks: false,
        children: false,
        timings: true
      }
    }
  };
};