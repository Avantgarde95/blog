import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { css, keyframes } from '@emotion/css';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons/faCaretLeft';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import { ThemeContext } from './Theme';
import { Post } from './Post';
import { Icon } from './Icon';
import { PathContext } from './Path';
import { CategoryLink } from './CategoryLink';

const TitleLink = ({ post = {} as Post }) => {
    const { theme } = useContext(ThemeContext);
    const { basename } = useContext(PathContext);

    return (
        <Link
            className={css({
                display: 'inline-block',
                cursor: 'pointer',
                textDecoration: 'none',
                wordBreak: 'break-all',
                textAlign: 'left',
                padding: '0',
                marginRight: '0.5rem',
                marginBottom: '0.5rem',
                fontFamily: 'inherit',
                fontWeight: 'bold',
                fontSize: '1.8rem',
                border: 'none',
                color: theme.darkColor,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                '&:hover, &:active, &:focus': {
                    color: theme.lightColor
                }
            })}
            title={post.title}
            to={`${basename}post/${post.path}`}
        >
            {post.title}
        </Link>
    );
};

const PostDate = ({ date = {} as Date }) => {
    const { theme } = useContext(ThemeContext);
    const year = date.getFullYear().toString().padStart(4, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return (
        <span className={css({
            display: 'inline-block',
            marginBottom: '0.5rem',
            fontSize: '1rem',
            color: theme.defaultColor
        })}>
            {year}.{month}.{day}
        </span>
    );
};

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
    const { theme } = useContext(ThemeContext);

    return (
        <div className={css({
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

function getTextFromHTML(html: string) {
    const element = document.createElement('div');
    element.innerHTML = html;
    return element.innerText;
}

function getAbbreviation(value: string, maxLength: number) {
    if (value.length <= maxLength) {
        return value;
    } else {
        return value.substr(0, maxLength) + '...';
    }
}

const areaAnimation = keyframes({
    '0%': {
        opacity: 0
    },
    '100%': {
        opacity: 1
    }
});

const previewAnimation = keyframes({
    '0%': {
        transform: 'translateX(-5rem)'
    },
    '100%': {
        transform: 'translateX(0)'
    }
});

const Preview = ({ post = {} as Post }) => {
    const { theme } = useContext(ThemeContext);
    const [preview, setPreview] = useState<string | null>(null);

    useEffect(() => {
        post.load().then(result => {
            setPreview(getAbbreviation(getTextFromHTML(result.html), 100));
        }).catch(() => {
            setPreview('Failed to load the post!');
        });
    }, [preview, post]);

    return (
        <div className={css({
            paddingBottom: '0.5rem',
            marginBottom: '1.5rem',
            borderBottom: `1px solid ${theme.darkColor}`,
            animation: `${areaAnimation} 0.5s 1`
        })}>
            <div className={css({
                animation: `${previewAnimation} 0.5s 1`
            })}>
                <TitleLink post={post} />
                <PostDate date={post.date} />
                <div className={css({
                    color: theme.defaultColor
                })}>
                    {(preview === null) ? <Loading /> : preview}
                </div>
                <div className={css({
                    marginTop: '0.5rem',
                    marginBottom: '1rem',
                    color: theme.defaultColor
                })}>
                    Category: <CategoryLink category={post.category} />
                </div>
            </div>
        </div>
    );
};

export const PreviewPage = ({ posts = [] as Post[] }) => {
    const { theme } = useContext(ThemeContext);

    if (posts.length === 0) {
        return <div className={css({ color: theme.defaultColor })}>No posts!</div>;
    }

    const [subpageIndex, setSubpageIndex] = useState(0);
    const postCountPerSubpage = 4;
    const subpageCount = Math.ceil(posts.length / postCountPerSubpage);
    const postIndexStart = postCountPerSubpage * subpageIndex;
    const atFirstSubpage = subpageIndex <= 0;
    const atLastSubpage = subpageIndex >= subpageCount - 1;

    const defaultButtonStyle = css({
        padding: '0',
        fontSize: '1rem',
        fontFamily: 'inherit',
        color: theme.defaultColor,
        border: 'none',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    });

    const activeButtonStyle = css([defaultButtonStyle, {
        color: theme.darkColor,
        cursor: 'pointer',
        '&:hover, &:active, &:focus': {
            color: theme.lightColor
        }
    }]);

    return (
        <div className={css({
            overflowX: 'hidden'
        })}>
            {posts.slice(postIndexStart, postIndexStart + postCountPerSubpage).map((post, index) =>
                <Preview key={postIndexStart + index} post={post} />
            )}
            <div>
                <button
                    className={atFirstSubpage ? defaultButtonStyle : activeButtonStyle}
                    onClick={() => {
                        if (!atFirstSubpage) {
                            setSubpageIndex(subpageIndex - 1);
                        }
                    }}
                >
                    <Icon definition={faCaretLeft} /> Prev. page
                </button>
                <button
                    className={css([atLastSubpage ? defaultButtonStyle : activeButtonStyle, {
                        float: 'right'
                    }])}
                    onClick={() => {
                        if (!atLastSubpage) {
                            setSubpageIndex(subpageIndex + 1);
                        }
                    }}
                >
                    Next page <Icon definition={faCaretRight} />
                </button>
            </div>
        </div>
    );
};
