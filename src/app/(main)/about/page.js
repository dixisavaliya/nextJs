import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SubBanner from '@/components/section/SectionHero';
import SectionCTA from '@/components/section/SectionCTA';
import { ItemCard } from '@/components/utilities';
import { IconLogo, IconCrossArrow } from '@/components/icon';

export const metadata = {
    title: "About Us | Anhas Web - Dedicated, Experienced, and Reliable Team",
    description: "Learn about Anhas Web's committed team delivering thoughtful, timely solutions with full responsibility and fast support to help your business grow.",
    keywords: "experienced web development team, reliable web solutions, responsible web services, timely project delivery, fast customer support, dedicated web professionals, Anhas Web about us"
};

export default function AboutPage() {
    const features = [
        {
            icon: '/images/about/experienced-team.svg',
            title: 'Experienced team',
            description: 'Our experienced team brings proven skills, deep knowledge, and reliable results you can trust.',
            className: 'bg-white h-100 rounded-lg p-lg-10 p-sm-6 p-5'
        },
        {
            icon: '/images/about/responsibility.svg',
            title: 'Responsibility',
            description: 'We take responsibility seriously, always delivering with care, honesty, and full commitment to you.',
            className: 'bg-white h-100 rounded-lg p-lg-10 p-sm-6 p-5'
        },
        {
            icon: '/images/about/project-on-time.svg',
            title: 'Project on time',
            description: 'We value your time and always aim to deliver every project on schedule.',
            className: 'bg-white h-100 rounded-lg p-lg-10 p-sm-6 p-5'
        },
        {
            icon: '/images/about/guaranteed-quality.svg',
            title: 'Guaranteed quality',
            description: 'We stand by our work, ensuring top quality you can truly rely on.',
            className: 'bg-white h-100 rounded-lg p-lg-10 p-sm-6 p-5'
        },
        {
            icon: '/images/about/quick-support.svg',
            title: 'Quick support',
            description: 'We respond fast and help you immediately because your time and needs matter most.',
            className: 'bg-white h-100 rounded-lg p-lg-10 p-sm-6 p-5'
        },
        {
            icon: '/images/about/client-satisfaction.svg',
            title: 'Satisfaction',
            description: 'We work hard to make sure you\'re happy with every step and final result.',
            className: 'bg-white h-100 rounded-lg p-lg-10 p-sm-6 p-5'
        }
    ];

    return (
        <>
            <SubBanner
                title="About Us"
                description="Working with us feels easy — clear talks, real care, and results that match your vision."
                image="/images/about/banner.jpg"
                alt="About Us"
            />

            <section className="section-about position-relative py-lg-25 py-15 w-100 overflow-hidden">
                <div className="shape shape1"></div>
                <div className="shape shape2"></div>
                <Container fluid className='position-realtive z-2'>
                    <Row className="align-items-center g-5">
                        <Col xl={8}>
                            <div className="about-content">
                                <p>At Anhas Web, we believe in quality, not quantity. Our focus is to deliver high-quality work that makes a real difference for your business.</p>
                                <p>We treat your business like our own — working carefully, thoughtfully, and precisely to bring your ideas to life. Our team is built on passion and expertise, and we only hire people who are truly dedicated to their craft.</p>
                                <p>Our team is made up of skilled professionals who bring years of real-world experience. Each member understands the importance of getting things right the first time and works with care to meet your unique needs. We believe experience is about knowing what works best and applying that knowledge with confidence.</p>
                                <p>We take our responsibilities seriously because we know your business depends on us. From start to finish, we handle every detail with full attention and honesty. When you choose us, you can be sure we'll stand behind our work and do everything needed to keep your project moving smoothly.</p>
                                <p>Timely delivery and strong support are at the heart of what we do. We respect your time and are committed to meeting deadlines without delay. If you ever need help, our team is ready to respond quickly and provide solutions, ensuring you never feel left waiting.</p>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <figure className="picture rounded-md image-desktop">
                                <Image
                                    src="/images/who-we-are-img.jpg"
                                    alt="team"
                                    width={1920}
                                    height={1080}
                                />
                                <div className="holder">
                                    <IconLogo width={60} height={60} />
                                </div>
                            </figure>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-primary-50 py-lg-25 py-15">
                <Container fluid>
                    <div className="title text-center">
                        <h2 className="h1">When you choose us, you choose:</h2>
                    </div>
                    <Row className="g-6">
                        {features.map((feature, index) => (
                            <ItemCard key={index} cardData={feature} />
                        ))}
                        <Col sm={12} md={12} xl={6}>
                            <div className="item-about bg-white h-100 rounded-lg p-lg-10 p-sm-6 p-5 d-flex flex-column justify-content-between position-relative overflow-hidden gap-3">
                                <figure className="position-absolute top-0 start-0 w-100 h-100 picture">
                                    <Image
                                        src="/images/about/image-3.jpg"
                                        alt="What makes us different"
                                        width={845}
                                        height={429}
                                    />
                                </figure>
                                <h2 className="h3 position-relative z-1">What makes us different:</h2>
                                <ul className="flex-fill d-flex flex-column justify-content-evenly gap-3">
                                    <li>A passionate team that cares</li>
                                    <li>High-quality work</li>
                                    <li>Direct communication</li>
                                </ul>
                                <Button as={Link} href="/contact-us" variant="primary" className="me-auto position-relative z-1">
                                    Contact Us
                                    <i className="p-lg-3 p-2 icon"><IconCrossArrow width={24} height={24} /></i>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <SectionCTA
                title="Looking for a reliable software partner?"
                description="You won't know our quality until you try us. Reach out, and we'll show you the difference!"
            />
        </>
    );
}
