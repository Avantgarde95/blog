///<reference path="Type.d.ts"/>
/** @jsx jsx */

import './Polyfill';

import {jsx} from '@emotion/core';
import {render} from 'react-dom';
import {BrowserRouter, Outlet, useRoutes} from 'react-router-dom';
import {Header} from './Header';
import {Post} from './Post';
import {ThemeProvider} from './Theme';
import {articles, categories} from './Articles';
import {Preview} from './Preview';

const Default = () => <Preview articles={articles}/>;

const AppRoutes = () => useRoutes([
    {path: '/', element: <Default/>},
    {
        path: 'category',
        element: <Outlet/>,
        children: [
            {path: '/', element: <Default/>},
            ...categories.map(category => (
                {
                    path: category.toLowerCase(),
                    element: <Preview articles={articles.filter(article => article.category === category)}/>
                }
            ))
        ]
    },
    {
        path: 'post',
        element: <Outlet/>,
        children: [
            {path: '/', element: <Default/>},
            ...articles.map(article => (
                {path: article.path, element: <Post article={article}/>}
            ))
        ]
    },
    {path: '*', element: <div>Wrong URL!</div>}
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
