import * as React from 'react';
import { createContext, useState, ReactNode } from 'react';

const themeNames = ['Dark', 'Light'] as const;

export type ThemeName = (typeof themeNames)[number];

export interface Theme {
    backgroundColor: string;
    defaultColor: string;
    lightColor: string;
    darkColor: string;
}

export const themeMap: { [name: string]: Theme } = {
    Dark: {
        backgroundColor: '#222222',
        defaultColor: '#ffffff',
        lightColor: '#00f6ff',
        darkColor: '#00d3dc'
    },
    Light: {
        backgroundColor: '#ffffff',
        defaultColor: '#000000',
        lightColor: '#82d7ff',
        darkColor: '#2188ff'
    }
};

export const ThemeContext = createContext({} as {
    theme: Theme,
    themeName: ThemeName,
    themeWillChange: boolean,
    changeTheme: (name: ThemeName) => any
});

export const ThemeProvider = ({
    children = null as ReactNode
}) => {
    const storedThemeName = localStorage.getItem('themeName');

    const defaultThemeName: ThemeName = ((storedThemeName === null) || (storedThemeName === 'Dark'))
        ? 'Dark'
        : 'Light';

    const [currentThemeName, setTheme] = useState(defaultThemeName);
    const [currentThemeWillChange, setThemeWillChange] = useState(false);

    return (
        <ThemeContext.Provider value={{
            theme: themeMap[currentThemeName],
            themeName: currentThemeName,
            themeWillChange: currentThemeWillChange,
            changeTheme: themeName => {
                setThemeWillChange(true);
                setTheme(themeName);
                localStorage.setItem('themeName', themeName);
                setTimeout(() => { setThemeWillChange(false); }, 500);
            },
        }}>
            {children}
        </ThemeContext.Provider>
    );
};
