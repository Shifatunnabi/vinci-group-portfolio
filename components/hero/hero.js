import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function hero(props) {
    // Custom arrow components
    const NextArrow = ({ onClick }) => (
        <div 
            className="hero-next-arrow" 
            onClick={onClick}
            style={{
                position: 'absolute',
                right: '30px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 46, 254, 0.8)',
                color: 'white',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                fontSize: '20px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0, 46, 254, 0.3)'
            }}
        >
            &#8250;
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div 
            className="hero-prev-arrow" 
            onClick={onClick}
            style={{
                position: 'absolute',
                left: '30px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 46, 254, 0.8)',
                color: 'white',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                fontSize: '20px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0, 46, 254, 0.3)'
            }}
        >
            &#8249;
        </div>
    );

    // Slider settings for automatic carousel
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        dotsClass: 'slick-dots hero-dots',
        customPaging: (i) => (
            <div style={{
                width: '12px',
                height: '12px',
                background: 'rgba(255, 255, 255, 0.5)',
                borderRadius: '50%',
                margin: '0 5px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
            }}></div>
        )
    };

    // Sister concerns data
    const sisterConcerns = [
        {
            id: 1,
            title: "Vinci Golf Resort and Park",
            description: "Experience luxury and tranquility at our premium golf resort with world-class facilities and breathtaking landscapes.",
            backgroundImage: "/images/slider/slide-1.jpg"
        },
        {
            id: 2,
            title: "Vinci Properties",
            description: "Discover exceptional real estate solutions with premium properties and investment opportunities across prime locations.",
            backgroundImage: "/images/slider/slide-2.jpg"
        },
        {
            id: 3,
            title: "Vinci Travellers",
            description: "Embark on unforgettable journeys with our comprehensive travel services and curated experiences worldwide.",
            backgroundImage: "/images/slider/slide-3.jpg"
        },
        {
            id: 4,
            title: "Vinci Trading",
            description: "Leading the market with innovative trading solutions and strategic business partnerships for sustainable growth.",
            backgroundImage: "/images/slider/slide-4.jpg"
        }
    ];

    return (
        <div className="hero-carousel-wrapper" style={{position: 'relative', overflow: 'hidden'}}>
            <Slider {...sliderSettings}>
                {sisterConcerns.map((concern, index) => (
                    <div key={concern.id} className="hero-slide-wrapper">
                        <div 
                            className={"hero-slide " + props.hclass}
                            style={{
                                backgroundImage: `url(${concern.backgroundImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                height: '100vh',
                                display: 'flex !important',
                                alignItems: 'center',
                                position: 'relative',
                                width: '100%'
                            }}
                        >
                            {/* Overlay */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(1, 0, 27, 0.6)',
                                zIndex: 1
                            }}></div>
                            
                            {/* Content */}
                            <div className="container" style={{position: 'relative', zIndex: 2}}>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="content">
                                            <h3 style={{
                                                fontSize: '60px',
                                                fontWeight: '700',
                                                color: 'white',
                                                marginBottom: '20px',
                                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                                                lineHeight: '1.2'
                                            }}>
                                                {concern.title}
                                            </h3>
                                            <p style={{
                                                fontSize: '20px',
                                                color: 'white',
                                                marginBottom: '40px',
                                                maxWidth: '600px',
                                                lineHeight: '1.6',
                                                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                                            }}>
                                                {concern.description}
                                            </p>
                                            <div className="hero-btn">
                                                <Link 
                                                    href="/" 
                                                    className="theme-btn"
                                                    style={{
                                                        background: '#002efe',
                                                        color: 'white',
                                                        padding: '15px 35px',
                                                        borderRadius: '30px',
                                                        textDecoration: 'none',
                                                        fontWeight: '600',
                                                        display: 'inline-block',
                                                        fontSize: '16px',
                                                        transition: 'all 0.3s ease',
                                                        boxShadow: '0 6px 20px rgba(0, 46, 254, 0.4)',
                                                        border: 'none'
                                                    }}
                                                    onMouseOver={(e) => {
                                                        e.target.style.background = '#0028cc';
                                                        e.target.style.transform = 'translateY(-2px)';
                                                        e.target.style.boxShadow = '0 8px 25px rgba(0, 46, 254, 0.5)';
                                                    }}
                                                    onMouseOut={(e) => {
                                                        e.target.style.background = '#002efe';
                                                        e.target.style.transform = 'translateY(0)';
                                                        e.target.style.boxShadow = '0 6px 20px rgba(0, 46, 254, 0.4)';
                                                    }}
                                                >
                                                    Explore More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            
            {/* Custom CSS for dots */}
            <style jsx>{`
                .hero-carousel-wrapper .slick-dots {
                    position: absolute;
                    bottom: 30px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 10;
                }
                
                .hero-carousel-wrapper .slick-dots li {
                    margin: 0 8px;
                }
                
                .hero-carousel-wrapper .slick-dots li.slick-active div {
                    background: #002efe !important;
                    transform: scale(1.2);
                }
                
                .hero-carousel-wrapper .slick-dots li div:hover {
                    background: rgba(255, 255, 255, 0.8) !important;
                }
                
                .hero-next-arrow:hover,
                .hero-prev-arrow:hover {
                    background: #002efe !important;
                    transform: translateY(-50%) scale(1.1) !important;
                }
            `}</style>
        </div>
    );
}

export default hero;