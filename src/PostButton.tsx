import * as React from 'react';
import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {css} from '@emotion/css';
import {Post} from './Post';
import {ThemeContext} from './Theme';
import {PathContext} from './Path';

export const PostButton = ({post = {} as Post}) => {
    const theme = useContext(ThemeContext);
    const {basename} = useContext(PathContext);
    const navigate = useNavigate();

    return (
        <span
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
            tabIndex={0}
            title={post.title}
            onClick={() => {
                navigate(`${basename}post/${post.path}`);
            }}
        >
            {post.title}
        </span>
    );
};
