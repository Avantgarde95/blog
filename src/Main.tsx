/** @jsx jsx */

import './Polyfill';

import {jsx} from '@emotion/core';
import {ReactNode, useContext} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, useRoutes} from 'react-router-dom';
import {Header} from './Header';
import {PostPage} from './PostPage';
import {ThemeContext, ThemeProvider} from './Theme';
import {allCategories, allPosts, Category, Post} from './Post';
import {PreviewPage} from './PreviewPage';
import {CategoryWidget} from './CategoryWidget';
import {SearchPage} from './SearchPage';
import {PathContext, PathProvider} from './Path';
import {RecentPostsWidget} from './RecentPostsWidget';

const NotFoundPage = () => {
    const theme = useContext(ThemeContext);
    return <div css={{color: theme.defaultColor}}>Wrong URL!</div>;
};

const AppRoutes = ({posts = [] as Post[], categories = [] as readonly Category[]}) => {
    const {basename} = useContext(PathContext);

    return useRoutes([
        {path: '/', element: <PreviewPage posts={posts}/>},
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

const AppArea = ({children = {} as ReactNode}) => {
    const theme = useContext(ThemeContext);
    const onWideScreen = '@media (min-width: 769px)';

    return (
        <div css={{
            overflowY: 'auto',
            boxSizing: 'border-box',
            width: '100%',
            height: '100%',
            [onWideScreen]: {
                paddingTop: '1.5rem'
            }
        }}>
            <div css={{
                boxSizing: 'border-box',
                maxWidth: '769px',
                margin: '0 auto',
                padding: '1.5rem',
                [onWideScreen]: {
                    border: `1px solid ${theme.darkColor}`
                }
            }}>
                {children}
            </div>
        </div>
    );
};

const App = () => (
    <BrowserRouter>
        <PathProvider basename={document.getElementsByTagName('base')[0].getAttribute('href')!}>
            <ThemeProvider
                defaultColor={'#ffffff'}
                lightColor={'#00f6ff'}
                darkColor={'#00d3dc'}
            >
                <AppArea>
                    <Header/>
                    <CategoryWidget categories={allCategories} posts={allPosts}/>
                    <RecentPostsWidget posts={allPosts}/>
                    <AppRoutes posts={allPosts} categories={allCategories}/>
                </AppArea>
            </ThemeProvider>
        </PathProvider>
    </BrowserRouter>
);

const temporaryElements = document.getElementsByClassName('Temporary');

for (let i = 0; i < temporaryElements.length; i++) {
    temporaryElements[i]?.parentNode?.removeChild(temporaryElements[i]);
}

render(<App/>, document.body);
