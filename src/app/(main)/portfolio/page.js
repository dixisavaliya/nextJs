import React from 'react';
import Link from 'next/link';
import { Container, Row, Button } from 'react-bootstrap';
import SubBanner from '@/components/section/SectionHero';
import ItemPortfolio from '@/components/utilities/ItemPortfolio';

import { IconCrossArrow } from '@/components/icon';

export const metadata = {
  title: "Portfolio | Anhas Web",
  description: "Explore our portfolio of successful web development projects, mobile applications, and digital solutions that have helped businesses grow and succeed.",
  keywords: "Anhas Web portfolio, web development projects, mobile app portfolio, software development examples, client projects showcase"
};

const portfolioData = [
  {
    link: "/portfolio/ecommerce-mobile-app",
    image: "/images/portfolio/1.png",
    title: "E-Commerce App"
  },
  {
    link: "/portfolio/healthcare-management-system",
    image: "/images/portfolio/2.png",
    title: "Healthcare App"
  },
  {
    link: "/portfolio/food-delivery-platform",
    image: "/images/portfolio/3.png",
    title: "Food Delivery App"
  },
  {
    link: "/portfolio/banking-finance-app",
    image: "/images/portfolio/4.png",
    title: "Banking App"
  },
  {
    link: "/portfolio/real-estate-platform",
    image: "/images/portfolio/5.png",
    title: "Real Estate App"
  },
  {
    link: "/portfolio/education-management-system",
    image: "/images/portfolio/6.png",
    title: "Education App"
  },
  {
    link: "/portfolio/logistics-management-app",
    image: "/images/portfolio/1.png",
    title: "Logistics App"
  },
  {
    link: "/portfolio/social-media-platform",
    image: "/images/portfolio/2.png",
    title: "Social Media App"
  },
  {
    link: "/portfolio/travel-tourism-app",
    image: "/images/portfolio/3.png",
    title: "Travel App"
  },
  {
    link: "/portfolio/gaming-platform",
    image: "/images/portfolio/4.png",
    title: "Gaming App"
  },
  {
    link: "/portfolio/fitness-wellness-app",
    image: "/images/portfolio/5.png",
    title: "Fitness App"
  },
  {
    link: "/portfolio/enterprise-management-system",
    image: "/images/portfolio/6.png",
    title: "Enterprise App"
  }
];

export default function PortfolioPage() {
  return (
    <>
      <SubBanner
        title="Portfolio"
        description="Our commitment to invest in pro bono services brings our talent, expertise and insight to organizations tackling today's urgent challenges."
        image="/images/about/banner.jpg"
        alt="Our Portfolio"
      />

      <section className="py-lg-25 py-15">
        <Container fluid>
          <div className="title text-center">
            <h2>Our Portfolio</h2>
            <p>Explore our successful projects and see how we've helped businesses grow with innovative digital solutions.</p>
          </div>
          <Row className="g-lg-8 g-4">
            {portfolioData.map((item, index) => (
              <ItemPortfolio key={index} portfolioData={item} />
            ))}
          </Row>
          <div className="text-center mt-lg-10 mt-6">
            <Button as={Link} href="/portfolio" variant="primary" title="Load More">
              Load More <i className="icon p-lg-3 p-2"><IconCrossArrow width={24} height={24} /></i>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
