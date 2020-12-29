import {Category} from './Category';

export interface Post {
    path: string;
    title: string;
    date: Date;
    category: Category;
    load: () => Promise<{ html: string }>;
}

export const allPosts: Post[] = [
    {
        path: 'reactiframehistory',
        title: 'Preventing iframe from affecting the history',
        date: new Date('2020-12-29'),
        category: 'Computer',
        load: () => import('./post/IframeHistory.md')
    },
    {
        path: 'githubpagesrouting',
        title: 'Routing in GitHub Pages',
        date: new Date('2020-12-29'),
        category: 'Computer',
        load: () => import('./post/GitHubPagesRouting.md')
    },
    {
        path: 'reacterrorhandling',
        title: 'Error handling in React.js',
        date: new Date('2020-12-29'),
        category: 'Computer',
        load: () => import('./post/ReactErrorHandling.md')
    },
    {
        path: 'christmas2020',
        title: 'Merry Christmas!',
        date: new Date('2020-12-28'),
        category: 'Computer',
        load: () => import('./post/Christmas2020.md')
    },
    {
        path: 'custommarkedrenderer',
        title: 'Customize marked.js renderer',
        date: new Date('2020-10-11'),
        category: 'Computer',
        load: () => import('./post/CustomMarkedRenderer.md')
    },
    {
        path: 'myguitars',
        title: 'My guitars',
        date: new Date('2020-10-11'),
        category: 'Music',
        load: () => import('./post/MyGuitars.md')
    },
    {
        path: 'markdowntest',
        title: 'Markdown test',
        date: new Date('2020-10-03'),
        category: 'Computer',
        load: () => import('./post/MarkdownTest.md')
    },
    {
        path: 'welcome',
        title: 'Welcome',
        date: new Date('2020-09-21'),
        category: 'Misc',
        load: () => import('./post/Welcome.md')
    }
];
