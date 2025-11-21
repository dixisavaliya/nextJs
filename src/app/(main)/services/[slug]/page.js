'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SubBanner from '@/components/section/SectionHero';
import SectionCTA from '@/components/section/SectionCTA';
import { IconCrossArrow, IconListUI, IconRoundArrow, IconConnectExpertShape1, IconConnectExpertShape2, IconConnectExpertShape3 } from '@/components/icon';
import SectionRecentBlog from '@/components/section/SectionRecentBlog';
import SectionTestimonials from '@/components/section/SectionTestimonials';
import { ContactForm } from '@/components/forms';
import { SliderServicesDevelopment, SliderWork } from '@/components/slider';
import { ItemProcess, ItemTech } from '@/components/utilities';


export default function ServiceDetailsPage({ params }) {
    const { slug } = use(params);


    const getServiceData = (slug) => {
        const services = {
            'android-app-development': {
                title: 'Android App Development',
                subtitle: 'Android App Development Company',
                description: 'As a leading Android app development company in the USA and India, Anhas Web provides custom Android app development services to build scalable apps tailored to your business needs. From MVP development to fully customized applications, our Android developers have the expertise to cater to your diverse development requirements.',
                icon: '/images/service/android.svg',
                image: '/images/service/service-img.jpg',
                bannerImage: '/images/about/banner.jpg',
                services: [
                    {
                        icon: 'development-services',
                        title: 'Custom Android App Development',
                        description: 'Our programmers leverage the power of Kotlin, Java and JetPack Compose to develop Android Apps that are optimized for performance, security, and scalability, providing a cutting-edge solution that stands out in the competitive app market.'
                    },
                    {
                        icon: 'development-services',
                        title: 'App UI/UX Design',
                        description: 'If you are looking to design an app from scratch or redesign an existing app. Our UI/UX designers follow Industry Standards and the latest trends to design an app that is user-friendly, easy to navigate and offers world-class app user experiences.'
                    },
                    {
                        icon: 'development-services',
                        title: 'Kotlin Multi Platform Development',
                        description: 'Our Kotlin Multi platform Mobile (KMM) team can help you migrate your existing apps to a modern KMM architecture with shared code for both Android and iOS-supported apps and faster time-to-market without compromising on app user experience.'
                    },
                    {
                        icon: 'development-services',
                        title: 'Custom Android App Development',
                        description: 'Our programmers leverage the power of Kotlin, Java and JetPack Compose to develop Android Apps that are optimized for performance, security, and scalability, providing a cutting-edge solution that stands out in the competitive app market.'
                    },
                    {
                        icon: 'development-services',
                        title: 'App UI/UX Design',
                        description: 'If you are looking to design an app from scratch or redesign an existing app. Our UI/UX designers follow Industry Standards and the latest trends to design an app that is user-friendly, easy to navigate and offers world-class app user experiences.'
                    }
                ],
                process: [
                    {
                        number: '01',
                        icon: '/images/service/icon-1.svg',
                        title: 'Strategic Planning',
                        description: 'The stage involves a thorough analysis of functional and non-functional requirements of the client business, comprehensive competition research, development of user personas, and finalizing measurable goals and key performance indicators (KPIs) for the project\'s success.'
                    },
                    {
                        number: '02',
                        icon: '/images/service/icon-2.svg',
                        title: 'Design Phase',
                        description: 'During this phase, we refine app requirements, plan the user experience, design mockups, finalize the user interface design, and finally develop clickable app prototypes to be delivered to the mobile developers.'
                    },
                    {
                        number: '03',
                        icon: '/images/service/icon-3.svg',
                        title: 'Development Stage',
                        description: 'Here, we carefully select and build the appropriate app architecture, finalize the back-end technologies, frameworks, and libraries, and integrate APIs to establish a robust continuous integration and continuous delivery(CI/CD) setup.'
                    },
                    {
                        number: '04',
                        icon: '/images/service/icon-4.svg',
                        title: 'Quality Assurance',
                        description: 'Next step in our mobile application development process is carrying out the quality assurance of the product. Our diligent quality assurance procedures involve stringent testing of critical functionalities, additional features, and user interfaces. We conduct thorough security, usability, and performance testing to ensure a polished and reliable app experience.'
                    },
                    {
                        number: '05',
                        icon: '/images/service/icon-5.svg',
                        title: 'Release and Support',
                        description: 'Once the app has been tested across multiple parameters, we submit the app to the Apple App Store and Google Play Store, managing the entire release process. We continuously enhance the app with extended functionality based on user feedback and analytics, ensuring a seamless and supported experience for your users.'
                    }
                ],
                technologies: {
                    'Programming Language': ['Kotlin', 'JAVA'],
                    'Frameworks': ['React Native', 'Flutter', 'Ionic'],
                    'Plugins & Libraries': [
                        'Jetpack Compose', 'Jetpack components', 'Activity', 'Databinding', 'Hilt',
                        'Android lifecycle', 'Material Design Components', 'Compose', 'Navigation',
                        'Paging', 'Room', 'Work manager', 'Espresso: UI test', 'Junit: Function test',
                        'Retrofit 2.0', 'Ktor', 'Gson', 'Jackson', 'Moshi', 'Kotlin serialization',
                        'ExoPlayer', 'Folding Plugin', 'Coil', 'Glide', 'Koin'
                    ],
                    'Local Database': ['SQLite Database', 'Room persistence library'],
                    'Tools & Utilities': [
                        'Android Studio IDE', 'Android Emulator', 'LeakCanary', 'Vysor',
                        'Zeplin', 'Figma', 'Jira'
                    ]
                }
            },
            'mobile-apps': {
                title: 'Mobile App Development',
                subtitle: 'Mobile App Development Company',
                description: 'We build reliable, intuitive mobile apps that keep your data safe and help your business stay connected with customers anytime, anywhere. Our mobile app development services cover both iOS and Android platforms.',
                icon: '/images/work-with-us/mobile-apps.svg',
                image: '/images/service/service-img.jpg',
                bannerImage: '/images/about/banner.jpg',
                services: [
                    {
                        icon: 'development-services',
                        title: 'iOS App Development',
                        description: 'We create native iOS applications using Swift and Objective-C, ensuring optimal performance and user experience on Apple devices.'
                    },
                    {
                        icon: 'development-services',
                        title: 'Cross-Platform Development',
                        description: 'Build once, deploy everywhere with our cross-platform solutions using React Native, Flutter, and Xamarin technologies.'
                    },
                    {
                        icon: 'development-services',
                        title: 'App Store Optimization',
                        description: 'We help optimize your app for better visibility and downloads in both Apple App Store and Google Play Store.'
                    }
                ],
                process: [
                    {
                        number: '01',
                        icon: '/images/service/icon-1.svg',
                        title: 'Discovery & Planning',
                        description: 'We start by understanding your business goals, target audience, and technical requirements to create a comprehensive development plan.'
                    },
                    {
                        number: '02',
                        icon: '/images/service/icon-2.svg',
                        title: 'UI/UX Design',
                        description: 'Our designers create intuitive and engaging user interfaces that provide exceptional user experience across all devices.'
                    },
                    {
                        number: '03',
                        icon: '/images/service/icon-3.svg',
                        title: 'Development',
                        description: 'Our experienced developers build your app using the latest technologies and best practices for optimal performance.'
                    },
                    {
                        number: '04',
                        icon: '/images/service/icon-4.svg',
                        title: 'Testing & QA',
                        description: 'Comprehensive testing ensures your app works flawlessly across different devices, operating systems, and network conditions.'
                    },
                    {
                        number: '05',
                        icon: '/images/service/icon-5.svg',
                        title: 'Deployment & Support',
                        description: 'We handle app store submission and provide ongoing maintenance and support to keep your app running smoothly.'
                    }
                ],
                technologies: {
                    'Mobile Platforms': ['iOS', 'Android', 'React Native', 'Flutter'],
                    'Programming Languages': ['Swift', 'Kotlin', 'JavaScript', 'Dart'],
                    'Frameworks': ['React Native', 'Flutter', 'Xamarin', 'Ionic'],
                    'Tools & Utilities': [
                        'Xcode', 'Android Studio', 'Figma', 'Sketch', 'Firebase',
                        'AWS', 'Google Cloud', 'App Store Connect', 'Google Play Console'
                    ]
                }
            }
        };
        return services[slug] || {
            title: 'Service Not Found',
            subtitle: 'Service Details',
            description: 'The requested service could not be found. Please check the URL and try again.',
            icon: '/images/service/android.svg',
            image: '/images/service/service-img.jpg',
            bannerImage: '/images/about/banner.jpg',
            services: [],
            process: [],
            technologies: {}
        };
    };

    const serviceData = getServiceData(slug);

    // Function to get category-specific icons
    const getCategoryIcon = (category) => {
        const categoryIcons = {
            'Programming Language': '/images/service/pogramming-language.svg',
            'Frameworks': '/images/service/framework.svg',
            'Mobile Platforms': '/images/service/mobile-platforms.svg',
            'Plugins & Libraries': '/images/service/plugins-libraries.svg',
            'Local Database': '/images/service/local-database.svg',
            'Tools & Utilities': '/images/service/tools-utilities.svg'
        };
        return categoryIcons[category] || '/images/service/pogramming-language.svg';
    };

    const industries = [
        { icon: '/images/crafting/healthcare.svg', name: 'Healthcare' },
        { icon: '/images/crafting/finance.svg', name: 'Finance' },
        { icon: '/images/crafting/restaurant.svg', name: 'Restaurant' },
        { icon: '/images/crafting/e-commerce.svg', name: 'eCommerce' },
        { icon: '/images/crafting/logistics.svg', name: 'Logistics' },
        { icon: '/images/crafting/social-networking.svg', name: 'Social Networking' },
        { icon: '/images/crafting/games-sports.svg', name: 'Games & Sports' },
        { icon: '/images/crafting/travel.svg', name: 'Travel' },
        { icon: '/images/crafting/aviation.svg', name: 'Aviation' },
        { icon: '/images/crafting/real-estate.svg', name: 'Real Estate' },
        { icon: '/images/crafting/education.svg', name: 'Education' },
        { icon: '/images/crafting/on-demand.svg', name: 'On-Demand' },
        { icon: '/images/crafting/entertainment.svg', name: 'Entertainment' },
        { icon: '/images/crafting/government.svg', name: 'Government' },
        { icon: '/images/crafting/agriculture.svg', name: 'Agriculture' }
    ];

    const portfolioItems = [
        {
            image: '/images/our-work-1.png',
            title: 'Stripe',
            description: 'This comprehensive guide explores the key elements that drive the cost to develop an app in Saudi Arabia. It offers insights into the cost implications of various types be it…',
            tags: ['Android', 'Next Js', 'React', 'Flutter']
        },
        {
            image: '/images/our-work-2.png',
            title: 'Stripe',
            description: 'This comprehensive guide explores the key elements that drive the cost to develop an app in Saudi Arabia. It offers insights into the cost implications of various types be it…',
            tags: ['Android', 'Next Js', 'React', 'Flutter']
        },
        {
            image: '/images/our-work-3.png',
            title: 'Stripe',
            description: 'This comprehensive guide explores the key elements that drive the cost to develop an app in Saudi Arabia. It offers insights into the cost implications of various types be it…',
            tags: ['Android', 'Next Js', 'React', 'Flutter']
        },
        {
            image: '/images/our-work-4.png',
            title: 'Stripe',
            description: 'This comprehensive guide explores the key elements that drive the cost to develop an app in Saudi Arabia. It offers insights into the cost implications of various types be it…',
            tags: ['Android', 'Next Js', 'React', 'Flutter']
        },
        {
            image: '/images/our-work-1.png',
            title: 'Stripe',
            description: 'This comprehensive guide explores the key elements that drive the cost to develop an app in Saudi Arabia. It offers insights into the cost implications of various types be it…',
            tags: ['Android', 'Next Js', 'React', 'Flutter']
        },
        {
            image: '/images/our-work-2.png',
            title: 'Stripe',
            description: 'This comprehensive guide explores the key elements that drive the cost to develop an app in Saudi Arabia. It offers insights into the cost implications of various types be it…',
            tags: ['Android', 'Next Js', 'React', 'Flutter']
        },
        {
            image: '/images/our-work-3.png',
            title: 'Stripe',
            description: 'This comprehensive guide explores the key elements that drive the cost to develop an app in Saudi Arabia. It offers insights into the cost implications of various types be it…',
            tags: ['Android', 'Next Js', 'React', 'Flutter']
        },
        {
            image: '/images/our-work-4.png',
            title: 'Stripe',
            description: 'This comprehensive guide explores the key elements that drive the cost to develop an app in Saudi Arabia. It offers insights into the cost implications of various types be it…',
            tags: ['Android', 'Next Js', 'React', 'Flutter']
        }
    ];

    const testimonials = [
        {
            quote: 'Hardik and his team have always delivered exceptional results for great value. Even though we are working remotely, communication is smooth. They always promptly get back to requests and carry out changes to our site very quickly so I would be happy to recommend them.',
            name: 'Alex Cooper',
            position: 'Media Director, Turn Around Music Group.',
            avatar: '/images/thumb-1.png'
        },
        {
            quote: 'Hardik and his team have always delivered exceptional results for great value. Even though we are working remotely, communication is smooth. They always promptly get back to requests and carry out changes to our site very quickly so I would be happy to recommend them.',
            name: 'Alex Cooper',
            position: 'Media Director, Turn Around Music Group.',
            avatar: '/images/thumb-2.png'
        },
        {
            quote: 'Hardik and his team have always delivered exceptional results for great value. Even though we are working remotely, communication is smooth. They always promptly get back to requests and carry out changes to our site very quickly so I would be happy to recommend them.',
            name: 'Alex Cooper',
            position: 'Media Director, Turn Around Music Group.',
            avatar: '/images/thumb-3.png'
        },
        {
            quote: 'Hardik and his team have always delivered exceptional results for great value. Even though we are working remotely, communication is smooth. They always promptly get back to requests and carry out changes to our site very quickly so I would be happy to recommend them.',
            name: 'Alex Cooper',
            position: 'Media Director, Turn Around Music Group.',
            avatar: '/images/thumb-4.png'
        }
    ];

    return (
        <>
            <SubBanner
                title={serviceData.title}
                description="Our commitment to invest in pro bono services brings our talent, expertise and insight to organizations tackling today's urgent challenges."
                image={serviceData.bannerImage}
                alt={serviceData.title}
                width={1920}
                height={400}
            />

            <section className="py-lg-25 py-15">
                <Container fluid>
                    <Row className='gy-10 gy-lg-6'>
                        <Col lg={3}>
                            <figure className="image-figure picture rounded-md">
                                <Image
                                    className="shape-box-img"
                                    src={serviceData.image}
                                    alt={`${serviceData.title} Company`}
                                    width={300}
                                    height={300}
                                />
                                <div className="holder text-primary">
                                    <IconRoundArrow
                                        width={60}
                                        height={60}
                                    />
                                </div>
                            </figure>
                        </Col>
                        <Col lg={4}>
                            <div className="d-flex flex-column ps-lg-6 gap-lg-6 gap-5 ">
                                <Image
                                    className="image-service"
                                    src={serviceData.icon}
                                    alt="Service Icon"
                                    width={60}
                                    height={60}
                                />
                                <h2 className="text-secondary pe-lg-25"><span className="text-primary">{serviceData.title.split(' ')[0]}</span> {serviceData.subtitle.replace(serviceData.title.split(' ')[0], '').trim()}</h2>
                                <p className="fw-medium mb-0">{serviceData.description}</p>
                                <Button as={Link} href="/contact-us" className="px-4 px-lg-6 me-auto" variant="primary">
                                    Consult Now
                                    <i className="icon p-lg-3 p-2"><IconCrossArrow width={24} height={24} /></i>
                                </Button>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className='bg-primary-50 rounded-xs p-lg-10 p-5'>
                                <ContactForm />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-light py-lg-25 py-15">
                <Container fluid>
                    <div className="title">
                        <h2>{serviceData.title} Services We Offer</h2>
                        <p>From Fortune 500 companies to unicorn startups, businesses have leveraged our extensive development services to create scalable apps with rich user experiences. From ideation to MVP development with iteration and improvement till final deployment, we provide comprehensive services for every stage of your development.</p>
                    </div>
                    <SliderServicesDevelopment services={serviceData.services} />
                </Container>
            </section>

            <SectionCTA
                title="Innovation Starts Here"
                description="Transform Your Concepts into Reality with Our Innovative Prototyping Service - 5000+ Projects Delivered!"
            />

            <section className="py-lg-25 py-15">
                <Container fluid>

                    <div className="title text-center">
                        <h2>Crafting Unique and Tailored Mobile Solutions for a Spectrum of Industries</h2>
                        <p>As a leading mobile app development services firm, we excel in offering custom solutions for various industries,</p>
                    </div>
                    <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-0 text-center border-start border-top">
                        {industries.map((industry, index) => (
                            <Col key={index} className="border-bottom border-end p-lg-8 p-4">
                                <span className="bg-light rounded-circle p-10 p-lg-15 mb-lg-6 mb-5 position-relative d-inline-block">
                                    <i className=" d-inline-block icon pt-10 pe-10 pt-lg-15 pe-lg-15 position-absolute top-50 start-50 translate-middle">
                                        <Image
                                            src={industry.icon}
                                            alt={industry.name}
                                            width={40}
                                            height={40}
                                        />
                                    </i>
                                </span>
                                <h6 className="text-body fw-semibold">{industry.name}</h6>
                            </Col>
                        ))}
                    </Row>

                </Container>
            </section>

            <section className="section-process bg-dark py-lg-25 py-15">
                <div className="shape shape1"></div>
                <div className="shape shape2"></div>
                <div className="shape shape3"></div>
                <Container fluid className="position-relative z-1">
                    <div className="title text-center">
                        <span className="text-white mb-lg-6 mb-5">Step-by-Step Guide</span>
                        <h2 className="mb-2 text-white">{serviceData.title} Process</h2>
                        <p className="text-white">As a committed custom development services provider, we are dedicated to utilizing the Agile DevOps framework. It empowers us to consistently deliver predictable, scalable, and measurable results to our clients. Our development approach further ensures a high level of consistency and reliability throughout the project development process.</p>
                    </div>
                    <Row className="g-7 justify-content-center">
                        {serviceData.process.map((step, index) => (
                            <ItemProcess key={index} processData={step} />
                        ))}
                    </Row>

                </Container>
            </section>

            <section className="py-lg-25 py-15">
                <Container fluid>
                    <div className="title">
                        <h2>Technology Stack We Use For {serviceData.title}</h2>
                        <p>Here's a list of tools and technologies our dedicated experts excel in, catering to various development requirements:</p>
                    </div>
                    <div className="bg-primary-50 rounded-xs p-lg-10 p-5">
                        {Object.entries(serviceData.technologies).map(([category, technologies], index) => (
                            <ItemTech key={index} techData={{ category, items: technologies, icon: getCategoryIcon(category) }} />
                        ))}
                    </div>

                </Container>
            </section>

            <section className="section-expert py-lg-25 py-15 position-relative text-center">
                <IconConnectExpertShape3
                    className="shape-3"
                    width={200}
                    height={200}
                />
                <Container fluid>
                    <div className="position-relative">
                        <IconConnectExpertShape1
                            className="shape-1"
                            width={150}
                            height={150}
                        />
                        <IconConnectExpertShape2
                            className="shape-2"
                            width={150}
                            height={150}
                        />
                        <div className="title text-center mx-auto">
                            <h2>The mobile application development market size is expected to reach $567.19 billion in 2030</h2>
                            <p>Take your business to new heights by offering unmatched mobility to your customers!</p>
                            <Button as={Link} href="/contact-us" className="px-4 px-lg-6" variant="primary">
                                Connect with an Expert
                                <i className="icon p-lg-3 p-2"><IconCrossArrow width={24} height={24} /></i>
                            </Button>
                        </div>
                        <figure className="figure picture mx-auto ratio ratio-2x1 rounded-xs">
                            <Image
                                src="/images/service/connect-expert-img.jpg"
                                alt=""
                                width={1200}
                                height={600}
                            />
                        </figure>
                    </div>
                </Container>
            </section>

            <section className="py-lg-25 py-15">
                <Container fluid>
                    <div className="title-group d-flex flex-column gap-5 flex-md-row justify-content-lg-between align-items-start align-items-lg-end margin-child">
                        <div className="title mb-0">
                            <span className="tag">Our Work</span>
                            <h2>What we served to client.</h2>
                            <p className="mb-0">We design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                        </div>
                        <Button as={Link} href="/portfolio" className="px-4 px-lg-6" variant="primary">
                            View Portfolio
                            <i className="icon p-lg-3 p-2"><IconCrossArrow width={24} height={24} /></i>
                        </Button>
                    </div>

                </Container>
                <SliderWork portfolioItems={portfolioItems} />
            </section>

            <SectionCTA
                title="Innovation Starts Here"
                description="Transform Your Concepts into Reality with Our Innovative Prototyping Service - 5000+ Projects Delivered!"
            />

            <SectionTestimonials className="bg-light" />

            {/* <SectionRecentBlog /> */}
        </>
    );
}
