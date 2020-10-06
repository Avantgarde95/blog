const path = require('path');
const highlight = require('highlight.js');
const {Renderer} = require('marked');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function parseYouTubeURL(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
}

class PostRenderer extends Renderer {
    constructor(options) {
        super(options);
    }

    code(code, infostring, escaped) {
        const lang = (infostring || '').match(/\S*/)[0];

        const out = (!lang || ['text', 'literal', 'nohighlight'].includes(lang))
            ? `<pre class="hljs">${code}</pre>`
            : `<span class="hljs">${highlight.highlight(lang, code).value}</span>`;

        return (out != null && out !== code)
            ? super.code(out, infostring, true)
            : super.code(code, infostring, escaped);
    }

    link(href, title, text) {
        const youTubeID = parseYouTubeURL(href);

        if (youTubeID === null) {
            const out = super.link(href, title, text);
            return `<a target="_blank" rel="noopener noreferrer" ${out.substr(2)}`;
        } else {
            return `<iframe width="560" height="315" frameBorder="0" allowFullScreen="true" src="https://www.youtube.com/embed/${youTubeID}"></iframe>`;
        }
    }
}

const postRenderer = new PostRenderer();

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
                    test: /\.md$/,
                    use: [
                        {loader: 'html-loader'},
                        {loader: 'markdown-loader', options: {renderer: postRenderer}}
                    ]
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
