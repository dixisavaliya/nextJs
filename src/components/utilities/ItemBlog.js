import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Col } from 'react-bootstrap';
import { IconCalendar, IconReadArrow } from '@/components/icon';
import moment from 'moment';

const ItemBlog = ({ blogData }) => {
    if (!blogData) return null;
    console.log("blogData:", blogData);

    return (
        <Col md={6} lg={4}>
            <div className="item-blog">
                <figure className='picture'>
                    <Image src={blogData.blog_image} alt={blogData.title} width={553} height={350} />
                    <span className='position-absolute top-0 start-0 p-lg-6 p-4'>
                        <span className='tag'>{blogData.tag}</span>
                    </span>
                </figure>
                <small className='d-flex align-items-center justify-content-start gap-lg-4 gap-3 fw-medium mb-lg-4 mb-3'>
                    <i className='icon p-lg-3 p-2'><IconCalendar width={24} height={24} /></i> <span>{moment(blogData.published_date).format('MMMM Do, YYYY')}</span>
                </small>
                <h5 className='mb-lg-4 mb-3'>{blogData.title}</h5>
                <Link className='link link-secondary' href={`/blogs/${blogData.slug}`} title="Read More">
                    Read More <i className='icon p-lg-3 p-2 transition'><IconReadArrow width={16} height={16} /></i>
                </Link>
            </div>
        </Col>
    );
};

export default ItemBlog;
