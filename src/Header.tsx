/** @jsx jsx */

import {jsx} from '@emotion/core';
import {Fragment, useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {ThemeContext} from './Theme';
import {Icon} from './Icon';
import {PathContext} from './Path';

const TitleButton = () => {
    const theme = useContext(ThemeContext);
    const {basename} = useContext(PathContext);
    const navigate = useNavigate();

    return (
        <button
            css={{
                cursor: 'pointer',
                padding: 0,
                fontFamily: 'inherit',
                fontWeight: 'bold',
                fontSize: '1.8rem',
                textAlign: 'left',
                border: 'none',
                color: theme.darkColor,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                '&:hover, &:active, &:focus': {
                    color: theme.lightColor
                }
            }}
            onClick={() => {
                navigate(basename);
            }}
        >
            Hunmin Park (Avantgarde95)
        </button>
    );
};

const Search = () => {
    const theme = useContext(ThemeContext);
    const {basename} = useContext(PathContext);
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
                    navigate(`${basename}search/${query}`);
                }}
            >
                <Icon definition={faSearch}/>
            </button>
        </Fragment>
    );
};

const sites = [
    {name: 'Homepage', url: 'https://avantgarde95.github.io/'},
    {name: 'Code', url: 'https://github.com/Avantgarde95/blog'}
];

const SiteLinks = () => {
    const theme = useContext(ThemeContext);

    return (
        <span>
            {sites.map(({name, url}) => (
                <a
                    css={{
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        color: theme.darkColor,
                        marginRight: '1rem',
                        '&:hover, &:active, &:focus': {
                            color: theme.lightColor
                        }
                    }}
                    href={url}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                >
                    {name}
                </a>
            ))}
        </span>
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
                marginBottom: '1rem',
                [onWideScreen]: {
                    display: 'inline-block',
                    width: '50%',
                    textAlign: 'right'
                }
            }}>
                <Search/>
            </div>
            <div css={{
                marginBottom: '1rem'
            }}>
                <SiteLinks/>
            </div>
            <div css={{
                color: theme.defaultColor,
                marginBottom: '1rem'
            }}>
                블로그 - 아직 개발중입니다!
                <br/>
                Blog - Still in development!
            </div>
        </div>
    );
};
