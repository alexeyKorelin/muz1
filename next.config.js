const withSass = require('@zeit/next-sass')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = withSass({
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 60 * 24
  },
  cssModules: true,
  cssLoaderOptions: {
    sourceMap: true,
    importLoaders: 2,
    localIdentName: '[local]__[hash:base64:5]',
  },
  webpack: (config, { buildId, dev, isServer }) => {
    config.resolve.extensions.push('.js', '.jsx')

    config.module.rules.push(
      {
        test: /\.(png|svg|eot|otf|ttf|woff|woff2|mp3)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            fallback: 'file-loader',
            publicPath: '/_next/static/assets/',
            outputPath: `${isServer ? '../' : ''}static/assets/`,
            name: '[name].[ext]'
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    )

    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: 'public/tracks',
          to: `${isServer ? '../' : ''}static/assets/tracks`
        }
      ])
    );

    return config
  }
})

module.exports = nextConfig