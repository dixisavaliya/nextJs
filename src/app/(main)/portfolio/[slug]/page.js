import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import SectionRecentBlog from '@/components/section/SectionRecentBlog';
import { ItemCaseInfo } from '@/components/utilities';
import { getData } from '@/utils/api';
import { CATEGORY_TYPES } from '@/constants/category_type';

export const metadata = {
    title: "Portfolio Details | Anhas Web",
    description: "Detailed portfolio showcase of our project work, technologies used, and the impact created for our clients.",
    keywords: "Anhas Web portfolio details, project showcase, web development portfolio, software development project details"
};

export default async function PortfolioDetailsPage({ params }) {
    const { slug } = params;

    let category = null;
    let blogs = null;
    const category_type = CATEGORY_TYPES.BLOG;
    try {
        const result = await getData(`categories?category_type=${category_type}`);
        category = result.data;

        const resultBlogs = await getData(`blogs?category_type=${category_type}`);
        blogs = resultBlogs.data;

    } catch (error) {
        console.error("Error fetching blogs data:", error);
    };

    const projectInfo = [
        { label: 'Type', value: 'Healthcare' },
        { label: 'Platforms', value: 'Flutter, React' },
        { label: 'Team', value: '6 Members' },
        { label: 'Time', value: '05 Months' },
        { label: 'Industry', value: 'Health' }
    ];

    return (
        <>
            <section className="section-head py-lg-25 py-md-15 py-10">
                <Container fluid className='d-flex flex-column gap-lg-25 gap-md-15 gap-10'>
                    <div className="title text-center">
                        <span className='tag'>App Design</span>
                        <h2>Docly - Online Doctor &<br /> Medicine Delivery App</h2>
                    </div>
                    <figure className='picture rounded-xs'>
                        <Image
                            src="/images/portfolio/img-1.png"
                            alt="Docly - Online Doctor & Medicine Delivery App"
                            width={3440}
                            height={1600}
                        />
                    </figure>
                </Container>
            </section>

            <section className="py-lg-25 py-15">
                <Container fluid className='d-flex flex-column gap-lg-25 gap-15'>
                    <Row className="gx-0 gy-sm-10 gy-8 row-cols-lg-5 row-cols-sm-3 row-cols-2">
                        {projectInfo.map((info, index) => (
                            <ItemCaseInfo key={index} infoData={info} />
                        ))}
                    </Row>
                    <Row className="g-4  g-md-20">
                        <Col sm={12} md={4} lg={5}>
                            <i className='icon p-lg-15 p-10 mb-lg-6 mb-5'>
                                <Image src="/images/case-study-details/about-project.svg" alt="" width={120} height={120} />
                            </i>
                            <h5>About the Project</h5>
                        </Col>
                        <Col sm={12} md={8} lg={7} className='d-flex flex-column gap-lg-6 gap-4'>
                            <h4 className='fw-medium h5-md'>Docly is one of our popular healthcare projects that captivated audiences and attracted many client interest for its cutting-edge design template. This project was based on market research, and real user problems which we addressed while crafting the design solution.</h4>
                            <h4 className='fw-medium h5-md'>From initial ideation to the final design, we meticulously crafted every details to ensure Docly revolutionized the healthcare experience.</h4>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="image-section picture">
                <Image src="/images/case-study-details/img-2.png" alt="Project Screenshot" width={1920} height={900} />
            </section>

            <section className="pt-lg-25 pt-15">
                <Container fluid className='d-flex flex-column gap-lg-25 gap-15'>
                    <Row className="g-4  g-md-20">
                        <Col sm={12} md={4} lg={5}>
                            <h5>Visual Output</h5>
                        </Col>
                        <Col sm={12} md={8} lg={7}>
                            <h4 className='fw-medium h5-md'>In the final visual output, we optimized clarity and usability by streamlining the interface, reducing visual clutter, and prioritizing essential elements for an enhanced user experience.</h4>
                        </Col>
                    </Row>
                    <Row className="g-6">
                        <Col sm={12}>
                            <figure className='picture image-full rounded-xs'>
                                <Image src="/images/portfolio/img-3.png" alt="Visual Output 1" width={2580} height={1200} />
                            </figure>
                        </Col>
                        <Col sm={12} md={6}>
                            <figure className='picture image-half rounded-xs'>
                                <Image src="/images/portfolio/img-4.png" alt="Visual Output 2" width={1670} height={1600} />
                            </figure>
                        </Col>
                        <Col sm={12} md={6}>
                            <figure className='picture image-half rounded-xs'>
                                <Image src="/images/portfolio/img-5.png" alt="Visual Output 3" width={1670} height={1600} />
                            </figure>
                        </Col>
                    </Row>
                </Container>
            </section>
            {blogs == null || category == null ? (
                <p>No blogs found</p>
            ) : (
                <SectionRecentBlog
                    description="Stay updated with our latest insights and industry knowledge."
                    showLoadMore={false}
                    category={category} blogs={blogs} allBlog={true}
                />
            )}
        </>
    );
}
