import * as React from 'react';
import { useContext } from 'react';
import { PreviewPage } from './PreviewPage';
import { Category } from '../common/Category';
import { DataContext } from '../common/Data';

export const CategoryPage = ({ category = '' as Category }) => {
    const { filterPostsByCategory } = useContext(DataContext);

    return <PreviewPage posts={filterPostsByCategory(category)} />;
};
