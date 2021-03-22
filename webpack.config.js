const path = require('path');
module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index.ts'),
  watch: true,
  target: 'web',
  output: {
    path: path.join(__dirname, 'build', 'bundle'),
    publicPath: '/bundle/',
    filename: "index.js",
    chunkFilename: '[name].js',
    // 라이브러리 객체 이름
    library : "seedFingerprint",
    // 라이브러리 설정 방법
    libraryTarget : "umd"
  },
  module: {
    rules: [
    {
        test: /\.ts$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
            {
                loader: 'ts-loader'
            }
        ]
    },
    {
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                  ["@babel/env", {
                    "targets": {
                      "browsers": "last 2 chrome versions"
                    }
                  }]
                ]
            }
          }
      ]
    }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json', '.js', '.jsx'],
    fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify')
    }
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
    inline: true,
    host: 'localhost',
    port: 8080,
  }
};