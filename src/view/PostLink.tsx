import * as React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';
import { ThemeContext } from '../common/Theme';
import { PathContext } from '../common/Path';
import { Post } from '../common/Post';

export const PostLink = ({ post = {} as Post }) => {
    const { theme } = useContext(ThemeContext);
    const { basename } = useContext(PathContext);

    return (
        <Link
            className={css({
                cursor: 'pointer',
                textDecoration: 'none',
                wordBreak: 'break-all',
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
            tabIndex={0}
            title={post.title}
            to={`${basename}post/${post.path}`}
        >
            {post.title}
        </Link>
    );
};
