import React from 'react';
import Image from 'next/image';
import { IconListUI } from '@/components/icon';

const ItemTech = ({ techData }) => {
    if (!techData) return null;

    return (
        <div className="item-tech d-flex flex-lg-row flex-column align-items-start gap-lg-12 gap-5">
            <div className="btn btn-primary d-flex align-items-center gap-lg-6 gap-4 justify-content-center">
                <i className="icon p-lg-3 p-2">
                    <Image
                        src={techData.icon}
                        alt={techData.category}
                        width={20}
                        height={20}
                    />
                </i>
                {techData.category}
            </div>
            <ul className="d-flex flex-wrap gap-2 gap-md-3 gap-lg-4 flex-fill">
                {techData.items.map((item, index) => (
                    <li className="tag bg-white d-flex align-items-center gap-2 fw-semibold text-dark gap-lg-4 gap-md-3 gap-2" key={index}>
                        <i className="icon p-lg-3 p-2 text-success">
                            <IconListUI width={16} height={16} />
                        </i>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemTech;

