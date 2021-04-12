import * as React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';
import { Category } from './Category';
import { ThemeContext } from './Theme';
import { PathContext } from './Path';

export const CategoryLink = ({ category = '' as Category }) => {
    const theme = useContext(ThemeContext);
    const { basename } = useContext(PathContext);

    return (
        <Link
            className={css({
                cursor: 'pointer',
                textDecoration: 'none',
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
            title={category}
            to={`${basename}category/${category.toLowerCase()}`}
        >
            {category}
        </Link>
    );
};