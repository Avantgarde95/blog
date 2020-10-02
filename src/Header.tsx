/** @jsx jsx */

import {jsx} from '@emotion/core';
import {Link} from './Common';

export const Header = () => (
    <div css={{
        color: '#ffffff'
    }}>
        <div css={{}}>
            <Link url={'#'}>Hunmin Park (Avantgarde95)</Link>
        </div>
        <div css={{}}>
            <input
                css={{}}
                type={'text'}
                placeholder={'Search'}
            />
        </div>
    </div>
);
