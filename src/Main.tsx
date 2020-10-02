/** @jsx jsx */

import './Polyfill';

import {jsx} from '@emotion/core';
import {render} from 'react-dom';
import {BrowserRouter, useRoutes} from 'react-router-dom';
import {Header} from './Header';
import {Post} from './Post';
import {ThemeProvider} from './Theme';

require('highlight.js/styles/monokai-sublime');

const articles = [
    {path: 'welcome', title: 'Welcome', html: require('./article/Welcome')},
    {path: 'test', title: 'Test', html: require('./article/Test')}
];

const AppRoutes = () => useRoutes(articles.map(article =>
    ({path: article.path, element: <Post {...article}/>})
));

const App = () => (
    <BrowserRouter>
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
    </BrowserRouter>
);

const temporaryElements = document.getElementsByClassName('Temporary');

for (let i = 0; i < temporaryElements.length; i++) {
    temporaryElements[i]?.parentNode?.removeChild(temporaryElements[i]);
}

render(<App/>, document.body);
