export type Category = 'Computer' | 'Music' | 'Misc';

export interface Article {
    path: string;
    title: string;
    date: Date;
    category: Category;
    load: () => Promise<{ default: string }>;
}

export const articles: Article[] = [
    {
        path: 'welcome',
        title: 'Welcome',
        date: new Date('2020-10-03'),
        category: 'Misc',
        load: () => import('./article/Welcome.md')
    },
    {
        path: 'test',
        title: 'Test',
        date: new Date('2020-10-04'),
        category: 'Computer',
        load: () => import('./article/Test.md')
    }
];
