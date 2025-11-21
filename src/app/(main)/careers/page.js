import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SubBanner from '@/components/section/SectionHero';
import { ItemCareer } from '@/components/utilities';
import { IconCrossArrow } from '@/components/icon';

export const metadata = {
    title: "Career | Anhas Web",
    description: "We seek people who are passionate about coding and care about every line and its performance in production. Join our team and grow with us.",
    keywords: "Anhas Web careers, software development jobs, web development careers, tech jobs, developer positions"
};

export default function CareersPage() {
    const careers = [
        { title: 'Sr. QA Engineer', location: 'Ahmedabad (on-site)' },
        { title: 'Sr. Software Engineer', location: 'Ahmedabad (on-site)' },
        { title: 'Jr. Software Engineer', location: 'Ahmedabad (on-site)' },
        { title: 'Intern Software Engineer', location: 'Ahmedabad (on-site)' }
    ];

    return (
        <>
            <SubBanner
                title="Career"
                description="We seek people who are passionate about coding and care about every line and its performance in production."
                image="/images/about/banner.jpg"
                alt="About Us"
            />

            <section className="py-lg-25 pt-15">
                <Container fluid>
                    <Row className='g-8 g-lg-12 flex-lg-row-reverse align-items-center'>
                        <Col lg={6}>
                            <figure className='picture image-vertical rounded-xs'>
                                <Image
                                    src="/images/testimonials-img.jpg"
                                    alt="Why Work with AnhasWeb"
                                    width={835}
                                    height={600}
                                />
                            </figure>
                        </Col>
                        <Col lg={6}>
                            <div className="title pe-lg-10">
                                <span className='tag'>Career</span>
                                <h2><span>Why Work With</span> Anhas Web<span>?</span></h2>
                                <p>We believe in continuously improving the quality of our work, following the best approaches to handle large codebases, large-scale projects, and modern technologies. We offer flexibility in work while staying committed to deadlines.</p>
                                <p>No corporate culture — just real growth by working alongside expert developers and enhancing your skills.</p>
                                <p>Interested in working with us? Apply now by sending your resume to <Link href="mailto:hello@anhasweb.com">hello@anhasweb.com.</Link></p>
                            </div>
                            <Button as={Link} href="/about" className='px-4 px-lg-6'>
                                About Company
                                <i className="p-lg-3 p-2 icon"><IconCrossArrow width={24} height={24} /></i>
                            </Button>
                        </Col>

                    </Row>
                </Container>
            </section>

            <section className="py-lg-25 py-15">
                <Container fluid>
                    <div className="title text-center">
                        <span className='tag'>Career</span>
                        <h2>Current Opening</h2>
                        <p>Apply now by sending your resume to <Link href="mailto:hello@anhasweb.com">hello@anhasweb.com.</Link></p>
                    </div>
                    <ul className="list-career">
                        {careers.map((career, index) => (
                            <ItemCareer key={index} careerData={career} />
                        ))}
                    </ul>
                </Container>
            </section>
        </>
    );
}
