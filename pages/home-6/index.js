import React, { Fragment } from 'react';
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Navbar from '../../components/Navbar/Navbar'
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import About2 from '../../components/about2/about2';
import ServiceSection2 from '../../components/ServiceSection2/ServiceSection2';
import TeamSection from '../../components/TeamSection/TeamSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-3.svg'
import Testimonial from '../../components/Testimonial/Testimonial';

const HomePage6 = () => {
    return (
        <Fragment>
            <HeaderTopbar />
            <Navbar hclass={'wpo-site-header wpo-site-header-s3'} Logo={Logo} />
            <HeroSlider hclass={'wpo-hero-slider wpo-hero-slider-s2'} />
            <About2 hclass={'wpo-about-section-s2 section-padding'} />
            <ServiceSection2 hclass={"wpo-service-section-s2 section-padding"} />
            <TeamSection hclass={'wpo-team-section section-padding'} />
            <ProjectSection hclass={'wpo-project-section'} />
            <Testimonial tClass={'wpo-testimonial-section section-padding'} />
            <BlogSection tClass={'wpo-blog-section section-padding'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage6;