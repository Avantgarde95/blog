/** @jsx jsx */

import {jsx} from '@emotion/core';
import {useContext, useEffect, useState} from 'react';
import {DiscussionEmbed} from 'disqus-react';
import {ThemeContext} from './Theme';

export interface Article {
    path: string;
    title: string;
    loader: () => Promise<{ default: string }>;
}

export const Post = ({article = {} as Article}) => {
    const theme = useContext(ThemeContext);
    const [html, setHTML] = useState<string | null>(null);

    useEffect(() => {
        article.loader().then(result => {
            setHTML(result.default);
        }).catch(() => {
            setHTML('Failed to load the article!');
        });
    });

    return (
        <div>
            {
                (html === null) ? (
                    <div css={{
                        color: theme.defaultColor
                    }}>
                        Loading...
                    </div>
                ) : (
                    <div
                        css={{
                            color: theme.defaultColor
                        }}
                        dangerouslySetInnerHTML={{__html: html}}
                    />
                )
            }
            <DiscussionEmbed shortname={'Avantgarde95'} config={{
                url: `https://avantgarde95.github.io/blog${article.path}`,
                identifier: article.title,
                title: article.title
            }}/>
        </div>
    );
};
