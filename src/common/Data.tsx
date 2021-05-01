import * as React from 'react';
import { createContext, ReactNode } from 'react';
import { allCategories, Category } from './Category';
import { Post, allPosts } from './Post';

export const DataContext = createContext({} as {
    posts: readonly Post[],
    categories: readonly Category[],
    filterPostsByCategory: (category: Category) => Post[],
    filterPostsByQuery: (query: string) => Promise<Post[]>
});

function toSearchableString(value: string) {
    return value.trim().toLowerCase();
}

export const DataProvider = ({ children = null as ReactNode }) => {
    const currentPosts = allPosts.slice(0);
    currentPosts.sort((post1, post2) => (-post1.date.getTime() + post2.date.getTime()));

    const currentCategories = allCategories;

    return (
        <DataContext.Provider value={{
            posts: currentPosts,
            categories: currentCategories,
            filterPostsByCategory: category =>
                currentPosts.filter(post => post.category === category),
            filterPostsByQuery: query =>
                Promise.all(currentPosts.map(post => post.load())).then(results => {
                    const matchingPosts = [];
                    const searchableQuery = toSearchableString(query);

                    for (let i = 0; i < results.length; i++) {
                        if (
                            toSearchableString(currentPosts[i].title).includes(searchableQuery)
                            || toSearchableString(results[i].html).includes(searchableQuery)
                        ) {
                            matchingPosts.push(currentPosts[i]);
                        }
                    }

                    return matchingPosts;
                })
        }}>
            {children}
        </DataContext.Provider>
    );
};
