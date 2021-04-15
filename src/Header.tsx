import * as React from 'react';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { css } from '@emotion/css';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { Theme, ThemeContext, themeMap } from './Theme';
import { Icon } from './Icon';
import { PathContext } from './Path';

const TitleLink = () => {
    const { theme } = useContext(ThemeContext);
    const { basename } = useContext(PathContext);

    return (
        <Link
            className={css({
                cursor: 'pointer',
                textDecoration: 'none',
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
            })}
            title={'Home'}
            to={basename}
        >
            Hunmin Park (Avantgarde95)
        </Link>
    );
};

const Search = () => {
    const { theme } = useContext(ThemeContext);
    const { basename } = useContext(PathContext);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    return (
        <>
            <input
                className={css({
                    width: 'calc(100% - 3rem)',
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
                })}
                type={'text'}
                placeholder={'Search'}
                onChange={event => {
                    setQuery(event.target.value);
                }}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        navigate(`${basename}search/${query}`);
                    }
                }}
            />
            <button
                className={css({
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    border: 'none',
                    color: theme.darkColor,
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    '&:hover, &:active, &:focus': {
                        color: theme.lightColor
                    }
                })}
                title={`Search ${query}`}
                onClick={() => {
                    navigate(`${basename}search/${query}`);
                }}
            >
                <Icon definition={faSearch} />
            </button>
        </>
    );
};

const sites = [
    { name: 'Homepage', url: 'https://avantgarde95.github.io/' },
    { name: 'Code', url: 'https://github.com/Avantgarde95/blog' }
];

const SiteLinks = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <span>
            {sites.map(({ name, url }) => (
                <a
                    className={css({
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        color: theme.darkColor,
                        marginRight: '1rem',
                        '&:hover, &:active, &:focus': {
                            color: theme.lightColor
                        }
                    })}
                    title={name}
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

const ThemeButton = () => {
    const { theme, themeName, changeTheme } = useContext(ThemeContext);
    const isDarkTheme = themeName === 'Dark';

    const buttonStyle = (isOn: boolean, buttonTheme: Theme) => css(
        {
            boxSizing: 'border-box',
            padding: '0.2rem'
        },
        isOn ? {
            color: buttonTheme.darkColor,
            border: `1px solid ${buttonTheme.darkColor}`,
            '&:hover, &:active, &:focus': {
                color: buttonTheme.lightColor,
                border: `1px solid ${buttonTheme.lightColor}`
            }
        } : {
            color: '#aaaaaa',
            border: `1px solid #aaaaaa`
        }
    );

    return (
        <button
            className={css({
                display: 'block',
                cursor: 'pointer',
                padding: 0,
                marginTop: '1rem',
                //float: 'right',
                fontSize: '1rem',
                fontFamily: 'inherit',
                border: 'none',
                backgroundColor: 'rgba(0, 0, 0, 0)'
            })}
            onClick={() => {
                changeTheme(isDarkTheme ? 'Light' : 'Dark');
            }}
        >
            <span className={buttonStyle(isDarkTheme, themeMap['Dark'])}>
                <Icon definition={faMoon} /> Dark
            </span>
            <span className={buttonStyle(!isDarkTheme, themeMap['Light'])}>
                <Icon definition={faSun} /> Light
            </span>
        </button>
    );
};

export const Header = () => {
    const { theme } = useContext(ThemeContext);
    const onWideScreen = '@media (min-width: 769px)';

    return (
        <div className={css({
            width: '100%',
            color: theme.defaultColor
        })}>
            <div className={css({
                display: 'block',
                marginBottom: '1rem',
                [onWideScreen]: {
                    display: 'inline-block',
                    width: '70%'
                }
            })}>
                <TitleLink />
            </div>
            <div className={css({
                boxSizing: 'border-box',
                display: 'block',
                marginBottom: '1rem',
                [onWideScreen]: {
                    display: 'inline-block',
                    width: '30%',
                    textAlign: 'right'
                }
            })}>
                <Search />
            </div>
            <div className={css({
                marginBottom: '1rem'
            })}>
                <SiteLinks />
                <ThemeButton />
            </div>
        </div>
    );
};
