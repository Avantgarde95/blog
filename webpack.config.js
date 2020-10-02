const path = require('path');
const highlight = require('highlight.js');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getAbsolutePath(...paths) {
    return path.resolve(__dirname, ...paths);
}

module.exports = (env, argv) => {
    const isDebugMode = !argv || argv.mode === 'development';
    const srcDir = 'src';
    const outDir = 'dist';

    return {
        mode: 'development',
        entry: getAbsolutePath(srcDir, 'Main.tsx'),
        devtool: isDebugMode ? 'inline-source-map' : false,
        output: {
            path: getAbsolutePath(outDir),
            publicPath: outDir + '/',
            filename: '[name].[contenthash].js',
            chunkFilename: '[name].[contenthash].js'
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
        resolve: {
            alias: {
                'react': 'preact/compat',
                'react-dom': 'preact/compat'
            },
            extensions: [
                '.ts', '.tsx', '.js',
                '.png', '.jpg', '.svg',
                '.css',
                '.md'
            ]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: {loader: 'ts-loader'}
                },
                {
                    test: /\.(png|jpg|svg)$/,
                    use: {loader: 'url-loader', options: {esModule: false, limit: 2048}}
                },
                {
                    test: /\.css$/,
                    use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
                },
                {
                    test: /\.md$/,
                    use: [{loader: 'html-loader'}, {
                        loader: 'markdown-loader', options: {
                            highlight: (code, lang) => {
                                if (!lang || ['text', 'literal', 'nohighlight'].includes(lang)) {
                                    return `<pre class="hljs">${code}</pre>`;
                                } else {
                                    return `<span class="hljs">${highlight.highlight(lang, code).value}</span>`;
                                }
                            }
                        }
                    }]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: getAbsolutePath(srcDir, 'index.html'),
                filename: getAbsolutePath('index.html')
            })
        ]
    };
};
