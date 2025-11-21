import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import SubBanner from '@/components/section/SectionHero';
import SectionTestimonials from '@/components/section/SectionTestimonials';
import { IconReadArrow, IconAddress, IconEmail, IconTelephone } from '@/components/icon';

export const metadata = {
    title: "Contact Us | Anhas Web - Web Design & Digital Solutions",
    description: "Get in touch with Anhas Web for custom web design, development, and digital solutions. We're here to answer your questions and help your business grow.",
    keywords: "contact Anhas Web, web design support, website development help, digital agency contact, get in touch web designer, contact for website quote, website support India, web solutions contact, website developer Ahmedabad"
};

export default function ContactUsPage() {
    return (
        <div className='bg-light'>
            <SubBanner
                title="Contact Us"
                description="Our commitment to invest in pro bono services brings our talent, expertise and insight to organizations tackling today's urgent challenges."
                image="/images/about/banner.jpg"
                alt="Contact Us"
            />

            <section className="py-lg-25 py-15">
                <Container fluid>
                    <div className="title text-center">
                        <h2>Get In Touch</h2>
                        <p>As a leading mobile app development services firm, we excel in offering custom solutions for<br /> various industries,</p>
                    </div>
                    <Row className='g-4 g-md-8 text-center'>
                        <Col md={6} xl={4}>
                            <div className="bg-white rounded-lg p-lg-10 p-5 h-100">
                                <div className="bg-light d-inline-block mx-auto rounded-circle p-4 mb-5 mb-lg-15">
                                    <i className="icon p-6 p-lg-9 text-dark">
                                        <IconEmail
                                            width={60}
                                            height={60}
                                        />
                                    </i>
                                </div>
                                <h2 className='h4 mb-3 mb-lg-4'>EMAIL</h2>
                                <Link href="mailto:hello@anhasweb.com" className="link link-primary" title="hello@anhasweb.com">
                                    hello@anhasweb.com
                                </Link>
                            </div>
                        </Col>
                        <Col md={6} xl={4}>
                            <div className="bg-white rounded-lg p-lg-10 p-5 h-100">
                                <div className="bg-light d-inline-block mx-auto rounded-circle p-4 mb-5 mb-lg-15">
                                    <i className="icon p-6 p-lg-9 text-dark">
                                        <IconTelephone
                                            width={60}
                                            height={60}
                                        />
                                    </i>
                                </div>
                                <h2 className='h4 mb-3 mb-lg-4'>Telephone</h2>
                                <Link href="tel:+919712487143" className="link link-primary" title="(+91) 9712487143">
                                    (+91) 9712487143
                                </Link>
                            </div>
                        </Col>
                        <Col md={12} xl={4}>
                            <div className="bg-white rounded-lg p-lg-10 p-5 h-100">
                                <div className="bg-light d-inline-block mx-auto rounded-circle p-4 mb-5 mb-lg-15">
                                    <i className="icon p-6 p-lg-9 text-dark">
                                        <IconAddress
                                            width={60}
                                            height={60}
                                        />
                                    </i>
                                </div>
                                <h2 className='h4 mb-3 mb-lg-4'>Address</h2>
                                <p className='fw-medium text-dark mb-lg-10 mb-5'>E-1009, Titanium City Centre, Nr Sachin Tower, Prahalad Nagar Road, Ahmedabad, Gujarat 380015 India</p>
                                <Link href="https://g.co/kgs/xCndVRt" target="_blank" rel="noopener noreferrer" className="link link-primary" title="Get Direction">
                                    Get Direction
                                    <i className='icon p-lg-3 p-2 transition'><IconReadArrow width={16} height={16} /></i>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <SectionTestimonials />
        </div>
    );
}
