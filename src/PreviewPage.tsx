import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {css, keyframes} from '@emotion/css';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {ThemeContext} from './Theme';
import {Post} from './Post';
import {Icon} from './Icon';
import {PathContext} from './Path';
import {Category} from './Category';

const TitleButton = ({post = {} as Post}) => {
    const theme = useContext(ThemeContext);
    const {basename} = useContext(PathContext);
    const navigate = useNavigate();

    return (
        <button
            className={css({
                cursor: 'pointer',
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
            onClick={() => {
                navigate(`${basename}post/${post.path}`);
            }}
        >
            {post.title}
        </button>
    );
};

const PostDate = ({date = {} as Date}) => {
    const theme = useContext(ThemeContext);
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
    const theme = useContext(ThemeContext);

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

const Preview = ({post = {} as Post}) => {
    const theme = useContext(ThemeContext);
    const [preview, setPreview] = useState<string | null>(null);

    useEffect(() => {
        post.load().then(result => {
            setPreview(getAbbreviation(getTextFromHTML(result.html), 100));
        }).catch(() => {
            setPreview('Failed to load the post!');
        });
    }, [preview]);

    return (
        <div className={css({
            color: theme.defaultColor
        })}>
            {(preview === null) ? <Loading/> : preview}
        </div>
    );
};

const CategoryButton = ({category = '' as Category}) => {
    const theme = useContext(ThemeContext);
    const {basename} = useContext(PathContext);
    const navigate = useNavigate();

    return (
        <div className={css({
            marginTop: '0.5rem',
            marginBottom: '1rem',
            color: theme.defaultColor
        })}>
            Category:&nbsp;

            <button
                className={css({
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
                })}
                title={category}
                onClick={() => {
                    navigate(`${basename}category/${category.toLowerCase()}`);
                }}
            >
                {category}
            </button>
        </div>
    );
};

export const PreviewPage = ({posts = [] as Post[]}) => {
    const theme = useContext(ThemeContext);

    return (
        <div>
            {
                (posts.length === 0)
                    ? <span className={css({color: theme.defaultColor})}>No posts!</span>
                    : posts.map(post => (
                        <div className={css({
                            paddingBottom: '0.5rem',
                            marginBottom: '1.5rem',
                            borderBottom: `1px solid ${theme.darkColor}`,
                        })}>
                            <TitleButton post={post}/>
                            <PostDate date={post.date}/>
                            <Preview post={post}/>
                            <CategoryButton category={post.category}/>
                        </div>
                    ))
            }
        </div>
    );
};
