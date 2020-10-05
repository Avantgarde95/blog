/** @jsx jsx */

import {jsx, keyframes} from '@emotion/core';
import {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {ThemeContext} from './Theme';
import {Post} from './Posts';
import {Icon} from './Icon';

const TitleButton = ({article = {} as Post}) => {
    const theme = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <button
            css={{
                cursor: 'pointer',
                padding: '0',
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
            }}
            onClick={() => {
                navigate(`/post/${article.path}`, {replace: true});
            }}
        >
            {article.title}
        </button>
    );
};

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

const Preview = ({article = {} as Post}) => {
    const theme = useContext(ThemeContext);
    const [preview, setPreview] = useState<string | null>(null);

    useEffect(() => {
        article.load().then(result => {
            setPreview(getAbbreviation(getTextFromHTML(result.default), 100));
        }).catch(() => {
            setPreview('Failed to load the article!');
        });
    });

    return (
        <div css={{
            color: theme.defaultColor
        }}>
            {(preview === null) ? <Loading/> : preview}
        </div>
    );
};

const Category = ({category = ''}) => {
    const theme = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <div css={{
            marginTop: '0.5rem',
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

export const PreviewPage = ({articles = [] as Post[]}) => {
    const theme = useContext(ThemeContext);

    return (
        <div>
            {articles.map(article => (
                <div css={{
                    paddingBottom: '0.5rem',
                    marginBottom: '1.5rem',
                    borderBottom: `1px solid ${theme.darkColor}`,
                }}>
                    <TitleButton article={article}/>
                    <PostDate date={article.date}/>
                    <Preview article={article}/>
                    <Category category={article.category}/>
                </div>
            ))}
        </div>
    );
};