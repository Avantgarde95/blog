import * as React from 'react';
import { useContext } from 'react';
import { css } from '@emotion/css';
import { ThemeContext } from './Theme';
import { PostLink } from './PostLink';
import { PostContext } from '../common/PostContext';

export const RecentPostsWidget = () => {
    const { theme } = useContext(ThemeContext);
    const { posts } = useContext(PostContext);

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
