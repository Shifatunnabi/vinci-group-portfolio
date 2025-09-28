import React from "react";
import Link from 'next/link'
import Services from "../../api/Services";
import Image from "next/image";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSection2 = (props) => {

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="wpo-section-title-s2">
                            <h2>What We Offer</h2>
                            <h3>Our Services</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Services.slice(0, 3).map((service, index) => (
                        <div className="col-lg-4 col-md-6 col-12" key={index}>
                            <div className="service-card">
                                <div className="image">
                                    <Image src={service.image} alt="" />
                                    <span>{index + 1}</span>
                                    <div className="line-one"></div>
                                    <div className="line-two"></div>
                                </div>
                                <div className="content">
                                    <div className="icon">
                                        <Image src={service.icon} alt="" />
                                    </div>
                                    <h2><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServiceSection2;




