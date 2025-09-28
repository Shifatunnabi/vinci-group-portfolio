import React, { Fragment } from 'react';
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import PricingSection from '../../components/PricingSection/PricingSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-3.svg'


const AboutPage = () => {
    return (
        <Fragment>
            <HeaderTopbar />
            <Navbar hclass={'wpo-site-header wpo-site-header-s3'} Logo={Logo} />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <About hclass={'wpo-about-section section-padding'} />
            <ServiceSection hclass={"wpo-service-section section-padding"} />
            <PricingSection pClass={"wpo-pricing-section section-padding pt-0"} />
            <BlogSection tClass={'wpo-blog-section section-padding'} />
            <Footer />
            <Scrollbar />

        </Fragment>
    )
};
export default AboutPage;
