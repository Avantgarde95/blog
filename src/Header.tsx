/** @jsx jsx */

import {jsx} from '@emotion/core';
import {Fragment, useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {ThemeContext} from './Theme';
import {Icon} from './Icon';

const TitleButton = () => {
    const theme = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <button
            css={{
                cursor: 'pointer',
                padding: 0,
                fontFamily: 'inherit',
                fontWeight: 'bold',
                fontSize: '1.8rem',
                border: 'none',
                color: theme.darkColor,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                '&:hover, &:active, &:focus': {
                    color: theme.lightColor
                }
            }}
            onClick={() => {
                navigate('/', {replace: true});
            }}
        >
            Hunmin Park (Avantgarde95)
        </button>
    );
};

// TODO: Fix the bug - The webpage freezes when we click the search button multiple times.
const Search = () => {
    const theme = useContext(ThemeContext);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    return (
        <Fragment>
            <input
                css={{
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    color: theme.defaultColor,
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    outline: 'none',
                    border: `solid 1px ${theme.darkColor}`,
                    borderRadius: 0,
                    '&:hover, &:active, &:focus': {
                        border: `solid 1px ${theme.lightColor}`,
                    }
                }}
                type={'text'}
                placeholder={'Search'}
                onChange={event => {
                    setQuery(event.target.value);
                }}
            />
            <button
                css={{
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    border: 'none',
                    color: theme.darkColor,
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    '&:hover, &:active, &:focus': {
                        color: theme.lightColor
                    }
                }}
                onClick={() => {
                    navigate(`/search/${query}`, {replace: true});
                }}
            >
                <Icon definition={faSearch}/>
            </button>
        </Fragment>
    );
};

export const Header = () => {
    const theme = useContext(ThemeContext);
    const onWideScreen = '@media (min-width: 769px)';

    return (
        <div css={{
            width: '100%',
            color: theme.defaultColor
        }}>
            <div css={{
                display: 'block',
                marginBottom: '1rem',
                [onWideScreen]: {
                    display: 'inline-block',
                    width: '50%'
                }
            }}>
                <TitleButton/>
            </div>
            <div css={{
                boxSizing: 'border-box',
                display: 'block',
                marginBottom: '2rem',
                [onWideScreen]: {
                    display: 'inline-block',
                    width: '50%',
                    textAlign: 'right'
                }
            }}>
                <Search/>
            </div>
        </div>
    );
};
