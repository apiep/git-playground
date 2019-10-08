const path = require('path')
const name = 'git-playground'

module.exports = function(env) {
  return {
    mode: env.production ? 'production' : 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      filename: name + '.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
}
