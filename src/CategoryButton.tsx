import * as React from 'react';
import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {css} from '@emotion/css';
import {Category} from './Category';
import {ThemeContext} from './Theme';
import {PathContext} from './Path';

export const CategoryButton = ({category = '' as Category}) => {
    const theme = useContext(ThemeContext);
    const {basename} = useContext(PathContext);
    const navigate = useNavigate();

    return (
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
            title={category}
            onClick={() => {
                navigate(`${basename}category/${category.toLowerCase()}`);
            }}
        >
            {category}
        </button>
    );
};
