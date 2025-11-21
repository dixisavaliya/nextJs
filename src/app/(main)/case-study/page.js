import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SubBanner from '@/components/section/SectionHero';
import { ItemCaseStudy } from '@/components/utilities';
import { IconCrossArrow } from '@/components/icon';

export const metadata = {
    title: "Case Study List | Anhas Web",
    description: "Our commitment to invest in pro bono services brings our talent, expertise and insight to organizations tackling today's urgent challenges.",
    keywords: "Anhas Web case studies, project showcases, web development projects, software development examples, client success stories"
};

export default function CaseStudyPage() {
    const caseStudies = [
        {
            image: '/images/case-study/img-1.jpg',
            tag: 'Healthcare',
            title: 'Docly - Healthcare App',
            description: 'AnhasWeb promotes a culture of impacting users\' lives with our innovations. And we are looking for people who share, understand our vision and contribute to it. Our company facilitates an environment with open communication, togetherness and equal opportunities.',
            link: '/case-study/docly-healthcare-app',
            stats: [
                { value: '3 Month', label: 'Estimation Time' },
                { value: '6 Member', label: 'Dedicated Team' }
            ]
        },
        {
            image: '/images/case-study/img-2.jpg',
            tag: 'E-Commerce',
            title: 'E-Commerce Platform',
            description: 'AnhasWeb promotes a culture of impacting users\' lives with our innovations. And we are looking for people who share, understand our vision and contribute to it. Our company facilitates an environment with open communication, togetherness and equal opportunities.',
            link: '/case-study/ecommerce-platform',
            stats: [
                { value: '4 Month', label: 'Estimation Time' },
                { value: '8 Member', label: 'Dedicated Team' }
            ]
        },
        {
            image: '/images/case-study/img-3.jpg',
            tag: 'Fintech',
            title: 'Banking Solution',
            description: 'AnhasWeb promotes a culture of impacting users\' lives with our innovations. And we are looking for people who share, understand our vision and contribute to it. Our company facilitates an environment with open communication, togetherness and equal opportunities.',
            link: '/case-study/banking-solution',
            stats: [
                { value: '6 Month', label: 'Estimation Time' },
                { value: '10 Member', label: 'Dedicated Team' }
            ]
        },
        {
            image: '/images/case-study/img-4.jpg',
            tag: 'Education',
            title: 'Learning Management System',
            description: 'AnhasWeb promotes a culture of impacting users\' lives with our innovations. And we are looking for people who share, understand our vision and contribute to it. Our company facilitates an environment with open communication, togetherness and equal opportunities.',
            link: '/case-study/learning-management-system',
            stats: [
                { value: '5 Month', label: 'Estimation Time' },
                { value: '7 Member', label: 'Dedicated Team' }
            ]
        },
        {
            image: '/images/case-study/img-5.jpg',
            tag: 'Real Estate',
            title: 'Property Management System',
            description: 'AnhasWeb promotes a culture of impacting users\' lives with our innovations. And we are looking for people who share, understand our vision and contribute to it. Our company facilitates an environment with open communication, togetherness and equal opportunities.',
            link: '/case-study/property-management-system',
            stats: [
                { value: '4 Month', label: 'Estimation Time' },
                { value: '6 Member', label: 'Dedicated Team' }
            ]
        }
    ];

    return (
        <>
            <SubBanner
                title="Our Work"
                description="Our commitment to invest in pro bono services brings our talent, expertise and insight to organizations tackling today's urgent challenges."
                image="/images/about/banner.jpg"
                alt="About Us"
            />

            <section>
                {caseStudies.map((caseStudy, index) => (
                    <ItemCaseStudy key={index} caseStudyData={caseStudy} alternate={index % 2 !== 0} />
                ))}
            </section>
        </>
    );
}
