import * as React from 'react';
import {createRef, useContext, useEffect, useState} from 'react';
import {css, keyframes} from '@emotion/css';
import {DiscussionEmbed} from 'disqus-react';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {Luminous} from 'luminous-lightbox';
import 'luminous-lightbox/dist/luminous-basic.min.css';
import {ThemeContext} from './Theme';
import {Icon} from './Icon';
import {Post} from './Post';
import {CategoryLink} from './CategoryLink';

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
        <div className={css({
            paddingBottom: '1rem',
            marginTop: '1rem',
            marginBottom: '1rem',
            borderBottom: `1px solid ${theme.darkColor}`,
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: theme.defaultColor
        })}>
            Loading...&nbsp;
            <Icon
                className={css({
                    animation: `${loadingAnimation} 0.5s infinite`
                })}
                definition={faClock}
            />
        </div>
    );
};

const Title = ({title = ''}) => {
    const theme = useContext(ThemeContext);

    return (
        <span className={css({
            display: 'inline-block',
            wordBreak: 'break-all',
            marginRight: '0.5rem',
            marginBottom: '0.5rem',
            color: theme.defaultColor,
            fontSize: '1.8rem',
            fontWeight: 'bold'
        })}>
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
        <span className={css({
            display: 'inline-block',
            fontSize: '1rem',
            marginBottom: '0.5rem',
            color: theme.defaultColor
        })}>
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
            className={css({
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
                '& pre': {
                    margin: '1.5rem 0',
                    fontFamily: 'inherit',
                    fontSize: 'inherit'
                },
                '& .PostImage': {
                    cursor: 'pointer',
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
            })}
            ref={ref}
            dangerouslySetInnerHTML={{__html: html}}
        />
    );
};

export const PostPage = ({post = {} as Post}) => {
    const theme = useContext(ThemeContext);
    const [html, setHTML] = useState<string | null>(null);

    useEffect(() => {
        post.load().then(result => {
            setHTML(result.html);
        }).catch(() => {
            setHTML('Failed to load the post!');
        });
    }, [html, post]);

    return (
        <div>
            <div className={css({
                paddingBottom: '0.5rem',
                borderBottom: `1px solid ${theme.darkColor}`,
            })}>
                <Title title={post.title}/>
                <PostDate date={post.date}/>
            </div>
            {(html === null) ? <Loading/> : <Content html={html}/>}
            <div className={css({
                marginBottom: '1rem',
                color: theme.defaultColor
            })}>
                Category: <CategoryLink category={post.category}/>
            </div>
            <DiscussionEmbed shortname={'Avantgarde95'} config={{
                url: `https://avantgarde95.github.io/blog/${post.path}`,
                identifier: post.title,
                title: post.title
            }}/>
        </div>
    );
};
