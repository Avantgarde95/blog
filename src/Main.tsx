/** @jsx jsx */

import './Polyfill';

import {jsx} from '@emotion/core';
import {Component, ErrorInfo, ReactNode, useContext} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, useRoutes} from 'react-router-dom';
import {Header} from './Header';
import {PostPage} from './PostPage';
import {ThemeContext, ThemeProvider} from './Theme';
import {allPosts, Post} from './Post';
import {allCategories, Category} from './Category';
import {PreviewPage} from './PreviewPage';
import {CategoryWidget} from './CategoryWidget';
import {SearchPage} from './SearchPage';
import {PathContext, PathProvider} from './Path';
import {RecentPostsWidget} from './RecentPostsWidget';

import './Luminous';
import './Highlight';

const NotFoundPage = () => {
    const theme = useContext(ThemeContext);
    return <div css={{color: theme.defaultColor}}>Wrong URL!</div>;
};

class ErrorHandler extends Component<{ children: ReactNode }, { hasError: boolean }> {
    constructor({children = null}) {
        super({children});
        this.state = {hasError: false};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error(error?.toString());
        console.error(errorInfo?.componentStack);
    }

    render() {
        return this.props.children;
    }
}

const SafeRoutes = (
    {basename = '/', routes = [] as { path: string, element: ReactNode }[]}
) => useRoutes(routes.map(({path, element}, index) => (
    {path: path, element: <ErrorHandler key={index}>{element}</ErrorHandler>}
)), basename);

const AppRoutes = ({posts = [] as Post[], categories = [] as readonly Category[]}) => {
    const {basename} = useContext(PathContext);

    return <SafeRoutes
        basename={basename}
        routes={[
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
        ]}
    />;
}

const AppArea = ({children = null as ReactNode}) => {
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
