import React from 'react';
import Link from 'next/link';
import { IconRightArrow } from '@/components/icon';

const ItemCareer = ({ careerData }) => {
    if (!careerData) return null;

    return (
        <li>
            <Link href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#postInfo">
                <span>{careerData.title}</span>
                <span>{careerData.location}</span>
                <i className="icon p-lg-3 p-2">
                    <IconRightArrow width={24} height={24} />
                </i>
            </Link>
        </li>
    );
};

export default ItemCareer;

