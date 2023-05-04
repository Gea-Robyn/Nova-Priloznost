const mix = require('laravel-mix')
const LiveReloadWebpackPlugin = require('@kooneko/livereload-webpack-plugin')

require('laravel-mix-tailwind');

module.exports = {
  plugins: [
    new LiveReloadWebpackPlugin()
  ]
}

mix
  .js('js/main.js', 'js/dist/app.js')
  .vue()
  .postCss('scss/app.css', 'css/app.css')
  .tailwind()
  .webpackConfig((webpack) => {
    return {
      plugins: [
        new webpack.DefinePlugin({
          __VUE_OPTIONS_API__: 'true',
          __VUE_PROD_DEVTOOLS__: 'false'
        })
      ],
      stats: {
        children: true,
      },
    }
  })

if (mix.inProduction()) {
  mix.version()
}
