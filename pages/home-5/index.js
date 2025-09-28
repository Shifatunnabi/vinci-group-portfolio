import React, { Fragment } from 'react';
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Navbar from '../../components/Navbar/Navbar'
import Hero5 from '../../components/hero5/hero5';
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import HistorySection from '../../components/HistorySection/HistorySection';
import TeamSection from '../../components/TeamSection/TeamSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-3.svg'
import PricingSection from '../../components/PricingSection/PricingSection';

const HomePage5 = () => {
    return (
        <Fragment>
            <HeaderTopbar />
            <Navbar hclass={'wpo-site-header wpo-site-header-s3'} Logo={Logo} />
            <Hero5 />
            <About hclass={'wpo-about-section section-padding'} />
            <ServiceSection hclass={"wpo-service-section section-padding"} />
            <HistorySection hclass={'wpo-history-section'} />
            <TeamSection hclass={'wpo-team-section section-padding'} />
            <ProjectSection hclass={'wpo-project-section'} />
            <PricingSection pClass={"wpo-pricing-section section-padding"} />
            <BlogSection tClass={'wpo-blog-section section-padding'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage5;