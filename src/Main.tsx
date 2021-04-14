import './Polyfill';

import * as React from 'react';
import { Component, ErrorInfo, ReactNode, useContext } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { css } from '@emotion/css';
import { Header } from './Header';
import { PostPage } from './PostPage';
import { ThemeContext, ThemeProvider } from './Theme';
import { allPosts, Post } from './Post';
import { allCategories, Category } from './Category';
import { PreviewPage } from './PreviewPage';
import { CategoryWidget } from './CategoryWidget';
import { SearchPage } from './SearchPage';
import { CategoryPage } from './CategoryPage';
import { PathContext, PathProvider } from './Path';
import { RecentPostsWidget } from './RecentPostsWidget';
import './Highlight.css';

const NotFoundPage = () => {
    const { theme } = useContext(ThemeContext);
    return <div className={css({ color: theme.defaultColor })}>Wrong URL!</div>;
};

class ErrorHandler extends Component<{ children: ReactNode }, { hasError: boolean }> {
    constructor({ children = null }) {
        super({ children });
        this.state = { hasError: false };
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
    { basename = '/', routes = [] as { path: string, element: ReactNode }[] }
) => useRoutes(routes.map(({ path, element }, index) => (
    { path: path, element: <ErrorHandler key={index}>{element}</ErrorHandler> }
)), basename);

const AppRoutes = ({ posts = [] as Post[], categories = [] as readonly Category[] }) => {
    const { basename } = useContext(PathContext);

    return <SafeRoutes
        basename={basename}
        routes={[
            { path: '/', element: <PreviewPage posts={posts} /> },
            ...posts.map(post => ({
                path: `post/${post.path}`,
                element: <PostPage post={post} />
            })),
            ...categories.map(category => ({
                path: `category/${category.toLowerCase()}`,
                element: <CategoryPage category={category} posts={posts} />
            })),
            { path: 'search/:query', element: <SearchPage posts={posts} /> },
            { path: '*', element: <NotFoundPage /> }
        ]}
    />;
}

const AppArea = ({ children = null as ReactNode }) => {
    const { theme } = useContext(ThemeContext);
    const onWideScreen = '@media (min-width: 769px)';

    return (
        <div className={css({
            overflowY: 'auto',
            boxSizing: 'border-box',
            width: '100%',
            height: '100%',
            backgroundColor: theme.backgroundColor,
            [onWideScreen]: {
                paddingTop: '1.5rem',
                paddingBottom: '1.5rem'
            }
        })}>
            <div className={css({
                boxSizing: 'border-box',
                maxWidth: '769px',
                minHeight: '100%',
                margin: '0 auto',
                padding: '1.5rem',
                [onWideScreen]: {
                    border: `1px solid ${theme.darkColor}`
                }
            })}>
                {children}
            </div>
        </div>
    );
};

const App = () => (
    <BrowserRouter>
        <PathProvider basename={document.getElementsByTagName('base')[0].getAttribute('href')!}>
            <ThemeProvider defaultThemeName={'Dark'}>
                <AppArea>
                    <Header />
                    <CategoryWidget categories={allCategories} posts={allPosts} />
                    <RecentPostsWidget posts={allPosts} />
                    <AppRoutes posts={allPosts} categories={allCategories} />
                </AppArea>
            </ThemeProvider>
        </PathProvider>
    </BrowserRouter>
);

const temporaryElements = document.getElementsByClassName('Temporary');

while (temporaryElements.length > 0) {
    temporaryElements[0]?.parentNode?.removeChild(temporaryElements[0]);
}

render(<App />, document.body);
