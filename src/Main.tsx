///<reference path="Type.d.ts"/>
/** @jsx jsx */

import './Polyfill';

import {jsx} from '@emotion/core';
import {render} from 'react-dom';
import {HashRouter, useRoutes} from 'react-router-dom';
import {Header} from './Header';
import {Article, Post} from './Post';
import {ThemeProvider} from './Theme';

require('highlight.js/styles/monokai-sublime');

const articles: Article[] = [
    {path: 'welcome', title: 'Welcome', load: () => import('./article/Welcome.md')},
    {path: 'test', title: 'Test', load: () => import('./article/Test.md')}
];

const AppRoutes = () => useRoutes([
    {path: '/', element: null},
    ...articles.map(article => (
        {path: article.path, element: <Post article={article}/>}
    ))
]);

// TODO: Find out why routing is strange on IE.
// TODO: Find out why BrowserRouter does not work on IE.
const App = () => (
    <HashRouter>
        <ThemeProvider lightColor={'#00c7d6'} darkColor={'#007b84'}>
            <div css={{
                boxSizing: 'border-box',
                width: '100%',
                height: '100%',
                padding: '1.5rem'
            }}>
                <Header/>
                <AppRoutes/>
            </div>
        </ThemeProvider>
    </HashRouter>
);

const temporaryElements = document.getElementsByClassName('Temporary');

for (let i = 0; i < temporaryElements.length; i++) {
    temporaryElements[i]?.parentNode?.removeChild(temporaryElements[i]);
}

render(<App/>, document.body);
