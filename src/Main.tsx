///<reference path="Type.d.ts"/>
/** @jsx jsx */

import './Polyfill';

import {jsx} from '@emotion/core';
import {render} from 'react-dom';
import {BrowserRouter, useRoutes} from 'react-router-dom';
import {Header} from './Header';
import {Post} from './Post';
import {ThemeProvider} from './Theme';
import {articles} from './Articles';

require('highlight.js/styles/monokai-sublime');

const AppRoutes = () => useRoutes([
    {path: '/', element: null},
    ...articles.map(article => (
        {path: article.path, element: <Post article={article}/>}
    ))
]);

const App = () => (
    <BrowserRouter>
        <ThemeProvider
            defaultColor={'#ffffff'}
            lightColor={'#00f6ff'}
            darkColor={'#00d3dc'}
        >
            <div css={{
                overflowY: 'auto',
                boxSizing: 'border-box',
                width: '100%',
                height: '100%',
                padding: '1.5rem'
            }}>
                <Header/>
                <AppRoutes/>
            </div>
        </ThemeProvider>
    </BrowserRouter>
);

const temporaryElements = document.getElementsByClassName('Temporary');

for (let i = 0; i < temporaryElements.length; i++) {
    temporaryElements[i]?.parentNode?.removeChild(temporaryElements[i]);
}

render(<App/>, document.body);
