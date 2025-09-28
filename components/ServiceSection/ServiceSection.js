import React from "react";
import Link from 'next/link'
import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "../../api/Services";
import Image from "next/image";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSection = (props) => {


    const settings = {
        dots: false,
        arrows: true,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };



    return (
        <section className={"" + props.hclass}>
            <div className="service-wrap">
                <div className="section-title text-center" style={{marginTop: '60px', paddingTop: '40px', marginBottom: '50px'}}>
                    <h2 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '20px'}}>Our Ongoing Projects</h2>
                    <p style={{fontSize: '18px', color: '#687693', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6'}}>
                        Explore our current projects and initiatives that showcase our commitment to excellence and innovation in the industry
                    </p>
                </div>
                <div className="service-slider">
                    <Slider {...settings}>
                        {Services.slice(0, 5).map((service, index) => (
                            <div className="item" key={index}>
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
                                    <h2><Link onClick={ClickHandler} href='/'>{service.title}</Link></h2>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;




