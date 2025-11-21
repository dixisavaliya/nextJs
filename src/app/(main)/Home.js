'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SectionCTA from '@/components/section/SectionCTA';
import SectionRecentBlog from '@/components/section/SectionRecentBlog';
import { IconCrossArrow, IconWWAShape1, IconWWAShape2, IconWWAShape3 } from '@/components/icon';

import SectionVideo from '@/components/section/SectionVideo';
import SectionTestimonials from '@/components/section/SectionTestimonials';
import { SliderLogo, SliderServices } from '@/components/slider';

export default function Home({ category, blogs }) {
    console.log(category, "category");

    const videoRef = useRef(null);

    const services = [
        {
            icon: '/images/work-with-us/product-engineering.svg',
            title: 'Product Engineering',
            description: 'We keep your product running smoothly and offer smart engineering solutions to improve, scale, and support it as your business grows.'
        },
        {
            icon: '/images/work-with-us/software-development.svg',
            title: 'Software Development',
            description: 'We build reliable, easy-to-use software tailored to your business needs, helping you work better and grow faster.'
        },
        {
            icon: '/images/work-with-us/devops-solutions.svg',
            title: 'DevOps Solutions',
            description: 'We help keep your systems safe, running smoothly, and up to date—all while saving you money and making things work faster.'
        },
        {
            icon: '/images/work-with-us/e-commerce-solutions.svg',
            title: 'E-Commerce Solutions',
            description: 'Easy-to-use online stores designed to help you sell more, stay secure, and provide customers with a great shopping experience.'
        },
        {
            icon: '/images/work-with-us/mobile-apps.svg',
            title: 'Mobile Apps',
            description: 'We build reliable, intuitive mobile apps that keep your data safe and help your business stay connected with customers anytime, anywhere.'
        },
        {
            icon: '/images/work-with-us/qa-automation.svg',
            title: 'QA Automation',
            description: 'We deliver reliable QA automation that ensures your software works perfectly, speeds up testing, and saves time and effort.'
        },
        {
            icon: '/images/work-with-us/SEO.svg',
            title: 'SEO Services',
            description: 'We improve your website\'s visibility to attract more visitors, helping your business grow with smart and lasting SEO strategies.'
        },
        {
            icon: '/images/work-with-us/DM.svg',
            title: 'Digital Marketing',
            description: 'We create effective digital marketing plans that boost your brand, reach more customers, and grow your business online.'
        }
    ];

    return (
        <>
            <section className="section-hero">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    id="myVideo"
                >
                    <source src="/videos/banner-video.mp4" type="video/mp4" />
                </video>
                <div className="position-absolute bottom-0 left-0 right-0 z-2 mt-auto w-100 text-center text-white">
                    <Container fluid>
                        <h1>Your trusted tech partner ALWAYS!</h1>
                        <p className='h5 fw-bold text-md-base mx-auto'>As a passionate software agency, we manage your tech with care providing reliable solutions, strong support, and close collaboration.</p>
                    </Container>

                    <SliderLogo />
                </div>
            </section>

            <section className="section-data py-lg-25 py-15">
                <IconWWAShape1
                    className="shape-1"
                    width={100}
                    height={100}
                />
                <IconWWAShape2
                    className="shape-2"
                    width={100}
                    height={100}
                />
                <IconWWAShape3
                    className="shape-3"
                    width={100}
                    height={100}
                />
                <Container fluid>
                    <Row className='gx-lg-12 gy-12'>
                        <Col lg={12} xl={6}>
                            <div className="title pr-25">
                                <span className="tag">About Us</span>
                                <h2><span>Who</span> We <span>Are</span></h2>
                                <p>We are a team of skilled professionals dedicated to managing and building your entire tech infrastructure. From DevOps to software, web, and mobile app development, we handle everything with precision and care. Our focus is always on quality rather than rushing through projects. We take the time to understand your needs and create reliable solutions that fit your business goals. Even while ensuring high standards, we remain cost-effective, providing the best value without compromising performance or security.</p>
                                <p>What sets us apart is our strong belief in doing what is right, not just what is easy. We approach every project with passion, treating your success as our own. More than just service providers, we work as your trusted partners, ensuring every step is carefully planned and executed. We don't just develop software—we build long-term relationships based on trust, transparency, and excellence. Our dedication goes beyond business; it's about making a real impact through technology.</p>
                                <Button as={Link} href="/about" className="px-4 px-lg-6" variant="primary">
                                    Read More
                                    <i className="icon p-lg-3 p-2"><IconCrossArrow width={24} height={24} /></i>
                                </Button>
                            </div>
                        </Col>
                        <Col lg={12} xl={6}>
                            <figure className="picture image-desktop rounded-xs">
                                <Image
                                    src="/images/who-we-are-img.jpg"
                                    alt="Who We Are"
                                    width={1920}
                                    height={1080}
                                />
                            </figure>
                        </Col>
                    </Row>
                </Container>
            </section>

            <SectionCTA
                title="Your Vision, Our Expertise"
                description="Build high-quality, cost-effective solutions with a tech partner who values innovation, precision, and passion."
            />

            <section className="py-lg-25 py-15">
                <Container fluid>
                    <div className="title pb-7">
                        <span className="tag">Work With Us</span>
                        <h2>Services We Offer to Help Grow Your Business</h2>
                        <p>No matter the size of your business, we treat every client equally and are committed to delivering the best and fastest service experience.</p>
                    </div>
                    <SliderServices services={services} />
                </Container>
            </section>

            <SectionVideo />

            <SectionTestimonials />

            <SectionCTA
                title="Looking for a reliable software partner?"
                description="You won't know our quality until you try us. Reach out, and we'll show you the difference!"
            />
            {blogs == null || category == null ? (
                <p>No blogs found</p>
            ) : (
                <SectionRecentBlog category={category} blogs={blogs}
                    allBlog={true}
                />
            )}
        </>
    );
}