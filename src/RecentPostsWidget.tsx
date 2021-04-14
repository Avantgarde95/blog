import * as React from 'react';
import { useContext } from 'react';
import { css } from '@emotion/css';
import { Post } from './Post';
import { ThemeContext } from './Theme';
import { PostLink } from './PostLink';

export const RecentPostsWidget = ({ posts = [] as Post[] }) => {
    const { theme } = useContext(ThemeContext);
    const sortedPosts = posts.slice(0);

    sortedPosts.sort((post1, post2) => (-post1.date.getTime() + post2.date.getTime()));

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
            {sortedPosts.slice(0, 3).map(post => <div>- <PostLink post={post} /></div>)}
        </div>
    );
};
