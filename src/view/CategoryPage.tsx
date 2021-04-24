import * as React from 'react';
import { Post } from '../common/Post';
import { PreviewPage } from './PreviewPage';
import { Category } from '../common/Category';

export const CategoryPage = ({ category = '' as Category, posts = [] as Post[] }) =>
    <PreviewPage posts={posts.filter(post => post.category === category)} />;
