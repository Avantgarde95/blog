/** @jsx jsx */

import {jsx} from '@emotion/core';
import {createContext, ReactNode} from 'react';

export interface Theme {
    defaultColor: string;
    lightColor: string;
    darkColor: string;
}

export const ThemeContext = createContext({} as Theme);

export const ThemeProvider = (
    {
        defaultColor = '#ffffff',
        lightColor = '#ffffff',
        darkColor = '#ffffff',
        children = {} as ReactNode
    }
) => (
    <ThemeContext.Provider value={{
        defaultColor: defaultColor,
        lightColor: lightColor,
        darkColor: darkColor
    }}>
        {children}
    </ThemeContext.Provider>
);
