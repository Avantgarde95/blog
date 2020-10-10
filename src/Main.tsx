/** @jsx jsx */

import './Polyfill';

import {jsx} from '@emotion/core';
import {useContext} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, useRoutes} from 'react-router-dom';
import {Header} from './Header';
import {PostPage} from './PostPage';
import {ThemeContext, ThemeProvider} from './Theme';
import {categories, posts} from './Posts';
import {PreviewPage} from './PreviewPage';
import {CategoryWidget} from './CategoryWidget';
import {SearchPage} from './SearchPage';
import {PathContext, PathProvider} from './Path';

const DefaultPage = () => <PreviewPage posts={posts}/>;

const NotFoundPage = () => {
    const theme = useContext(ThemeContext);
    return <div css={{color: theme.defaultColor}}>Wrong URL!</div>;
};

const AppRoutes = () => {
    const {basename} = useContext(PathContext);

    return useRoutes([
        {path: '/', element: <DefaultPage/>},
        ...posts.map(post => ({
            path: `post/${post.path}`,
            element: <PostPage post={post}/>
        })),
        ...categories.map(category => ({
            path: `category/${category.toLowerCase()}`,
            element: <PreviewPage posts={posts.filter(post => post.category === category)}/>
        })),
        {path: 'search/:query', element: <SearchPage posts={posts}/>},
        {path: '*', element: <NotFoundPage/>}
    ], basename);
}

const App = () => (
    <BrowserRouter>
        <PathProvider basename={document.getElementsByTagName('base')[0].getAttribute('href')!}>
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
        </PathProvider>
    </BrowserRouter>
);

const temporaryElements = document.getElementsByClassName('Temporary');

for (let i = 0; i < temporaryElements.length; i++) {
    temporaryElements[i]?.parentNode?.removeChild(temporaryElements[i]);
}

render(<App/>, document.body);
