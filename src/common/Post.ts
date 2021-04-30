import { Category } from './Category';

export interface Post {
    path: string;
    title: string;
    date: Date;
    category: Category;
    load: () => Promise<{ html: string }>;
}
