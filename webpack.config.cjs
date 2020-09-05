const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode == 'production';

  const webpackConfig = {
    watch: isProduction ? false : true,
    entry: { bundle: './src/client/index.jsx' },
    optimization: {
      minimizer: isProduction
        ? [
            new TerserJSPlugin({
              sourceMap: true,
              parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
          ]
        : []
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/client/index.html',
        filename: './index.html',
        minify: isProduction
          ? {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true,
              minifyCSS: true,
              minifyJS: true,
              removeScriptTypeAttributes: true
            }
          : {},
        hash: true
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: 'public' }]
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [require('autoprefixer')]
              }
            },
            'sass-loader'
          ]
        }
      ]
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss', '.css']
    },
    devtool: 'source-map',
    devServer: isProduction
      ? {}
      : {
          contentBase: path.join(__dirname, 'dist'),
          port: 3001,
          proxy: {
            '/': 'http://localhost:3000'
          }
        }
  };

  return webpackConfig;
};
