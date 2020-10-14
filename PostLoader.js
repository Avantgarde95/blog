const marked = require('marked');
const yaml = require('js-yaml');
const highlight = require('highlight.js');

// Modified the code at https://stackoverflow.com/a/8260383.
function parseYouTubeURL(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[7].length === 11) ? match[7] : null;
}

class PostRenderer extends marked.Renderer {
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
            return (
                '<div class="PostYouTubeOuterContainer">'
                + '<div class="PostYouTubeInnerContainer">'
                + '<iframe class="PostYouTube"'
                + ' width="560" height="315" frameBorder="0" allowFullScreen="true"'
                + ` src="https://www.youtube.com/embed/${youTubeID}">`
                + '</iframe>'
                + '</div>'
                + '</div>'
            );
        }
    }

    image(href, title, text) {
        const out = super.image(href, title, text);
        return `<img class="PostImage"${out.substr(4)}`;
    }
}

const postRenderer = new PostRenderer();

// Modified the code from https://github.com/j201/meta-marked.
function splitInput(str) {
    if (str.slice(0, 3) !== '---') {
        return null;
    }

    const matcher = /\n(\.{3}|-{3})/g;
    const metaEnd = matcher.exec(str);

    return metaEnd && [str.slice(3, metaEnd.index), str.slice(matcher.lastIndex)];
}

module.exports = function (input) {
    this.cacheable(true);

    const inputParts = splitInput(input);
    const meta = yaml.safeLoad(inputParts[0]);
    const markdown = inputParts[1];
    const html = marked(markdown, {renderer: postRenderer});

    const out = {
        title: meta.Title,
        date: meta.Date,
        category: meta.Category,
        html: html.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')
    };

    return `module.exports = ${JSON.stringify(out)};`;
};
