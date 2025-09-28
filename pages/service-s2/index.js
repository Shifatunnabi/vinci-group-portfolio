import React, { Fragment } from 'react';
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection2 from '../../components/ServiceSection2/ServiceSection2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-3.svg'


const ServicePage2 = () => {
    return (
        <Fragment>
            <HeaderTopbar />
            <Navbar hclass={'wpo-site-header wpo-site-header-s3'} Logo={Logo} />
            <PageTitle pageTitle={'Service'} pagesub={'Service'} />
            <ServiceSection2 hclass={'wpo-service-section-s2 s2 section-padding'}  />
            <Footer />
            <Scrollbar />

        </Fragment>
    )
};
export default ServicePage2;
