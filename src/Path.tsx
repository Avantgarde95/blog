import * as React from 'react';
import { createContext, ReactNode } from 'react';

interface PathSettings {
    basename: string;
}

export const PathContext = createContext({} as PathSettings);

export const PathProvider = ({ basename = '/', children = null as ReactNode }) => (
    <PathContext.Provider value={{
        basename: basename
    }}>
        {children}
    </PathContext.Provider>
);
