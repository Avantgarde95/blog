import * as React from 'react';
import { useContext } from 'react';
import { css } from '@emotion/css';
import { ThemeContext } from './Theme';
import { CategoryLink } from './CategoryLink';
import { PostContext } from '../common/PostContext';

export const CategoryWidget = () => {
    const { theme } = useContext(ThemeContext);
    const { categories, filterPostsByCategory } = useContext(PostContext);

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
                return <div>- <CategoryLink category={category} /> ({filterPostsByCategory(category).length})</div>;
            })}
        </div>
    );
};
