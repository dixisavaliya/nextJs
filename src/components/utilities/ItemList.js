import React from 'react';
import { IconCheckCircle } from '@/components/icon';

const ItemList = ({ listData }) => {
    if (!listData) return null;

    const iconColor = listData.iconColor || 'bg-light';

    return (
        <li>
            <span className={`p-2 p-lg-3 inline-block rounded-circle ${iconColor}`}>
                <i className='icon p-4 p-lg-6'>
                    <IconCheckCircle width={24} height={24} />
                </i>
            </span>
            <div className="flex-fill d-flex flex-column">
                <h2>{listData.title}</h2>
                <small>{listData.description}</small>
            </div>
        </li>
    );
};

export default ItemList;

