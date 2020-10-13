const marked = require('marked');
const highlight = require('highlight.js');

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
                + `<iframe class="PostYouTube" width="560" height="315" frameBorder="0" allowFullScreen="true" src="https://www.youtube.com/embed/${youTubeID}">`
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

module.exports = function (markdown) {
    this.cacheable(true);
    marked.setOptions();
    return marked(markdown, {renderer: postRenderer});
};
