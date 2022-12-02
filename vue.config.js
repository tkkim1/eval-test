const path = require('path');

module.exports = {
    publicPath: `${process.env.BASE_URL}`,
    outputDir: path.resolve(__dirname, './dist'),
    indexPath: 'index.html',
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@vue/app', '@babel/preset-env'],
                        },
                    },
                },
            ],
        },
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "src/quasar-variables.sass"`,
            },
            scss: {
                additionalData: `@import "@/assets/stylesheet/mixins.scss";@import "@/assets/stylesheet/variable.scss";$BASE_URL: "${process.env.BASE_URL}";`,
            },
        },
    },
    chainWebpack: (config) => {
        config.resolve.alias.set('@', path.resolve(__dirname, 'src/'));
    },
    lintOnSave: false,
    devServer: {
        proxy: process.env.VUE_APP_QBANK_URL,
    },
};
