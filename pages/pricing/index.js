import React, { Fragment } from 'react';
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-3.svg'
import PricingSection from '../../components/PricingSection/PricingSection';


const PricingPage = () => {
    return (
        <Fragment>
            <HeaderTopbar />
            <Navbar hclass={'wpo-site-header wpo-site-header-s3'} Logo={Logo} />
            <PageTitle pageTitle={'Pricing Plan'} pagesub={'Pricing'} />
            <PricingSection pClass={"wpo-pricing-section section-padding"}  />
            <Footer />
            <Scrollbar />

        </Fragment>
    )
};
export default PricingPage;