/** @jsx jsx */

import {jsx, keyframes} from '@emotion/core';
import {useContext, useEffect, useState} from 'react';
import {DiscussionEmbed} from 'disqus-react';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {ThemeContext} from './Theme';
import {Icon} from './Icon';
import {Article} from './Articles';

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

const Loading = () => {
    const theme = useContext(ThemeContext);

    return (
        <div css={{
            paddingBottom: '1rem',
            marginTop: '1rem',
            marginBottom: '1rem',
            borderBottom: `1px solid ${theme.darkColor}`,
            fontSize: '1.3rem',
            color: theme.defaultColor
        }}>
            Loading...&nbsp;
            <Icon css={{
                animation: `${loadingAnimation} 0.5s infinite`
            }} definition={faClock}/>
        </div>
    );
};

const ArticleHTML = ({html = ''}) => {
    const theme = useContext(ThemeContext);

    return (
        <div
            css={{
                paddingBottom: '1rem',
                marginBottom: '0.5rem',
                borderBottom: `1px solid ${theme.darkColor}`,
                color: theme.defaultColor,
                '& h1': {
                    paddingBottom: '0.5rem',
                    borderBottom: `1px solid ${theme.darkColor}`,
                    fontSize: '1.8rem'
                },
                '& h2': {
                    fontSize: '1.3rem'
                },
                '& h3': {
                    fontSize: '1rem'
                },
                '& .hljs': {
                    border: `1px solid ${theme.darkColor}`,
                    background: 'none'
                }
            }}
            dangerouslySetInnerHTML={{__html: html}}
        />
    );
};

const Category = ({category = ''}) => {
    const theme = useContext(ThemeContext);

    return (
        <div css={{
            marginBottom: '1rem',
            color: theme.defaultColor
        }}>
            Category:&nbsp;
            <a
                css={{
                    cursor: 'pointer',
                    color: theme.darkColor,
                    '&:hover, &:active, &:focus': {
                        color: theme.lightColor
                    }
                }}
                href={'#'}
            >
                {category}
            </a>
        </div>
    );
};

export const Post = ({article = {} as Article}) => {
    const [html, setHTML] = useState<string | null>(null);

    useEffect(() => {
        article.load().then(result => {
            setTimeout(() => {
                setHTML(result.default);
            }, 2000); // TODO: Remove setTimeout() after testing.
        }).catch(() => {
            setHTML('Failed to load the article!');
        });
    });

    return (
        <div>
            {(html === null) ? <Loading/> : <ArticleHTML html={html}/>}
            <Category category={article.category}/>
            <DiscussionEmbed shortname={'Avantgarde95'} config={{
                url: `https://avantgarde95.github.io/blog${article.path}`,
                identifier: article.title,
                title: article.title
            }}/>
        </div>
    );
};
