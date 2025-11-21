import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import SubBanner from '@/components/section/SectionHero';

const ContentTemplate = ({
    metadata,
    bannerData,
    headerData,
    tableOfContents,
    content
}) => {
    return (
        <>
            <SubBanner
                title={bannerData.title}
                description={bannerData.description}
                image={bannerData.image}
                alt={bannerData.alt}
            />

            <section className="section-content py-15 py-lg-25">
                <Container fluid>
                    <div className="mb-10">
                        <h2 className="text-primary mb-7 mb-lg-12">{headerData.title}</h2>
                        {headerData.description.map((paragraph, index) => (
                            <p className="fw-medium" key={index}>{paragraph}</p>
                        ))}
                    </div>

                    <Row className="gy-10 gx-10">
                        <Col md={12} lg={4} xl={3}>
                            <div className="app-aside border p-4 p-md-6 p-lg-10">
                                <h2 className="h4 mb-4 mb-lg-7">Table of content</h2>
                                <ul className="d-flex flex-column gap-4">
                                    {tableOfContents.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.href} title={item.title}>
                                                {item.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>

                        <Col md={12} lg={8} xl={9} className="text-editor">
                            {content.map((section, index) => (
                                <React.Fragment key={index}>
                                    <h2 id={section.id}>{section.title}</h2>
                                    {section.paragraphs && section.paragraphs.map((paragraph, pIndex) => (
                                        <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                                    ))}
                                    {section.subsections && section.subsections.map((subsection, sIndex) => (
                                        <React.Fragment key={sIndex}>
                                            <h3>{subsection.title}</h3>
                                            {subsection.paragraphs && subsection.paragraphs.map((paragraph, pIndex) => (
                                                <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                    {section.lists && section.lists.map((list, lIndex) => (
                                        <ul key={lIndex}>
                                            {list.items.map((item, iIndex) => (
                                                <li key={iIndex}>{item}</li>
                                            ))}
                                        </ul>
                                    ))}
                                </React.Fragment>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default ContentTemplate;
