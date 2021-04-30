import * as React from 'react';
import { Component, ErrorInfo, ReactNode, useContext } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { css, cx } from '@emotion/css';
import { Header } from './Header';
import { PostPage } from './PostPage';
import { ThemeContext, ThemeProvider } from './Theme';
import { PostContext, PostProvider } from '../common/PostContext';
import { PreviewPage } from './PreviewPage';
import { CategoryWidget } from './CategoryWidget';
import { SearchPage } from './SearchPage';
import { CategoryPage } from './CategoryPage';
import { PathContext, PathProvider } from './Path';
import { RecentPostsWidget } from './RecentPostsWidget';

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

const AppRoutes = () => {
    const { basename } = useContext(PathContext);
    const { posts, categories } = useContext(PostContext);

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
                element: <CategoryPage category={category} />
            })),
            { path: 'search/:query', element: <SearchPage /> },
            { path: '*', element: <NotFoundPage /> }
        ]}
    />;
}

const AppArea = ({ children = null as ReactNode }) => {
    const { theme, themeWillChange } = useContext(ThemeContext);
    const onWideScreen = '@media (min-width: 769px)';

    return (
        <div className={cx([
            css({
                overflowY: 'auto',
                boxSizing: 'border-box',
                width: '100%',
                height: '100%',
                backgroundColor: theme.backgroundColor,
                transition: 'color 0.5s, background-color 0.5s',
                [onWideScreen]: {
                    paddingTop: '1.5rem',
                    paddingBottom: '1.5rem'
                }
            }),
            themeWillChange && css({
                '& *': {
                    transition: 'color 0.5s, background-color 0.5s, border-color 0.5s'
                }
            })
        ])}>
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

export const App = () => (
    <BrowserRouter>
        <PathProvider basename={document.getElementsByTagName('base')[0].getAttribute('href')!}>
            <ThemeProvider>
                <PostProvider>
                    <AppArea>
                        <Header />
                        <CategoryWidget />
                        <RecentPostsWidget />
                        <AppRoutes />
                    </AppArea>
                </PostProvider>
            </ThemeProvider>
        </PathProvider>
    </BrowserRouter>
);
