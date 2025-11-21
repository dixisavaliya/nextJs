import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import RequestForm from '@/components/forms/RequestForm';
import SectionCTA from '@/components/section/SectionCTA';
import { ItemCard, ItemList } from '@/components/utilities';
import { IconProductShape1, IconProductShape2, IconProductShape3, IconProductShape4, IconProductShape5, IconCheckCircle, IconBlueArrow, IconCallProduct } from '@/components/icon';

export const metadata = {
    title: "Product | Anhas Web - Real Estate CRM Software",
    description: "Manage leads, bookings, and reports effortlessly with our feature-rich Real Estate CRM software. Organize your real estate business with our easy CRM for handling leads, bookings, leaves, reports, and statistics.",
    keywords: "real estate CRM, property management software, lead management system, booking management, real estate software, property CRM, real estate business management"
};

export default function ProductPage() {
    const featureCards = [
        { icon: '/images/product/user-management.svg', title: 'User Management', description: 'Assign roles, manage permissions, and track activity to maintain complete control over your team.' },
        { icon: '/images/product/project-configurations.svg', title: 'Project Configurations', description: 'Configure property details, manage availability, and update pricing directly within the system.' },
        { icon: '/images/product/inquiry-configurations.svg', title: 'Inquiry Configurations', description: 'Customize inquiry forms and streamline the way you capture customer interest.' },
        { icon: '/images/product/booking-settings.svg', title: 'Booking Settings', description: 'Easily adjust booking preferences, including payment terms, deadlines, and customer notifications.' },
        { icon: '/images/product/lead-source-configurations.svg', title: 'Lead Source Configurations', description: 'Track and categorize your lead sources to analyze and optimize your marketing efforts.' },
        { icon: '/images/product/user-dashboards-tracking.svg', title: 'User Dashboards Tracking', description: 'Monitor individual user dashboards to review performance, tasks, and progress in real time.' },
        { icon: '/images/product/leaves-management.svg', title: 'Leaves Management', description: 'Keep your team organized with tools for tracking, approving, and managing leaves effectively.' }
    ];

    const dashboardFeatures = [
        { title: 'Leads Summary', description: 'Track new, active, and lost leads at a glance.', iconColor: 'bg-light' },
        { title: 'Bookings Management', description: 'View ongoing and completed bookings in one place.', iconColor: 'bg-light' }
    ];

    const leadManagementFeatures = [
        { title: 'Extensive Lead Filters', description: 'Quickly sort and find leads with advanced filtering options for staff and admins.', iconColor: 'bg-primary-50' },
        { title: 'Lead History & Remarks', description: 'Access a detailed timeline of lead activities and remarks for seamless follow-ups.', iconColor: 'bg-primary-50' },
        { title: 'Customizable Lead Filters', description: 'Tailor the filtering process to fit your unique requirements.', iconColor: 'bg-primary-50' }
    ];

    const reportFeatures = [
        { title: 'Project-Wise Lead Reports', description: 'Analyze lead performance across various projects.', iconColor: 'bg-white' },
        { title: 'Source-Wise Lead Reports', description: 'Understand which marketing channels are driving results.', iconColor: 'bg-white' },
        { title: 'Inquiry Category-Wise Reports', description: 'Track inquiries based on categories for better targeting.', iconColor: 'bg-white' },
        { title: 'User-Wise Reports', description: 'Assess individual team member performance.', iconColor: 'bg-white' }
    ];

    return (
        <>
            <section className="section-product py-lg-25 py-15">
                <IconProductShape1
                    className="shape-1"
                    width={200}
                    height={200}
                />
                <IconProductShape2
                    className="shape-2"
                    width={150}
                    height={150}
                />
                <Container fluid>
                    <div className="text-center pb-lg-25 pb-15">
                        <span className='tag mb-lg-6 mb-5'>Real Estate CRM</span>
                        <h2 className='text-primary mb-lg-10 mb-5'>Manage Leads, Bookings, and Reports Effortlessly</h2>
                        <p className='h5 fw-medium mb-lg-15 pb-2 mb-7'>Organize your real estate business with our easy CRM for handling leads, bookings, leaves, reports, and statistics—all in one place. Stay in control, save time, and make better decisions with clear insights and smooth day-to-day management.</p>
                        <div className="d-flex gap-lg-6 gap-4 flex-wrap justify-content-center">
                            <Button as="a" href="tel:+919712487143" variant="dark">Get Free Trail</Button>
                            <Button as="a" href="tel:+919712487143" variant="primary">
                                Request Callback
                                <i className="icon p-lg-3 p-2">
                                    <IconCallProduct width={24} height={24} />
                                </i>
                            </Button>
                        </div>
                    </div>

                </Container>
                <Image
                    className="position-relative z-1"
                    src="/images/product/img-1.png"
                    alt="Real Estate CRM Software"
                    width={3840}
                    height={1932}
                />
            </section>

            <section className="bg-light py-lg-25 py-15">
                <Container fluid>
                    <div className="title text-center pb-7">
                        <span className='tag'>Admin Panel</span>
                        <h2>Feature-Rich CRM to Simplify and Grow Your Real Estate Business</h2>
                    </div>
                    <Row className='g-6'>
                        {featureCards.map((card, index) => (
                            <ItemCard key={index} cardData={card} />
                        ))}
                        <Col sm={12} md={6} xl={3}>
                            <div className="h-100 p-lg-10 p-4 rounded-xs d-flex flex-column position-relative overflow-hidden">
                                <figure className='picture absolute-div'>
                                    <Image src="/images/product/admin-panel-img.jpg" alt="Admin Image" width={407} height={365} />
                                    <span className='position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-75'></span>
                                </figure>
                                <span className='tag mb-lg-7 mb-5 position-relative z-1'>Stay Tuned</span>
                                <h2 className='h3 text-white position-relative z-1 mb-lg-7 mb-5'>More features<br /> coming soon...</h2>
                                <Button as={Link} href="/contact-us" className="px-4 px-lg-6 mt-auto position-relative z-1 me-auto" variant="light">
                                    Contact Us
                                    <IconBlueArrow width={20} height={20} />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <SectionCTA
                title="Curious how this feature-rich CRM can fit into your business smoothly and securely?"
            />

            <section className="py-lg-25 py-15">
                <IconProductShape3
                    className="shape-dashboard-1 d-none d-md-block"
                    width={200}
                    height={200}
                />
                <Container fluid className='position-relative z-1'>
                    <Row className="align-items-center gy-4">
                        <Col md={12} lg={6}>
                            <Image
                                src="/images/product/img-3.png"
                                alt="Dashboard"
                                width={1670}
                                height={1138}
                            />
                        </Col>
                        <Col md={12} lg={6}>
                            <div className="title">
                                <span className='tag'>Features</span>
                                <h2>Dashboard</h2>
                                <p>Gain a complete overview of your business with real-time metrics and insights, including:</p>
                            </div>
                            <ul className="list-dashboard">
                                {dashboardFeatures.map((feature, index) => (
                                    <ItemList key={index} listData={feature} />
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-light py-lg-25 py-15">
                <Container fluid>
                    <Row className="gy-4">
                        <Col md={12} lg={6}>
                            <div className="bg-white p-lg-10 p-5 rounded-xs h-100">
                                <i className='icon p-10 p-lg-15 mb-lg-10 mb-5 mb-lg-10 mb-5'>
                                    <Image src="/images/product/leave-module.svg" alt="Leave Module" width={120} height={121} />
                                </i>
                                <h2 className='h5 mb-4'>Leave Module</h2>
                                <small className='text-dark fw-medium'>Streamline your team's productivity with an integrated leave management module to track and approve employee leaves.</small>
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div className="bg-white p-lg-10 p-5 rounded-xs h-100">
                                <i className='icon p-10 p-lg-15 mb-lg-10 mb-5 mb-lg-10 mb-5'>
                                    <Image src="/images/product/booking-management.svg" alt="Booking Management" width={120} height={121} />
                                </i>
                                <h2 className='h5 mb-4'>Booking Management</h2>
                                <small className='text-dark fw-medium'>Simplify your property booking process with tools to manage inquiries, confirm bookings, and monitor their progress.</small>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-lg-25 py-15">
                <IconProductShape4
                    className="shape-dashboard-2 d-none d-md-block"
                    width={200}
                    height={200}
                />
                <Container fluid className='position-relative z-1'>
                    <Row className="align-items-center gy-4">
                        <Col md={12} lg={6}>
                            <div className="title">
                                <span className='tag'>Features</span>
                                <h2>Lead Management</h2>
                                <p>Effortlessly handle your lead pipeline with:</p>

                            </div>
                            <ul className="list-dashboard">
                                {leadManagementFeatures.map((feature, index) => (
                                    <ItemList key={index} listData={feature} />
                                ))}
                            </ul>
                        </Col>
                        <Col md={12} lg={6}>
                            <Image
                                className="dashboard-img"
                                src="/images/product/img-4.png"
                                alt="Dashboard"
                                width={1982}
                                height={1669}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-light py-lg-25 py-15 position-relative">
                <IconProductShape5
                    className="shape-dashboard-3 d-none d-md-block"
                    width={200}
                    height={200}
                />
                <Container fluid className='position-relative z-1'>
                    <Row className="align-items-center gy-4">
                        <Col md={12} lg={8}>
                            <Image
                                className="dashboard-img"
                                src="/images/product/img-5.png"
                                alt="Dashboard"
                                width={1982}
                                height={1271}
                            />
                        </Col>
                        <Col md={12} lg={4}>
                            <div className="title">
                                <span className='tag bg-white'>Features</span>
                                <h2>Reports</h2>
                                <p>Comprehensive lead insights, including</p>
                            </div>
                            <ul className="list-dashboard">
                                {reportFeatures.map((feature, index) => (
                                    <ItemList key={index} listData={feature} />
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pt-lg-25 pt-15">
                <Container fluid>
                    <Row className="gy-4">
                        <Col md={12} lg={6}>
                            <div className="bg-light p-lg-10 p-5 rounded-xs h-100">
                                <i className='icon p-10 p-lg-15 mb-lg-10 mb-5 mb-lg-10 mb-5'>
                                    <Image src="/images/product/leave-reports.svg" alt="Leave Reports" width={120} height={121} />
                                </i>
                                <h2 className='h5 mb-4'>Leave Reports</h2>
                                <small className='text-dark fw-medium'>Generate detailed reports on employee leave history and trends for better workforce management.</small>
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div className="bg-light p-lg-10 p-5 rounded-xs h-100">
                                <i className='icon p-10 p-lg-15 mb-lg-10 mb-5 mb-lg-10 mb-5'>
                                    <Image src="/images/product/user-stats-reports.svg" alt="User Stats Reports" width={120} height={121} />
                                </i>
                                <h2 className='h5 mb-4'>User Stats Reports</h2>
                                <small className='text-dark fw-medium'>Measure and review user activities, productivity, and overall engagement with actionable insights.</small>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-lg-25 py-15">
                <Container fluid>
                    <div className="title text-center margin-child">
                        <h2>Ask For a Demo</h2>
                    </div>
                </Container>
                <Row className="align-items-center g-0 px-4 px-sm-6 px-md-10 px-lg-0">
                    <Col md={12} lg={3} xl={4} className="d-none d-lg-flex">
                        <Image
                            className="dashboard-img"
                            src="/images/product/img-6.png"
                            alt="Dashboard"
                            width={1196}
                            height={884}
                        />
                    </Col>
                    <Col md={12} lg={6} xl={4}>
                        <div className='bg-primary-50 rounded-xs p-lg-10 p-5'>
                            <RequestForm />
                        </div>
                    </Col>
                    <Col md={12} lg={3} xl={4} className="d-none d-lg-flex">
                        <Image
                            className="dashboard-img"
                            src="/images/product/img-7.png"
                            alt="Dashboard"
                            width={1172}
                            height={884}
                        />
                    </Col>
                </Row>
            </section>
        </>
    );
}
