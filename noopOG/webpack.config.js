const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    // 🛠️ Створюємо папки вручну перед білдом, щоб уникнути проблем з clean: true
    const outputDir = path.resolve(__dirname, 'dist');
    const jsDir = path.resolve(outputDir, 'js');
    const cssDir = path.resolve(outputDir, 'css');

    if (!fs.existsSync(jsDir)) fs.mkdirSync(jsDir, {recursive: true});
    if (!fs.existsSync(cssDir)) fs.mkdirSync(cssDir, {recursive: true});

    return {
        mode: isProduction ? 'production' : 'development',
        entry: {
            main:'./src/js/main.js',
            cabinet:'./src/js/cabinet.js',
        },
        output: {
            filename: 'js/[name].min.js',
            path: outputDir,
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ],
                }
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/[name].min.css'
            }),
        ],
        optimization: {
            minimize: isProduction,
            minimizer: [
                new CssMinimizerPlugin(),
                new TerserPlugin(),
            ],
        },
        watch: !isProduction,
    };
};