import * as React from 'react';
import { createContext, ReactNode } from 'react';

export interface Theme {
    defaultColor: string;
    lightColor: string;
    darkColor: string;
}

export const ThemeContext = createContext({} as Theme);

export const ThemeProvider = ({
    defaultColor = '#ffffff',
    lightColor = '#ffffff',
    darkColor = '#ffffff',
    children = null as ReactNode
}) => (
    <ThemeContext.Provider value={{
        defaultColor: defaultColor,
        lightColor: lightColor,
        darkColor: darkColor
    }}>
        {children}
    </ThemeContext.Provider>
);
