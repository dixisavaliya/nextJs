import React from 'react';
import Link from 'next/link';
import { IconCrossArrow } from '@/components/icon';

const ItemRelatedPost = ({ postData }) => {
    if (!postData) return null;

    return (
        <li>
            <Link href={postData.link} title={postData.title}>
                {postData.title}
                <i className='icon p-lg-3 p-2 text-success'>
                    <i className="icon p-lg-3 p-2"><IconCrossArrow width={24} height={24} /></i>
                </i>
            </Link>
        </li>
    );
};

export default ItemRelatedPost;

