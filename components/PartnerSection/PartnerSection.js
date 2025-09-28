import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// image
import pimg1 from '/public/images/partners/img-1.png'
import pimg2 from '/public/images/partners/img-2.png'
import pimg3 from '/public/images/partners/img-3.png'
import pimg4 from '/public/images/partners/img-4.png'
import pimg5 from '/public/images/partners/img-5.png'
import pimg6 from '/public/images/partners/img-3.png'
import Image from "next/image";


const partners = [
    {
        id: "01",
        pimg: pimg1,
    },
    {
        id: "02",
        pimg: pimg2,
    },
    {
        id: "03",
        pimg: pimg3,
    },
    {
        id: "04",
        pimg: pimg4,
    },
    {
        id: "05",
        pimg: pimg5,
    },
    {
        id: "06",
        pimg: pimg6,
    },
    {
        id: "07",
        pimg: pimg2,
    }
]

const PartnerSection = () => {

    const settings = {
        dots: false,
        arrows: false,
        loop: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };



    return (
        <section className="wpo-partners-section">
            <h2>partners</h2>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="partner-grids partners-slider">
                            <Slider {...settings}>
                                {partners.map((partner, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <Image src={partner.pimg} alt="" />
                                    </div>
                                ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default PartnerSection;


