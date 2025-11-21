import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SubBanner from '@/components/section/SectionHero';
import SectionCTA from '@/components/section/SectionCTA';
import { ItemRelatedPost } from '@/components/utilities';
import { IconCalendar, IconCrossArrow } from '@/components/icon';
import { getData } from '@/utils/api';
import moment from 'moment';

export const metadata = {
    title: "IT infrastructure support | Anhas Web",
    description: "Struggling with IT downtime or outdated systems? Our expert tech support offers scalable solutions and cloud migration for seamless business operations.",
    keywords: "IT infrastructure support, expert tech support, business IT solutions, cloud migration services, IT modernization, infrastructure management, IT downtime solutions, scalable IT systems, cybersecurity for businesses, legacy system upgrades"
};

export default async function BlogDetailsPage({ params }) {
    const { slug } = params;
    console.log(slug, "slug");
    let blog = null;
    try {
        const resultBlogs = await getData(`blogs/get-blog-by-slug?slug=${slug}`);
        blog = resultBlogs.data;

    } catch (error) {
        console.error("Error fetching blogs data:", error);
    };

    const relatedPosts = [
        { title: 'Overcome Infrastructure Issues with Our Expert Tech Support', link: '/blogs/infrastructure-tech-support' },
        { title: 'Seamless Tech Transformation for Education: A Client Success Story', link: '/blogs/edu-tech-success' },
        { title: 'Why Your Business Needs a Tech Partner for Seamless Infrastructure Management', link: '/blogs/tech-partner-infrastructure' }
    ];

    return (
        <>
            <SubBanner
                image="/images/blog/blog-banner.jpg"
                alt="Our Blogs"
                variant="blog-detail"
                className="section-banner-lg"
            />

            <section className="pb-lg-25 pb-15 pt-lg-25 pt-md-15 pt-sm-10 pt-6">
                <Container fluid>
                    <Row className="g-6">
                        <Col md={12} lg={8} xl={9}>
                            <div className="pb-lg-25 pb-15">
                                <div className="bg-primary-50 rounded-lg p-lg-6 p-5 d-flex flex-column flex-md-row align-items-md-center justify-content-md-between mb-lg-10 mb-5 gap-3">
                                    <div className="d-flex align-items-center justify-content-start gap-lg-4 gap-3">
                                        <i className='icon p-lg-3 p-2'>
                                            <IconCalendar width={16} height={16} />
                                        </i>
                                        <h6 className='fw-semibold text-md-base'>{moment(blog.published_date).format('MMMM Do, YYYY')}</h6>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-start gap-lg-4 gap-3">
                                        <figure className='picture p-lg-5 p-3 w-auto rounded-circle'>
                                            <Image src="/images/blog/user.png" alt="By Hardik Raval" width={1821} height={1821} />
                                        </figure>
                                        <h6 className='fw-semibold text-md-base'>By {blog.posted_by}</h6>
                                    </div>
                                </div>
                                <div className="content-editor">
                                    {/* <h1>{blog.title}</h1> */}
                                    <div dangerouslySetInnerHTML={{ __html: blog.description }} />
                                </div>
                            </div>
                            <SectionCTA
                                className="rounded-sm"
                                title="Ready to Transform Your Infrastructure?"
                                description="Feel the difference our quality makes! Reach out today, and let us show you what we can do!"
                            />
                        </Col>

                        <Col md={12} lg={4} xl={3}>
                            <div className="bg-success bg-opacity-10 rounded-xs p-lg-6 p-4 mb-lg-10 mb-5">
                                <h2 className="text-success h5 mb-lg-6 mb-5">Related Posts</h2>
                                <ul className="item-post">
                                    {relatedPosts.map((post, index) => (
                                        <ItemRelatedPost key={index} postData={post} />
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-primary-50 rounded-xs p-lg-6 p-4">
                                <h2 className="text-dark h5 mb-lg-6 mb-5">Streamline business with bespoke software product</h2>
                                <Button as={Link} href="/contact-us" className="px-4 px-lg-6" variant="primary">
                                    Let's Talk <i className="icon p-lg-3 p-2"><IconCrossArrow width={24} height={24} /></i>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
