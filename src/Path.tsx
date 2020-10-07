/** @jsx jsx */

import {jsx} from '@emotion/core';
import {createContext, ReactNode} from 'react';

interface PathSettings {
    basename: string | null;
    routesBasename: string | undefined;
    navigateBasename: string;
}

export const PathContext = createContext({} as PathSettings);

export const PathProvider = ({basename = null as string | null, children = {} as ReactNode}) => (
    <PathContext.Provider value={{
        basename: basename,
        routesBasename: (basename === null) ? undefined : basename,
        navigateBasename: (basename === null) ? '' : `/${basename}`
    }}>
        {children}
    </PathContext.Provider>
);
