export type Category = 'Computer' | 'Music' | 'Misc';

export interface Article {
    path: string;
    title: string;
    category: Category;
    load: () => Promise<{ default: string }>;
}

export const articles: Article[] = [
    {
        path: 'welcome',
        title: 'Welcome',
        category: 'Misc',
        load: () => import('./article/Welcome.md')
    },
    {
        path: 'test',
        title: 'Test',
        category: 'Computer',
        load: () => import('./article/Test.md')
    }
];
