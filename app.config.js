const path = require('path')
const appPath = path.resolve('./build/app/')

module.exports = {
  webpack: {
    entry: path.resolve('./src/app.ts'),
    output: {
      path: path.join(appPath, '/js/'),
      filename: 'app.js',
      pathinfo: true
    }
  }
}
