import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Button } from 'react-bootstrap';
import { IconMessage } from '@/components/icon';

import Galaxy from './Galaxy';

const SectionCTA = ({
    title,
    description,
    buttonText = "Let's Talk",
    buttonLink = "/contact-us",
    buttonIcon = null,
    iconAlt = "Let's Talk",
    className = "",
    variant = "default",
    isExternalLink = false
}) => {
    const LinkComponent = isExternalLink ? 'a' : Link;
    const linkProps = isExternalLink ? { href: buttonLink } : { href: buttonLink };

    return (
        <section className={`section-cta bg-dark position-relative overflow-hidden py-lg-25 py-15 ${className}`}>
            <Galaxy
                mouseRepulsion={true}
                mouseInteraction={true}
                density={1.5}
                glowIntensity={0.5}
                saturation={0.8}
                hueShift={240}
            />
            <Container fluid className='position-relative z-1'>
                <div className='mb-lg-10 mb-6'>
                    <h2 className='text-white mb-lg-12 mb-7 h3-md'>{title}</h2>
                    {description && <p className='text-white'>{description}</p>}
                </div>
                <Button
                    as={LinkComponent}
                    {...linkProps}
                    className="px-4 px-lg-6"
                    variant="primary"
                >
                    {buttonText}
                    {buttonIcon ? (
                        <i className='p-lg-3 p-2 icon'>
                            <Image
                                src={buttonIcon}
                                alt={iconAlt}
                                width={24}
                                height={24}
                            />
                        </i>
                    ) : (
                        <i className='p-lg-3 p-2 icon'>
                            <IconMessage width={24} height={24} />
                        </i>
                    )}
                </Button>
            </Container>
        </section>
    );
};

export default SectionCTA;
