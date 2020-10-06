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
        path: 'markdowntest',
        title: 'Markdown test',
        date: new Date('2020-10-03'),
        category: 'Computer',
        load: () => import('./post/MarkdownTest.md')
    },
    {
        path: 'myguitars',
        title: 'My Guitars',
        date: new Date('2020-10-04'),
        category: 'Music',
        load: () => import('./post/MyGuitars.md')
    },
    {
        path: 'busantrip',
        title: 'Busan trip',
        date: new Date('2020-10-05'),
        category: 'Misc',
        load: () => import('./post/BusanTrip.md')
    },
    {
        path: 'sieve',
        title: 'Sieve of Eratosthenes',
        date: new Date('2020-10-05'),
        category: 'Computer',
        load: () => import('./post/Sieve.md')
    }
];
