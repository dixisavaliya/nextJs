'use client';

import { useState, useEffect } from 'react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        toggleVisibility();

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="back-to-top-container">
            <div className="back-to-top-button btn-primary" onClick={scrollToTop}>
                <i className="fas fa-arrow-up back-to-top-icon"></i>
            </div>
        </div>
    );
};

export default BackToTop;

