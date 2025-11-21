'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Navbar, Nav, NavDropdown, Container, Button, Row, Col } from 'react-bootstrap';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavLink from 'react-bootstrap/NavLink';
import { DropdownItem } from 'react-bootstrap';
import { IconBrandLogo, IconCrossArrow } from './icon';
import { useAuth } from '@/context/AuthContext';

export default function Header({ headerFixed = true }) {
    const { logout, isAuthenticated } = useAuth();
    const [isScrolled, setIsScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            if (scrollPosition > 150) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
            window.location.href = "/login";
        } catch (error) {
            console.error(error);
            toast.error(error.result.message);
        }
    };

    return (
        <header className={`app-header position-fixed right-0 left-0 py-4 py-lg-6 w-100 ${isScrolled ? 'scrolled' : ''}`} data-bs-header-fixed={headerFixed.toString()}>
            <Container fluid>
                <Navbar expand="lg" className="py-4 px-lg-6 px-4  bg-white rounded-sm transition" expanded={expanded} onToggle={setExpanded}>
                    <NavbarBrand href="/">
                        <IconBrandLogo width={220} height={36} />
                    </NavbarBrand>
                    <NavbarToggle aria-controls="navbarSupportedContent">
                        {!expanded ? (
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#333333" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                                <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" fill="#333333" />
                            </svg>
                        )}
                    </NavbarToggle>
                    <NavbarCollapse id="navbarSupportedContent" className="w-full justify-content-between">
                        <Nav className="mx-auto gap-4 gap-lg-12 py-lg-0 py-4">
                            <NavLink href="/product">Product</NavLink>
                            <NavLink href="/about">About</NavLink>
                            <NavDropdown title="Services" id="services-dropdown">
                                {(() => {
                                    const services = [
                                        { href: '/services/product-engineering', title: 'Product Engineering', icon: '/images/menu/software-development.svg', alt: 'Software Development, Web & Mobile', description: 'We keep your product running smoothly and offer smart engineering solutions to improve, scale, and support it as your business grows.' },
                                        { href: '/services/software-web-development', title: 'Software & Web Development', icon: '/images/menu/data-architecture.svg', alt: 'Data Architecture & Engineering', description: 'Create dependable, user-friendly software made to fit your business, so you can work easier and grow quicker.' },
                                        { href: '/services/devops-solutions', title: 'DevOps Solutions', icon: '/images/menu/ai-integration.svg', alt: 'AI Integration, Machine Learning', description: 'Helping keep your systems safe, running smoothly, and up to date—while saving money and speeding things up.' },
                                        { href: '/services/ecommerce-solutions', title: 'E-Commerce Solutions', icon: '/images/menu/system-design.svg', alt: 'System Design & Modernization', description: 'Easy-to-use online stores designed to help you sell more, stay secure, and provide customers with a great shopping experience.' },
                                        { href: '/services/mobile-apps', title: 'Mobile Apps', icon: '/images/menu/cloud-management.svg', alt: 'Cloud Management and Infrastructure', description: 'Reliable, intuitive mobile apps that keep your data safe and help your business stay connected with customers anytime, anywhere.' },
                                        { href: '/services/seo-digital-marketing', title: 'SEO & Digital Marketing', icon: '/images/menu/digital-media.svg', alt: 'Icon', description: 'We create effective digital marketing plans that boost your brand, reach more customers, and grow your business online.' }
                                    ];

                                    return (
                                        <Row className='g-0'>
                                            <Col lg={8}>
                                                <div className="p-4 p-md-6 p-lg-10">
                                                    <Row className='gy-6 gy-md-10 gy-xl-15 '>
                                                        {services.map((service, index) => (
                                                            <Col md={6} key={index}>
                                                                <DropdownItem href={service.href}>
                                                                    <i className="icon pt-lg-15 pe-lg-15 pt-10 pe-10 rounded-circle bg-primary-50 transition">
                                                                        <Image src={service.icon} alt={service.alt} width={32} height={32} />
                                                                    </i>
                                                                    <div className="flex-fill">
                                                                        <h6 className="small text-dark mb-2 fw-semibold transition">{service.title}</h6>
                                                                        <small className="text-sm fw-medium text-body">{service.description}</small>
                                                                    </div>
                                                                </DropdownItem>
                                                            </Col>
                                                        ))}
                                                    </Row>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="bg-primary-50 p-4 p-md-6 p-lg-7 h-100">
                                                    <h4 className="small text-dark mb-2 fw-semibold">Got an idea to execute?</h4>
                                                    <h2 className="h5 text-primary mb-2">Let's start planning!</h2>
                                                    <small className="inline-block w-100 text-sm fw-medium text-dark-500 mb-5 mb-lg-7">You need a skilled tech team to turn your idea into real success.</small>
                                                    <Button href="/contact-us" size="sm" className="mb-5 mb-lg-10">Contact Us <i className="icon p-lg-3 p-2"><IconCrossArrow width={24} height={24} /></i></Button>
                                                    <figure className="picture rounded-sm">
                                                        <Image src="/images/menu/get-in-touch-img.png" alt="Let's start planning" width={240} height={97} />
                                                    </figure>
                                                </div>
                                            </Col>
                                        </Row>
                                    );
                                })()}
                            </NavDropdown>
                            <NavLink href="/blogs">Blogs</NavLink>
                            <NavLink href="/careers">Careers</NavLink>
                            {isAuthenticated && <NavLink href="" onClick={handleLogout}>Logout</NavLink>}
                        </Nav>
                        <div className="btn-nav d-flex justify-content-lg-end">
                            <Button href="/contact-us">Contact Us <i className="icon p-lg-3 p-2"><IconCrossArrow width={24} height={24} /></i></Button>
                        </div>
                    </NavbarCollapse>
                </Navbar>
            </Container>
        </header>
    );
}
