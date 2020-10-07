/** @jsx jsx */

import {jsx, keyframes} from '@emotion/core';
import {createRef, useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {DiscussionEmbed} from 'disqus-react';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {ThemeContext} from './Theme';
import {Icon} from './Icon';
import {Post} from './Posts';
import {PathContext} from './Path';

const Luminous = require('luminous-lightbox').Luminous;

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

const Title = ({title = ''}) => {
    const theme = useContext(ThemeContext);

    return (
        <span css={{
            color: theme.defaultColor,
            fontSize: '1.8rem',
            fontWeight: 'bold'
        }}>
            {title}
        </span>
    );
}

const PostDate = ({date = {} as Date}) => {
    const theme = useContext(ThemeContext);
    const year = date.getFullYear().toString().padStart(4, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return (
        <span css={{
            marginLeft: '0.5rem',
            fontSize: '1rem',
            color: theme.defaultColor
        }}>
            {year}.{month}.{day}
        </span>
    );
};

const Content = ({html = ''}) => {
    const theme = useContext(ThemeContext);
    const ref = createRef<HTMLDivElement>();

    useEffect(() => {
        const root = ref.current;

        if (root !== null) {
            const images = root.querySelectorAll('.PostImage');

            for (let i = 0; i < images.length; i++) {
                new Luminous(images[i], {sourceAttribute: 'src'});
            }
        }
    });

    return (
        <div
            css={{
                paddingBottom: '1rem',
                marginBottom: '0.5rem',
                borderBottom: `1px solid ${theme.darkColor}`,
                color: theme.defaultColor,
                '& h1': {
                    fontSize: '1.5rem'
                },
                '& h2': {
                    fontSize: '1.3rem'
                },
                '& h3': {
                    fontSize: '1rem'
                },
                '& a': {
                    cursor: 'pointer',
                    color: theme.darkColor,
                    '&:hover, &:active, &:focus': {
                        color: theme.lightColor
                    }
                },
                '& table': {
                    borderCollapse: 'collapse',
                    border: `1px solid ${theme.darkColor}`,
                    '& th, & td': {
                        padding: '0.5rem',
                        border: `1px solid ${theme.darkColor}`
                    }
                },
                '& .PostImage': {
                    cursor: 'zoom-in',
                    maxWidth: '100%',
                    border: `1px solid ${theme.darkColor}`,
                    '&:hover, &:active, &:focus': {
                        border: `1px solid ${theme.lightColor}`
                    }
                },
                '& .PostYouTubeOuterContainer': {
                    width: '100%',
                    maxWidth: '560px'
                },
                '& .PostYouTubeInnerContainer': {
                    position: 'relative',
                    height: 0,
                    paddingBottom: '56.25%'
                },
                '& .PostYouTube': {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: `1px solid ${theme.darkColor}`,
                    '&:hover, &:active, &:focus': {
                        border: `1px solid ${theme.lightColor}`
                    }
                },
                '& .hljs': {
                    border: `1px solid ${theme.darkColor}`,
                    background: 'none'
                }
            }}
            ref={ref}
            dangerouslySetInnerHTML={{__html: html}}
        />
    );
};

const Category = ({category = ''}) => {
    const theme = useContext(ThemeContext);
    const {navigateBasename} = useContext(PathContext);
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
                    navigate(`${navigateBasename}/category/${category.toLowerCase()}`, {replace: true});
                }}
            >
                {category}
            </button>
        </div>
    );
};

export const PostPage = ({post = {} as Post}) => {
    const theme = useContext(ThemeContext);
    const [html, setHTML] = useState<string | null>(null);

    useEffect(() => {
        post.load().then(result => {
            setHTML(result.default);
        }).catch(() => {
            setHTML('Failed to load the post!');
        });
    }, [html]);

    return (
        <div>
            <div css={{
                paddingBottom: '0.5rem',
                borderBottom: `1px solid ${theme.darkColor}`,
            }}>
                <Title title={post.title}/>
                <PostDate date={post.date}/>
            </div>
            {(html === null) ? <Loading/> : <Content html={html}/>}
            <Category category={post.category}/>
            <DiscussionEmbed shortname={'Avantgarde95'} config={{
                url: `https://avantgarde95.github.io/blog/${post.path}`,
                identifier: post.title,
                title: post.title
            }}/>
        </div>
    );
};
