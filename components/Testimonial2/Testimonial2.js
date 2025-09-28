import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '/public/images/testimonial/img-1.jpg'
import Img2 from '/public/images/testimonial/img-2.jpg'
import Img3 from '/public/images/testimonial/img-3.jpg'
import Image from 'next/image';


const testimonials = [
    {
        id: '01',
        img: Img1,
        Des: "Meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself",
        title: 'Cathi Falcon Ami',
        sub: "CEO Barta",
    },
    {
        id: '02',
        img: Img2,
        Des: "Meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself",
        title: 'Jenelia Orkid pasa',
        sub: "Fashion Designer",
    },
    {
        id: '03',
        img: Img3,
        Des: "Meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself",
        title: 'Hanial nilton jhon',
        sub: "Managin dirctor",
    },
    {
        id: '04',
        img: Img1,
        Des: "Meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself",
        title: 'Hanial jhon nilton',
        sub: "Managin dirctor",
    },

]




const Testimonial2 = (props) => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]
    };


    return (

        <section className={"" + props.tClass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <div className="wpo-section-title-s2">
                            <h2>testimonial</h2>
                            <h3>What Our Clients Say's</h3>
                        </div>
                    </div>
                </div>
                <div className="testimonial-slide">
                    <Slider {...settings}>
                        {testimonials.map((testitem, titem) => (
                            <div className="testimonial-card" key={titem}>
                                <div className="content">
                                    <p>{testitem.Des}</p>
                                </div>
                                <div className="client">
                                    <div className="client-img">
                                        <Image src={testitem.img} alt="" />
                                    </div>
                                    <div className="client-text">
                                        <h4>{testitem.title}</h4>
                                        <span>{testitem.sub}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Testimonial2;







