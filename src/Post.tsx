/** @jsx jsx */

import {jsx} from '@emotion/core';
import {DiscussionEmbed} from 'disqus-react';

const Article = ({html = ''}) => (
    <div
        css={{
            color: '#ffffff'
        }}
        dangerouslySetInnerHTML={{__html: html}}
    />
);

export const Post = ({title = '', path = '', html = ''}) => (
    <div>
        <Article html={html}/>
        <DiscussionEmbed shortname={'Avantgarde95'} config={{
            url: `https://avantgarde95.github.io/blog${path}`,
            identifier: title,
            title: title
        }}/>
    </div>
);
