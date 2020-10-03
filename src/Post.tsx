/** @jsx jsx */

import {jsx, keyframes} from '@emotion/core';
import {useContext, useEffect, useState} from 'react';
import {DiscussionEmbed} from 'disqus-react';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {ThemeContext} from './Theme';
import {Icon} from './Icon';

export interface Article {
    path: string;
    title: string;
    load: () => Promise<{ default: string }>;
}

const loadingAnimation = keyframes({
    '0%': {
        opacity: 0
    },
    '50%': {
        opacity: 1
    },
    '100%': {
        opacity: 0
    }
});

export const Post = ({article = {} as Article}) => {
    const theme = useContext(ThemeContext);
    const [html, setHTML] = useState<string | null>(null);

    useEffect(() => {
        article.load().then(result => {
            setTimeout(() => {
                setHTML(result.default);
            }, 5000);
        }).catch(() => {
            setHTML('Failed to load the article!');
        });
    });

    return (
        <div>
            {
                (html === null) ? (
                    <div css={{
                        marginTop: '1rem',
                        marginBottom: '1rem',
                        fontSize: '1.2rem',
                        color: theme.defaultColor
                    }}>
                        Loading...&nbsp;
                        <Icon css={{
                            animation: `${loadingAnimation} 0.5s infinite`
                        }} definition={faClock}/>
                    </div>
                ) : (
                    <div
                        css={{
                            marginBottom: '1.5rem',
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
