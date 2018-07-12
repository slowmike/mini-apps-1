const path = require('path');

module.exports = {
  entry: './client/app.jsx',
  output:  {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [

      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use : {
          loader: 'babel-loader',
          query: {
            presets:['env', 'react']
          }
        }
      },

      {
        test: /.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }

    ]
  }
}
