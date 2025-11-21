'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Button, Nav, Dropdown, Modal } from 'react-bootstrap';
import SubBanner from '@/components/section/SectionHero';
import SectionCTA from '@/components/section/SectionCTA';
import { IconCrossArrow } from '@/components/icon';

// export const metadata = {
//   title: "Portfolio | Anhas Web",
//   description: "Explore our portfolio of successful web development projects, mobile applications, and digital solutions that have helped businesses grow and succeed.",
//   keywords: "Anhas Web portfolio, web development projects, mobile app portfolio, software development examples, client projects showcase"
// };

export default function LifeAtAnhasPage() {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedYear, setSelectedYear] = useState('All Years');
    const [lightboxImage, setLightboxImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const baseImages = [
        { src: '/images/life-anhas/image-games.jpg' },
        { src: '/images/about/image-1.jpg' },
        { src: '/images/about/image-2.jpg' },
        { src: '/images/about/image-3.jpg' },
        { src: '/images/portfolio/1.png' },
        { src: '/images/portfolio/2.png' },
        { src: '/images/portfolio/3.png' },
        { src: '/images/portfolio/4.png' },
        { src: '/images/portfolio/5.png' }
    ];

    const altTexts = {
        all: ['Team Games at Anhas Web', 'Team Building Activity', 'Team Outing', 'Office Celebration', 'Team Meeting', 'Workplace Fun', 'Team Collaboration', 'Office Environment', 'Team Retreat'],
        fun: Array(9).fill(null).map((_, i) => `Fun Activity ${i + 1}`),
        trip: Array(9).fill(null).map((_, i) => `Abu Trip ${i + 1}`),
        dinner: Array(9).fill(null).map((_, i) => `Team Dinner ${i + 1}`),
        diwali: Array(9).fill(null).map((_, i) => `Diwali Celebration ${i + 1}`),
        ganpati: Array(9).fill(null).map((_, i) => `Ganpati Celebration ${i + 1}`),
        waterpark: Array(9).fill(null).map((_, i) => `Water Park Picnic ${i + 1}`)
    };

    const imageData = Object.keys(altTexts).reduce((acc, category) => {
        acc[category] = baseImages.map((img, index) => ({
            src: img.src,
            alt: altTexts[category][index]
        }));
        return acc;
    }, {});

    const currentImages = imageData[activeTab] || imageData.all;
    const allImages = imageData.all;

    const openLightbox = (image, index) => {
        setLightboxImage(image);
        setCurrentImageIndex(index);
        setShowModal(true);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
        setShowModal(false);
    };

    const navigateImage = (direction) => {
        const images = activeTab === 'all' ? allImages : currentImages;
        let newIndex;

        if (direction === 'prev') {
            newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
        } else {
            newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
        }

        setCurrentImageIndex(newIndex);
        setLightboxImage(images[newIndex]);
    };

    const handleKeyDown = (e) => {
        if (showModal) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                navigateImage('prev');
            } else if (e.key === 'ArrowRight') {
                navigateImage('next');
            }
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [showModal, currentImageIndex, activeTab]);

    return (
        <>
            <SubBanner
                title="Life at Anhas Web"
                description="Anhas Web brings together talented minds to innovate, collaborate, and create a lasting digital impact."
                image="/images/about/banner.jpg"
                alt="Life at Anhas Web"
            />

            <section className="py-lg-25 py-15">
                <Container fluid>
                    <div className="title text-center">
                        <h2>Life at Anhas Web</h2>
                    </div>
                    <div className="d-flex gap-3 flex-column flex-sm-row align-items-sm-center justify-content-sm-center mb-lg-15 mb-6">
                        <Nav className="mb-0 mx-0 tabs-event" variant="tabs" activeKey={activeTab} onSelect={setActiveTab}>
                            {[
                                { key: 'all', label: 'All' },
                                { key: 'fun', label: 'Fun' },
                                { key: 'trip', label: 'Abu Trip' },
                                { key: 'dinner', label: 'Dinner' },
                                { key: 'diwali', label: 'Diwali Celebration' },
                                { key: 'ganpati', label: 'Ganpati Celebration' },
                                { key: 'waterpark', label: 'Water Park Picnic' }
                            ].map(({ key, label }) => (
                                <Nav.Item key={key}>
                                    <Nav.Link eventKey={key}>{label}</Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                        <Dropdown className="dropdown-event">
                            <Dropdown.Toggle className="rounded-pill w-100 justify-content-center" variant="primary" id="year-dropdown">
                                {selectedYear}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {['All Years', '2022', '2023', '2024', '2025'].map((year) => (
                                    <Dropdown.Item key={year} onClick={() => setSelectedYear(year)}>{year}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <div className="tab-content">
                        <div className="tab-pane fade show active">
                            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-lg-6 g-4">
                                {currentImages.map((image, index) => (
                                    <Col key={index}>
                                        <div
                                            className="item-event figure picture rounded-xs"
                                            onClick={() => openLightbox(image, index)}
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                className="rounded-4 w-100 object-fit-cover"
                                                width={400}
                                                height={300}
                                            />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>

                    <Modal
                        className="modal-lightbox"
                        show={showModal}
                        onHide={closeLightbox}
                        size="lg"
                        centered
                    >
                        <Modal.Body>
                            <button
                                className="icon-close"
                                onClick={closeLightbox}
                                aria-label="Close lightbox"
                            >
                                &times;
                            </button>
                            {lightboxImage && (
                                <>
                                    <button
                                        className="icon-arrow icon-prev"
                                        onClick={() => navigateImage('prev')}
                                        aria-label="Previous image"
                                    >
                                        &#10094;
                                    </button>
                                    <button
                                        className="icon-arrow icon-next"
                                        onClick={() => navigateImage('next')}
                                        aria-label="Next image"
                                    >
                                        &#10095;
                                    </button>
                                    <Image
                                        src={lightboxImage.src}
                                        alt={lightboxImage.alt}
                                        width={800}
                                        height={600}
                                        className="w-auto h-auto"
                                    />
                                </>
                            )}
                        </Modal.Body>
                    </Modal>

                    <div className="text-center mt-lg-10 mt-6">
                        <Button as={Link} href="/" variant="primary" title="Load More">
                            Load More <i className="icon p-lg-3 p-2"><IconCrossArrow width={24} height={24} /></i>
                        </Button>
                    </div>
                </Container>
            </section>

            <SectionCTA
                title="Innovation Starts Here"
                description="Transform Your Concepts into Reality with Our Innovative Prototyping Service - 5000+ Projects Delivered!"
                buttonText="Let's Talk"
                buttonLink="/contact-us"
            />
        </>
    );
}
