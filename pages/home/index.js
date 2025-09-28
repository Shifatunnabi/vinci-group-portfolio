import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import FunFact from '../../components/FunFact/FunFact';
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import HistorySection from '../../components/HistorySection/HistorySection';
import TeamSection from '../../components/TeamSection/TeamSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'

const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'}  Logo={Logo} />
            <Hero hclass={'static-hero'} />
            <FunFact hclass={'wpo-feature-section'} />
            <About hclass={'wpo-about-section section-padding'}/>
            <ServiceSection hclass={"wpo-service-section section-padding"} />
            <HistorySection hclass={'wpo-history-section'}/>
            <TeamSection hclass={'wpo-team-section section-padding'}/>
            <ProjectSection hclass={'wpo-project-section'}/>
            <Testimonial tClass={'wpo-testimonial-section section-padding'} />
            <BlogSection tClass={'wpo-blog-section section-padding'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;