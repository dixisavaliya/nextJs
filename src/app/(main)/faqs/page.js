'use client';

import React from 'react';
import Link from 'next/link';
import { Container, Accordion, Tab, Tabs, Button } from 'react-bootstrap';
import SubBanner from '@/components/section/SectionHero';
import SectionCTA from '@/components/section/SectionCTA';
import SectionRecentBlog from '@/components/section/SectionRecentBlog';
import { IconCrossArrow } from '@/components/icon';

const faqCategories = [
  { key: 'general-questions', title: 'General Questions' },
  { key: 'about-our-services', title: 'About Our Services' },
  { key: 'hire', title: 'Hire' },
  { key: 'business-startup', title: 'Business Startup' }
];

const faqData = {
  'general-questions': [
    { question: "Does Anhas Web Provide References from Active and Previous Clients?", answer: "Yes, we are happy to provide references from our current and previous clients. We have a strong track record of successful projects and satisfied clients who are willing to share their experiences working with us. Contact us to request specific references relevant to your project type." },
    { question: "Do You Sign NDA?", answer: "Absolutely! We understand the importance of protecting your intellectual property and confidential information. We are fully committed to signing Non-Disclosure Agreements (NDAs) before starting any project discussion. This ensures that all your ideas, business strategies, and sensitive information remain completely confidential." },
    { question: "What Are the Working Methodologies Followed by Your Company?", answer: "We follow Agile and Scrum methodologies for project management, ensuring iterative development and continuous client feedback. Our process includes requirement analysis, design, development, testing, and deployment phases. We use modern development practices, version control systems, and maintain regular communication with clients throughout the project lifecycle." },
    { question: "How Long Has Anhas Web Been in Business For?", answer: "Anhas Web has been in the web development and digital solutions business for several years, building a strong reputation for quality work and client satisfaction. We have successfully completed numerous projects across various industries and continue to grow our expertise and client base." },
    { question: "Which Industries Have You Served to Date?", answer: "We have served clients across multiple industries including healthcare, e-commerce, education, fintech, real estate, manufacturing, and more. Our diverse experience allows us to understand different business requirements and deliver tailored solutions for each industry's unique needs." },
    { question: "Where Is Anhas Web's Team Based?", answer: "Our team is based in Ahmedabad, Gujarat, India. We have a dedicated office space with modern infrastructure and a talented team of developers, designers, and project managers. We also work with remote team members to ensure we can provide the best talent for your project needs." },
    { question: "How Many Clients and Projects Has Anhas Web Worked With?", answer: "We have successfully completed numerous projects for clients ranging from startups to established enterprises. Our portfolio includes web applications, mobile apps, e-commerce platforms, and custom software solutions. We're proud of our growing client base and the trust they place in our services." },
    { question: "I Have Only a Partial App Idea. Can You Help Me with That?", answer: "Absolutely! We love working with clients who have partial ideas and helping them develop those ideas into fully functional applications. Our team can help you refine your concept, suggest improvements, and guide you through the entire development process from ideation to launch." },
    { question: "What Are the Fees to Create Developers Account in Apple and Google?", answer: "Apple Developer Program costs $99 per year for individual developers and $99 per year for organizations. Google Play Console has a one-time registration fee of $25. These fees are separate from our development costs and are paid directly to Apple and Google. We can guide you through the registration process." },
    { question: "What Are the Hiring Models?", answer: "We offer flexible hiring models including fixed-price projects, hourly rates, dedicated team hiring, and retainer-based services. We can work with your budget and project requirements to find the most suitable engagement model for your needs." },
    { question: "What Is the Payment Procedure?", answer: "We typically work with milestone-based payments. A percentage is paid upfront, followed by payments at key project milestones, and the final payment upon project completion. We accept various payment methods including bank transfers, online payments, and other convenient options for our clients." },
    { question: "Is There Any Business Partnership Opportunities?", answer: "Yes, we are always open to exploring business partnership opportunities. We believe in building long-term relationships and can offer various partnership models including referral programs, white-label services, and strategic alliances. Contact us to discuss potential partnership opportunities." }
  ],
  'about-our-services': [
    { question: "What web development services do you offer?", answer: "We offer comprehensive web development services including custom website development, e-commerce solutions, web applications, API development, database design, and maintenance services." },
    { question: "Do you provide mobile app development?", answer: "Yes, we develop both native and cross-platform mobile applications for iOS and Android using modern technologies like React Native, Flutter, and native development approaches." }
  ],
  'hire': [
    { question: "How can I hire your development team?", answer: "You can hire our team through various models including dedicated team hiring, project-based contracts, or hourly consulting. Contact us to discuss your specific requirements and we'll recommend the best approach." }
  ],
  'business-startup': [
    { question: "Do you work with startups?", answer: "Yes, we love working with startups! We understand the unique challenges startups face and can provide cost-effective solutions, flexible payment terms, and guidance to help your startup succeed." }
  ]
};

const FAQAccordion = ({ faqs }) => (
  <Accordion defaultActiveKey="0">
    {faqs.map((faq, index) => (
      <Accordion.Item key={index} eventKey={index.toString()}>
        <Accordion.Header>{faq.question}</Accordion.Header>
        <Accordion.Body><p>{faq.answer}</p></Accordion.Body>
      </Accordion.Item>
    ))}
  </Accordion>
);

export default function FAQsPage() {
  return (
    <div className='bg-light'>
      <SubBanner
        title="FAQ's"
        description="Our commitment to invest in pro bono services brings our talent, expertise and insight to organizations tackling today's urgent challenges."
        image="/images/about/banner.jpg"
        alt="FAQ's"
      />

      <section className="py-lg-25 py-15">
        <Container fluid>
          <Tabs defaultActiveKey="general-questions" id="faq-tabs">
            {faqCategories.map(({ key, title }) => (
              <Tab key={key} eventKey={key} title={title}>
                <FAQAccordion faqs={faqData[key]} />
              </Tab>
            ))}
          </Tabs>

          <div className="text-center pt-lg-6 pt-5">
            <Button as={Link} href="#" variant="primary">
              Load More
              <i className="p-lg-3 p-2 icon"><IconCrossArrow width={24} height={24} /></i>
            </Button>
          </div>
        </Container>
      </section>

      <SectionCTA
        title="Innovation Starts Here"
        description="Transform Your Concepts into Reality with Our Innovative Prototyping Service - 5000+ Projects Delivered!"
      />

      {/* <SectionRecentBlog
        description="Stay updated with our latest insights and industry knowledge."
        showLoadMore={false}
      /> */}
    </div>
  );
}
