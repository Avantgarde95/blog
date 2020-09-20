/** @jsx jsx */

import './Polyfill';

import {Global, jsx} from '@emotion/core';
import {render} from 'react-dom';
import {DiscussionEmbed} from 'disqus-react';
import {BrowserRouter, useRoutes} from 'react-router-dom';

require('highlight.js/styles/monokai-sublime');

const Welcome = require('./article/Welcome');
const Test = require('./article/Test');

const Article = ({html = ''}) => (
    <div dangerouslySetInnerHTML={{__html: html}}/>
);

const AppRoutes = (
    {routes = [] as { title: string, path: string, html: string }[]}
) => useRoutes(routes.map(({title, path, html}, index) => (
    {
        path: path, element: (
            <div>
                <Article html={html}/>
                <DiscussionEmbed shortname={title} config={{
                    url: path,
                    identifier: path,
                    title: title
                }}/>
            </div>
        )
    }
)));

const App = () => (
    <BrowserRouter>
        <Global styles={{}}/>
        <AppRoutes routes={[
            {title: 'Welcome', path: '/', html: Welcome},
            {title: 'Test', path: '/test', html: Test}
        ]}/>
        <DiscussionEmbed shortname={'Welcome'} config={{}}/>
    </BrowserRouter>
);

const temporaryElements = document.getElementsByClassName('Temporary');

for (let i = 0; i < temporaryElements.length; i++) {
    temporaryElements[i]?.parentNode?.removeChild(temporaryElements[i]);
}

render(<App/>, document.body);
