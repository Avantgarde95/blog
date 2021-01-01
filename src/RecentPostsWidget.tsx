import * as React from 'react';
import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {css} from '@emotion/css';
import {Post} from './Post';
import {ThemeContext} from './Theme';
import {PathContext} from './Path';

const RecentPost = ({post = {} as Post}) => {
    const theme = useContext(ThemeContext);
    const {basename} = useContext(PathContext);
    const navigate = useNavigate();

    return (
        <div>
            -&nbsp;
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
                title={post.title}
                onClick={() => {
                    navigate(`${basename}post/${post.path}`);
                }}
            >
                {post.title}
            </button>
        </div>
    );
};

export const RecentPostsWidget = ({posts = [] as Post[]}) => {
    const theme = useContext(ThemeContext);
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
            {sortedPosts.slice(0, 3).map(post => <RecentPost post={post}/>)}
        </div>
    );
};
