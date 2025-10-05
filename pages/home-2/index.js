import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero2 from '../../components/hero2/Hero2';
import About2 from '../../components/about2/about2';
import ServiceSection2 from '../../components/ServiceSection2/ServiceSection2';
import TeamSection2 from '../../components/TeamSection2/TeamSection2';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const HomePage2 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={'/images/logo-3.svg'} />
            <Hero2 />
            <About2 hclass={'wpo-about-section-s2 section-padding'} />
            <ServiceSection2 hclass={'wpo-service-section-s2 section-padding'} />
            <TeamSection2 hclass={'wpo-team-section-s2 section-padding pt-0'}/>
            <ProjectSection hclass={'wpo-project-section'} />
            <Testimonial tClass={'wpo-testimonial-section section-padding'} />
            <BlogSection tClass={'wpo-blog-section section-padding'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;