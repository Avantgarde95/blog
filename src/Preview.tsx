/** @jsx jsx */

import {jsx} from '@emotion/core';
import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {ThemeContext} from './Theme';
import {Article} from './Articles';

const PostButton = ({article = {} as Article}) => {
    const theme = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <button
            css={{
                cursor: 'pointer',
                padding: '0',
                marginBottom: '0.5rem',
                fontFamily: 'inherit',
                fontSize: '1.8rem',
                border: 'none',
                color: theme.darkColor,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                '&:hover, &:active, &:focus': {
                    color: theme.lightColor
                }
            }}
            onClick={() => {
                navigate(article.path, {replace: true});
            }}
        >{article.title}</button>
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
            {year}:{month}:{day}
        </span>
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

export const Preview = ({articles = [] as Article[]}) => {
    const theme = useContext(ThemeContext);

    return (
        <div css={{
            marginTop: '1rem'
        }}>
            {articles.map(article => (
                <div css={{
                    paddingBottom: '0.5rem',
                    marginBottom: '1.5rem',
                    borderBottom: `1px solid ${theme.darkColor}`,
                }}>
                    <PostButton article={article}/>
                    <PostDate date={article.date}/>
                    <Category category={article.category}/>
                </div>
            ))}
        </div>
    );
};
