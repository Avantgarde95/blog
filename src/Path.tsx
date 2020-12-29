/** @jsx jsx */

import {jsx} from '@emotion/core';
import {createContext, ReactNode} from 'react';

interface PathSettings {
    basename: string;
}

export const PathContext = createContext({} as PathSettings);

export const PathProvider = ({basename = '/', children = null as ReactNode}) => (
    <PathContext.Provider value={{
        basename: basename
    }}>
        {children}
    </PathContext.Provider>
);
