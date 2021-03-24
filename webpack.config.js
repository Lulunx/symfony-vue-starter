let Encore = require('@symfony/webpack-encore');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .addEntry('app', './assets/js/main.js')
    .enableSassLoader(options => {
        options.implementation = require('sass')
        options.fiber = require('fibers')
    })
    
  //  .enableBuildNotifications()
    .addPlugin(new VuetifyLoaderPlugin())
    // enables Sass/SCSS support
    .enableVueLoader()
    .enableSingleRuntimeChunk();

module.exports = Encore.getWebpackConfig();
