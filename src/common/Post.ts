import { Category } from './Category';

export interface Post {
    path: string;
    title: string;
    date: Date;
    category: Category;
    load: () => Promise<{ html: string }>;
}

export const allPosts: Post[] = [
    {
        path: 'wslgdisplayissue',
        title: 'Solving "Cannot open display" issue in WSLg',
        date: new Date('2022-03-31'),
        category: 'Computer',
        load: () => import('../post/WSLgDisplayIssue.md')
    },
    {
        path: 'storybookstyle',
        title: 'Loader conflict in Storybook Webpack configuration',
        date: new Date('2022-02-05'),
        category: 'Computer',
        load: () => import('../post/StorybookStyle.md')
    },
    {
        path: 'dropdownblurclick',
        title: 'Mixing blur event and click event',
        date: new Date('2022-01-28'),
        category: 'Computer',
        load: () => import('../post/DropdownBlurClick.md')
    },
    {
        path: 'flexminheight',
        title: 'Fix flexbox overflow using min-height',
        date: new Date('2022-01-22'),
        category: 'Computer',
        load: () => import('../post/FlexMinHeight.md')
    },
    {
        path: 'cssbordertriangle',
        title: 'Drawing a triangle using CSS border',
        date: new Date('2022-01-22'),
        category: 'Computer',
        load: () => import('../post/CSSBorderTriangle.md')
    },
    {
        path: 'ssrwindow',
        title: 'window object when using SSR (ex. Next.js)',
        date: new Date('2022-01-22'),
        category: 'Computer',
        load: () => import('../post/SSRWindow.md')
    },
    {
        path: 'typescriptenumandstringuniontype',
        title: 'enum vs string union type in TypeScript',
        date: new Date('2021-10-19'),
        category: 'Computer',
        load: () => import('../post/TypeScriptEnumAndStringUnionType.md')
    },
    {
        path: 'customjesttransformer',
        title: 'Custom Jest transformer',
        date: new Date('2021-10-19'),
        category: 'Computer',
        load: () => import('../post/CustomJestTransformer.md')
    },
    {
        path: 'crtp',
        title: 'CRTP (Curiously Recurring Template Pattern)',
        date: new Date('2021-06-10'),
        category: 'Computer',
        load: () => import('../post/CRTP.md')
    },
    {
        path: 'htmltext',
        title: 'Get the pure text from a HTML text',
        date: new Date('2021-05-01'),
        category: 'Computer',
        load: () => import('../post/HTMLText.md')
    },
    {
        path: 'typescriptstringuniontype',
        title: 'Generate a union type from an array in TypeScript',
        date: new Date('2021-04-14'),
        category: 'Computer',
        load: () => import('../post/TypeScriptStringUnionType.md')
    },
    {
        path: 'smartpointertree',
        title: 'Creating a tree using the smart pointer',
        date: new Date('2021-04-12'),
        category: 'Computer',
        load: () => import('../post/SmartPointerTree.md')
    },
    {
        path: 'impressiveslipknotliveperformances',
        title: 'Impressive Slipknot live performances',
        date: new Date('2021-01-18'),
        category: 'Music',
        load: () => import('../post/ImpressiveSlipknotLivePerformances.md')
    },
    {
        path: 'reactiframehistory',
        title: 'Preventing iframe from affecting the history',
        date: new Date('2020-12-29'),
        category: 'Computer',
        load: () => import('../post/IframeHistory.md')
    },
    {
        path: 'githubpagesrouting',
        title: 'Routing in GitHub Pages',
        date: new Date('2020-12-29'),
        category: 'Computer',
        load: () => import('../post/GitHubPagesRouting.md')
    },
    {
        path: 'reacterrorhandling',
        title: 'Error handling in React.js',
        date: new Date('2020-12-29'),
        category: 'Computer',
        load: () => import('../post/ReactErrorHandling.md')
    },
    {
        path: 'christmas2020',
        title: 'Merry Christmas!',
        date: new Date('2020-12-28'),
        category: 'Computer',
        load: () => import('../post/Christmas2020.md')
    },
    {
        path: 'custommarkedrenderer',
        title: 'Customize marked.js renderer',
        date: new Date('2020-10-11'),
        category: 'Computer',
        load: () => import('../post/CustomMarkedRenderer.md')
    },
    {
        path: 'myguitars',
        title: 'My guitars',
        date: new Date('2020-10-11'),
        category: 'Music',
        load: () => import('../post/MyGuitars.md')
    },
    {
        path: 'markdowntest',
        title: 'Markdown test',
        date: new Date('2020-10-03'),
        category: 'Computer',
        load: () => import('../post/MarkdownTest.md')
    },
    {
        path: 'welcome',
        title: 'Welcome',
        date: new Date('2020-09-21'),
        category: 'Misc',
        load: () => import('../post/Welcome.md')
    }
];
