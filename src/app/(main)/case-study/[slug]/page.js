import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import SectionRecentBlog from '@/components/section/SectionRecentBlog';
import { ItemStep, ItemImpact, ItemCaseInfo } from '@/components/utilities';
import { IconDoubleArrow } from '@/components/icon';
import { CATEGORY_TYPES } from '@/constants/category_type';
import { getData } from '@/utils/api';

export const metadata = {
    title: "Case Study Details | Anhas Web",
    description: "Detailed case study showcasing our project work, challenges, solutions, and impact created for our clients.",
    keywords: "Anhas Web case study details, project showcase, web development case study, software development project"
};

export default async function CaseStudyDetailsPage({ params }) {
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

    const steps = [
        {
            number: '1',
            title: 'Research',
            description: 'In the research phase, we comprehensively study user needs, behaviors, and pain points through methods like interviews and data analysis to inform the design process effectively.'
        },
        {
            number: '2',
            title: 'Design & Development',
            description: 'During the design phase, we create wireframes and prototypes, visually conceptualizing solutions. These serve as blueprints for the user interface\'s structure, layout, and functionality.'
        },
        {
            number: '3',
            title: 'Testing',
            description: 'In the testing phase, we gather user feedback on prototypes, assess usability, and refine designs. This iterative process ensures the final product meets user expectations and needs.'
        },
        {
            number: '4',
            title: 'Go Live',
            description: 'In the implementation phase, we focus on translating the designed user interface into a functional product, adhering to the established design guidelines and aesthetics.'
        }
    ];

    const impacts = [
        {
            number: '50k',
            title: '50k project view',
            description: 'The Docly project garnered an impressive 50,000+ views on Behance.'
        },
        {
            number: '32k',
            title: '32k commented',
            description: 'More than 32,000 audience shared their feedback on the Docly project.'
        },
        {
            number: '90%',
            title: 'Community Increase',
            description: '90% of audience expressed excitement and interest in its potential.'
        }
    ];

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
                            src="/images/case-study-details/img-1.png"
                            alt="Docly - Online Doctor & Medicine Delivery App"
                            width={2280}
                            height={1350}
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
                            <h4 className='fw-medium h5-md'>Docly is one of our popular fintech projects that captivated audiences and attracted many client interest for its cutting-edge design template. This project was based on market research, and real user problems which we addressed while crafting the design solution.</h4>
                            <h4 className='fw-medium h5-md'>From initial ideation to the final design, we meticulously crafted every details to ensure Docly revolutionized the healthcare experience.</h4>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="image-section picture">
                <Image src="/images/case-study-details/img-2.png" alt="Project Screenshot" width={1920} height={900} />
            </section>

            <section className="py-lg-25 py-15">
                <Container fluid className='d-flex flex-column gap-lg-25 gap-15'>
                    <Row className="g-4  g-md-20">
                        <Col sm={12} md={4} lg={5}>
                            <i className='icon p-lg-15 p-10 mb-lg-6 mb-5'>
                                <Image src="/images/case-study-details/challanges.svg" alt="" width={120} height={120} />
                            </i>
                            <h5>Challenges</h5>
                        </Col>
                        <Col sm={12} md={8} lg={7}>
                            <h4 className='fw-medium h5-md'>Keeping the app consistent was challenging as it has three different types of users: suppliers, doctors, and patients. Plus, simplifying the UX was challenging as the medical software has lots of elements on the screen.</h4>
                        </Col>
                    </Row>
                    <Row className="g-4  g-md-20">
                        <Col sm={12} md={4} lg={5}>
                            <i className='icon p-lg-15 p-10 mb-lg-6 mb-5'>
                                <Image src="/images/case-study-details/our-solutions.svg" alt="" width={120} height={120} />
                            </i>
                            <h5>Our Solutions</h5>
                        </Col>
                        <Col sm={12} md={8} lg={7}>
                            <h4 className='fw-medium h5-md'>To address the pain points, we incorporated doctor profiles, visible appointment slots, home lab tests, medicine delivery, symptom-based disease information, and health history tracking.</h4>
                        </Col>
                    </Row>
                    <figure className='picture image-full rounded-xs'>
                        <Image src="/images/case-study-details/img-3.jpg" alt="Solution Screenshot" width={3440} height={1600} />
                    </figure>
                </Container>
            </section>

            <section className="py-lg-25 py-15 bg-light">
                <Container fluid>
                    <div className="title text-center pb-7">
                        <h2>Impact We Created</h2>
                        <p>We promise you an inclusive work environment where you will fall in love with challenging as well as getting challenged.</p>
                    </div>
                    <Row className="gx-4 gx-xl-20 gy-4 gy-lg-0 position-relative">
                        <span className='position-absolute d-none d-lg-block top-50 translate-middle-y border-top border-primary mx-auto start-0 end-0 w-75'></span>
                        <div className='position-absolute top-50 translate-middle-y start-0 d-none d-xl-flex justify-content-evenly gap-4'>
                            <span className="p-3 rounded-circle bg-primary d-flex icon">
                                <i className='icon p-3 text-white'>
                                    <IconDoubleArrow width={24} height={24} />
                                </i>
                            </span>
                            <span className="p-3 rounded-circle bg-primary d-flex icon">
                                <i className='icon p-3 text-white'>
                                    <IconDoubleArrow width={24} height={24} />
                                </i>
                            </span>
                            <span className="p-3 rounded-circle bg-primary d-flex icon">
                                <i className='icon p-3 text-white'>
                                    <IconDoubleArrow width={24} height={24} />
                                </i>
                            </span>
                        </div>
                        {steps.map((step, index) => (
                            <ItemStep key={index} stepData={step} />
                        ))}
                    </Row>
                </Container>
            </section>

            <section className="py-lg-25 py-15">
                <Container fluid className='d-flex flex-column gap-lg-25 gap-15'>
                    <Row className="g-4  g-md-20">
                        <Col sm={12} md={4} lg={5}>
                            <h5>Wireframe</h5>
                        </Col>
                        <Col sm={12} md={8} lg={7}>
                            <h4 className='fw-medium h5-md'>We crafted detailed blueprints for the app's interface. We especially focused on optimizing the appointment scheduling process to ensure seamless navigation for patients.</h4>
                        </Col>
                    </Row>
                    <figure className='picture image-full rounded-xs'>
                        <Image src="/images/case-study-details/img-4.jpg" alt="Wireframe" width={1720} height={800} />
                    </figure>
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
                                <Image src="/images/case-study-details/img-5.png" alt="Visual Output 1" width={1720} height={800} />
                            </figure>
                        </Col>
                        <Col sm={12} md={6}>
                            <figure className='picture image-half rounded-xs'>
                                <Image src="/images/case-study-details/img-6.jpg" alt="Visual Output 2" width={835} height={800} />
                            </figure>
                        </Col>
                        <Col sm={12} md={6}>
                            <figure className='picture image-half rounded-xs'>
                                <Image src="/images/case-study-details/img-7.png" alt="Visual Output 3" width={835} height={800} />
                            </figure>
                        </Col>
                    </Row>
                    <Row className="g-4  g-md-20">
                        <Col sm={12} md={4} lg={5}>
                            <h5>Conclusion</h5>
                        </Col>
                        <Col sm={12} md={8} lg={7}>
                            <h4 className='fw-medium h5-md'>We successfully addresses all the user challenges, delivering a solution that resonates with audiences and attracts numerous clients. We're thrilled by the positive response and the impact it's made.</h4>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-lg-25 py-15 bg-light">
                <Container fluid>
                    <div className="title text-center">
                        <h2>Impact We Created</h2>
                        <p>We promise you an inclusive work environment where you will fall in love with challenging as well as getting challenged.</p>
                    </div>
                    <div className="row gy-4">
                        {impacts.map((impact, index) => (
                            <ItemImpact key={index} impactData={impact} />
                        ))}
                    </div>
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
