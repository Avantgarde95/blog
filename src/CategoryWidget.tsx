/** @jsx jsx */

import {jsx} from '@emotion/core';
import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {Category, Post} from './Posts';
import {ThemeContext} from './Theme';
import {PathContext} from './Path';

const Category = ({category = {} as Category, postCount = 0}) => {
    const theme = useContext(ThemeContext);
    const {basename} = useContext(PathContext);
    const navigate = useNavigate();

    return (
        <div>
            -&nbsp;
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
                    navigate(`${basename}category/${category}`);
                }}
            >
                {category}
            </button>
            &nbsp;({postCount})
        </div>
    );
};

export const CategoryWidget = ({categories = [] as readonly Category[], posts = [] as Post[]}) => {
    const theme = useContext(ThemeContext);

    return (
        <div css={{
            display: 'inline-block',
            marginRight: '1rem',
            marginBottom: '1rem',
            color: theme.defaultColor
        }}>
            <div css={{
                fontWeight: 'bold'
            }}>
                Category
            </div>
            {categories.map(category => (
                <Category
                    category={category}
                    postCount={posts.filter(post => post.category === category).length}
                />
            ))}
        </div>
    );
};
