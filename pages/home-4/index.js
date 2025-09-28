import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero4 from '../../components/hero4/hero4';
import About3 from '../../components/about3/about3';
import ServiceSection3 from '../../components/ServiceSection3/ServiceSection3';
import FunFactS3 from '../../components/FunFactS3/FunFactS3';
import TeamSection2 from '../../components/TeamSection2/TeamSection2';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import BlogSection2 from '../../components/BlogSection2/BlogSection2';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'

const HomePage4 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s4'} Logo={Logo} />
            <Hero4 hclass={'wpo-hero-slider'} />
            <About3 hclass={'wpo-about-section-s3 section-padding'}/>
            <ServiceSection3 hclass={'wpo-service-section-s3 section-padding pt-0'}/>
            <FunFactS3 hclass={'wpo-feature-section-s3'} />
            <TeamSection2 hclass={'wpo-team-section section-padding pt-0'} />
            <Testimonial2 tClass={'wpo-testimonial-section section-padding pt-0'} />
            <BlogSection2 tClass={'wpo-blog-section section-padding'} />
            <PartnerSection />
            <Footer /> 
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage4;