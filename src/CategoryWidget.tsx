import * as React from 'react';
import { useContext } from 'react';
import { css } from '@emotion/css';
import { Post } from './Post';
import { Category } from './Category';
import { ThemeContext } from './Theme';
import { CategoryLink } from './CategoryLink';

export const CategoryWidget = ({ categories = [] as readonly Category[], posts = [] as Post[] }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={css({
            display: 'inline-block',
            marginRight: '1rem',
            marginBottom: '1rem',
            color: theme.defaultColor
        })}>
            <div className={css({
                fontWeight: 'bold'
            })}>
                Category
            </div>
            {categories.map(category => {
                const postCount = posts.filter(post => post.category === category).length;
                return <div>- <CategoryLink category={category} /> ({postCount})</div>;
            })}
        </div>
    );
};
