import * as React from 'react';
import { Post } from "./Post";
import { PreviewPage } from "./PreviewPage";
import { Category } from "./Category";

export const CategoryPage = ({ category = '' as Category, posts = [] as Post[] }) =>
    <PreviewPage posts={posts.filter(post => post.category === category)} />;
