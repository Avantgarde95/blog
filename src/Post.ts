export const allCategories = ['Computer', 'Music', 'Misc'] as const;

export type Category = (typeof allCategories)[number];

export interface Post {
    path: string;
    title: string;
    date: Date;
    category: Category;
    load: () => Promise<{ title: string, html: string }>;
}

export const allPosts: Post[] = [
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
