import * as React from 'react';
import { useContext } from 'react';
import { PreviewPage } from './PreviewPage';
import { Category } from '../common/Category';
import { PostContext } from '../common/PostContext';

export const CategoryPage = ({ category = '' as Category }) => {
    const { filterPostsByCategory } = useContext(PostContext);

    return <PreviewPage posts={filterPostsByCategory(category)} />;
};
