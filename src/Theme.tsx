import * as React from 'react';
import { createContext, useState, ReactNode } from 'react';

export interface Theme {
    backgroundColor: string;
    defaultColor: string;
    lightColor: string;
    darkColor: string;
}

export const ThemeContext = createContext({} as {
    theme: Theme,
    changeTheme: (theme: Theme) => any
});

export const darkTheme: Theme = {
    backgroundColor: '#222222',
    defaultColor: '#ffffff',
    lightColor: '#00f6ff',
    darkColor: '#00d3dc'
};

export const lightTheme: Theme = {
    backgroundColor: '#ffffff',
    defaultColor: '#000000',
    lightColor: '#82d7ff',
    darkColor: '#2188ff'
};

export const ThemeProvider = ({
    theme = darkTheme,
    children = null as ReactNode
}) => {
    const [currentTheme, setTheme] = useState(theme);

    return (
        <ThemeContext.Provider value={{
            theme: currentTheme,
            changeTheme: newTheme => {
                setTheme(newTheme);
            },
        }}>
            {children}
        </ThemeContext.Provider>
    );
};
