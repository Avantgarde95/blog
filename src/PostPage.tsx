/** @jsx jsx */

import {jsx, keyframes} from '@emotion/core';
import {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {DiscussionEmbed} from 'disqus-react';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {ThemeContext} from './Theme';
import {Icon} from './Icon';
import {Post} from './Posts';

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
            marginBottom: '1rem',
            borderBottom: `1px solid ${theme.darkColor}`,
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: theme.defaultColor
        }}>
            Loading...&nbsp;
            <Icon css={{
                animation: `${loadingAnimation} 0.5s infinite`
            }} definition={faClock}/>
        </div>
    );
};

const Content = ({title = '', html = ''}) => {
    const theme = useContext(ThemeContext);

    return (
        <div css={{
            paddingBottom: '1rem',
            marginBottom: '0.5rem',
            borderBottom: `1px solid ${theme.darkColor}`,
            color: theme.defaultColor,
        }}>
            <div css={{
                paddingBottom: '0.5rem',
                borderBottom: `1px solid ${theme.darkColor}`,
                fontSize: '1.8rem',
                fontWeight: 'bold'
            }}>
                {title}
            </div>
            <div
                css={{
                    '& h1': {
                        fontSize: '1.5rem'
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
        </div>
    );
};

const Category = ({category = ''}) => {
    const theme = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <div css={{
            marginBottom: '1rem',
            color: theme.defaultColor
        }}>
            Category:&nbsp;
            <button
                css={{
                    cursor: 'pointer',
                    padding: '0',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    border: 'none',
                    color: theme.darkColor,
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    '&:hover, &:active, &:focus': {
                        color: theme.lightColor
                    }
                }}
                onClick={() => {
                    navigate(`/category/${category}`, {replace: true});
                }}
            >
                {category}
            </button>
        </div>
    );
};

export const PostPage = ({article = {} as Post}) => {
    const [html, setHTML] = useState<string | null>(null);

    useEffect(() => {
        article.load().then(result => {
            setHTML(result.default);
        }).catch(() => {
            setHTML('Failed to load the article!');
        });
    });

    return (
        <div>
            {(html === null) ? <Loading/> : <Content title={article.title} html={html}/>}
            <Category category={article.category}/>
            <DiscussionEmbed shortname={'Avantgarde95'} config={{
                url: `https://avantgarde95.github.io/blog/${article.path}`,
                identifier: article.title,
                title: article.title
            }}/>
        </div>
    );
};
