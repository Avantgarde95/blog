import * as React from 'react';
import { useContext } from 'react';
import { css } from '@emotion/css';
import { ThemeContext } from '../common/Theme';
import { PostLink } from './PostLink';
import { DataContext } from '../common/Data';

export const RecentPostsWidget = () => {
    const { theme } = useContext(ThemeContext);
    const { posts } = useContext(DataContext);

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
                Recent posts
            </div>
            {posts.slice(0, 3).map(post => <div>- <PostLink post={post} /></div>)}
        </div>
    );
};
