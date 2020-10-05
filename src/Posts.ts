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
        date: new Date('2020-10-03'),
        category: 'Misc',
        load: () => import('./post/Welcome.md')
    },
    {
        path: 'test',
        title: 'Test',
        date: new Date('2020-10-04'),
        category: 'Computer',
        load: () => import('./post/Test.md')
    }
];
