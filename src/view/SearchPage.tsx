import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { css, keyframes } from '@emotion/css';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { ThemeContext } from './Theme';
import { Icon } from './Icon';
import { PreviewPage } from './PreviewPage';
import { PostContext } from '../common/PostContext';
import { Post } from '../common/Post';

const loadingAnimation = keyframes({
    '0%': {
        opacity: 0
    },
    '50%': {
        opacity: 1
    },
    '100%': {
        opacity: 0
    }
});

const Searching = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={css({
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: theme.defaultColor
        })}>
            Searching...&nbsp;
            <Icon
                className={css({
                    animation: `${loadingAnimation} 0.5s infinite`
                })}
                definition={faClock}
            />
        </div>
    );
};

export const SearchPage = () => {
    const { query } = useParams();
    const [postsToPreview, setPostsToPreview] = useState<Post[] | null>(null);
    const { filterPostsByQuery } = useContext(PostContext);

    useEffect(() => {
        filterPostsByQuery(query).then(posts => {
            setPostsToPreview(posts);
        });
    }, [postsToPreview]);

    return (postsToPreview === null) ? <Searching /> : <PreviewPage posts={postsToPreview} />;
};
