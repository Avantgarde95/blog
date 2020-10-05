/** @jsx jsx */

import './Polyfill';

import {jsx} from '@emotion/core';
import {render} from 'react-dom';
import {BrowserRouter, Outlet, useRoutes} from 'react-router-dom';
import {Header} from './Header';
import {PostPage} from './PostPage';
import {ThemeProvider} from './Theme';
import {categories, posts} from './Posts';
import {PreviewPage} from './PreviewPage';
import {CategoryWidget} from './CategoryWidget';
import {SearchPage} from './SearchPage';

const DefaultPage = () => <PreviewPage posts={posts}/>;

const categoryPaths = categories.map(category => ({
    path: category.toLowerCase(),
    element: <PreviewPage posts={posts.filter(post => post.category === category)}/>
}));

const postPaths = posts.map(post => ({
    path: post.path,
    element: <PostPage post={post}/>
}));

const AppRoutes = () => useRoutes([
    {path: '/', element: <DefaultPage/>},
    {
        path: 'category',
        element: <Outlet/>,
        children: [
            {path: '/', element: <DefaultPage/>},
            ...categoryPaths
        ]
    },
    {
        path: 'post',
        element: <Outlet/>,
        children: [
            {path: '/', element: <DefaultPage/>},
            ...postPaths
        ]
    },
    {
        path: 'search/:query',
        element: <SearchPage posts={posts}/>
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
                <CategoryWidget categories={categories} posts={posts}/>
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
