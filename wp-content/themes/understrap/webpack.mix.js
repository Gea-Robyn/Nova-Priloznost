const mix = require('laravel-mix')
const LiveReloadWebpackPlugin = require('@kooneko/livereload-webpack-plugin')

module.exports = {
  plugins: [
    new LiveReloadWebpackPlugin()
  ]
}

mix
  .js('js/main.js', 'js/dist/app.js')
  .vue()
  .sass('scss/app.scss', 'css')
  .webpackConfig((webpack) => {
    return {
      plugins: [
        new webpack.DefinePlugin({
          __VUE_OPTIONS_API__: 'true',
          __VUE_PROD_DEVTOOLS__: 'false'
        })
      ]
    }
  })

if (mix.inProduction()) {
  mix.version()
}
