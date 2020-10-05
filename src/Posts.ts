export const categories = ['Computer', 'Music', 'Misc'] as const;

export type Category = (typeof categories)[number];

export interface Post {
    path: string;
    title: string;
    date: Date;
    category: Category;
    load: () => Promise<{ default: string }>;
}

export const posts: Post[] = [
    {
        path: 'welcome',
        title: 'Welcome',
        date: new Date('2020-09-15'),
        category: 'Misc',
        load: () => import('./post/Welcome.md')
    },
    {
        path: 'test1',
        title: 'Test1',
        date: new Date('2020-10-03'),
        category: 'Computer',
        load: () => import('./post/Test1.md')
    },
    {
        path: 'test2',
        title: 'Test2',
        date: new Date('2020-10-04'),
        category: 'Computer',
        load: () => import('./post/Test2.md')
    },
    {
        path: 'test3',
        title: 'Test3',
        date: new Date('2020-10-05'),
        category: 'Computer',
        load: () => import('./post/Test3.md')
    }
];
