/** @jsx jsx */

import {jsx, keyframes} from '@emotion/core';
import {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {Post} from './Posts';
import {ThemeContext} from './Theme';
import {Icon} from './Icon';
import {PreviewPage} from './PreviewPage';

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
    const theme = useContext(ThemeContext);

    return (
        <div css={{
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: theme.defaultColor
        }}>
            Searching...&nbsp;
            <Icon css={{
                animation: `${loadingAnimation} 0.5s infinite`
            }} definition={faClock}/>
        </div>
    );
};

function processString(value: string) {
    return value.trim().toLowerCase();
}

export const SearchPage = ({posts = [] as Post[]}) => {
    const {query} = useParams();
    const [postsToPreview, setPostsToPreview] = useState<Post[] | null>(null);

    useEffect(() => {
        Promise.all(posts.map(post => post.load())).then(results => {
            const matchingPosts = [];
            const processedQuery = processString(query);

            for (let i = 0; i < results.length; i++) {
                if (
                    processString(posts[i].title).includes(processedQuery)
                    || processString(results[i].default).includes(processedQuery)
                ) {
                    matchingPosts.push(posts[i]);
                }
            }

            setPostsToPreview(matchingPosts);
        });
    }, [postsToPreview]);

    return (postsToPreview === null) ? <Searching/> : <PreviewPage posts={postsToPreview}/>;
};