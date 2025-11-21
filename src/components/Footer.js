import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { IconFacebook, IconInstagram, IconYouTube, IconLinkedIn, IconBrandLogo } from './icon';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { href: 'https://www.facebook.com/anhaswebsolution', title: 'facebook', icon: IconFacebook },
        { href: 'https://www.instagram.com/anhasweb/', title: 'instagram', icon: IconInstagram },
        { href: 'https://www.youtube.com/channel/UC_QSMVDeSLlI97ompE7pk-Q', title: 'youtube', icon: IconYouTube },
        { href: 'https://www.linkedin.com/company/anhasweb', title: 'linkedin', icon: IconLinkedIn }
    ];

    const servicesLinks = [
        { href: '#', title: 'UIUX Design', text: 'Product Engineering' },
        { href: '#', title: 'Software & Web Development', text: 'Software & Web Development' },
        { href: '#', title: 'DevOps Solutions', text: 'DevOps Solutions' },
        { href: '#', title: 'Mobile App Development', text: 'E-Commerce Solutions' },
        { href: '#', title: 'Mobile Apps', text: 'Mobile Apps' },
        { href: '#', title: 'QA Testing', text: 'QA Testing' }
    ];

    const expertiseLinks = [
        { href: '#', title: 'Real Estate', text: 'Real Estate' },
        { href: '#', title: 'Healthcare', text: 'Healthcare' },
        { href: '#', title: 'Education', text: 'Education' },
        { href: '#', title: 'Legal Services', text: 'Legal & Compliance' },
        { href: '#', title: 'E-commerce & Retail', text: 'E-commerce & Retail' }
    ];

    const dataAILinks = [
        { href: '#', title: 'Predictive Modeling', text: 'Predictive Modeling' },
        { href: '#', title: 'Machine Learning', text: 'Machine Learning' },
        { href: '#', title: 'Artificial Intelligence (AI)', text: 'Artificial Intelligence (AI)' }
    ];

    const footerLinks = [
        { href: '/about', title: 'About us', text: 'About us' },
        { href: '/contact-us', title: 'Contact Us', text: 'Contact Us' },
        { href: '/life-at-anhas', title: 'life at anhasweb', text: 'Life at Anhas Web' }
    ];

    return (
        <footer className='app-footer bg-light'>
            <Container fluid>
                <div className="py-10 py-md-15 py-lg-20">
                    <Row className='gx-6 gy-10'>
                        <Col sm={12} md={12} lg={3} className='d-flex flex-column gap-5 gap-lg-10'>
                            <Link className="brand-logo me-auto" href="/">
                                <IconBrandLogo width={220} height={36} />
                            </Link>
                            <p className='text-dark'>We help our clients stay ahead of the competition by using the latest technology and industry best practices.</p>
                            <ul className="link-social d-flex align-items-center gap-5 gap-lg-7">
                                {socialLinks.map(({ href, title, icon: Icon }, index) => (
                                    <li key={index}>
                                        <Link className='icon pt-6 pe-6 pt-lg-9 pe-lg-9' target="_blank" href={href} title={title}>
                                            <Icon width={36} height={36} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col sm={12} md={4} lg={3}>
                            <h5 className="mb-5 mb-lg-7">Services</h5>
                            <ul className="d-flex flex-column gap-4 gap-lg-5">
                                {servicesLinks.map(({ href, title, text }, index) => (
                                    <li key={index}>
                                        <Link href={href} title={title}>{text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col sm={12} md={4} lg={3}>
                            <h5 className="mb-5 mb-lg-7">Expertise & Industry</h5>
                            <ul className="d-flex flex-column gap-4 gap-lg-5">
                                {expertiseLinks.map(({ href, title, text }, index) => (
                                    <li key={index}>
                                        <Link href={href} title={title}>{text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col sm={12} md={4} lg={3}>
                            <h5 className="mb-5 mb-lg-7">Data & AI</h5>
                            <ul className="d-flex flex-column gap-4 gap-lg-5">
                                {dataAILinks.map(({ href, title, text }, index) => (
                                    <li key={index}>
                                        <Link href={href} title={title}>{text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4 py-5 py-lg-10 border-top">
                    <span className='fw-semibold  text-dark text-center text-lg-start'>Copyright © 2020 - {currentYear} Anhas Web Private Limited. All rights reserved.</span>
                    <ul className="d-flex align-items-center justify-content-center justify-content-lg-end gap-4 gap-lg-6">
                        {footerLinks.map(({ href, title, text }, index) => (
                            <li key={index}>
                                <Link href={href} title={title}>{text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </footer>
    );
}
