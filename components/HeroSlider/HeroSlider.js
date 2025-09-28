import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link'


const HeroSlider = (props) => {
    return (

        <section className={"" + props.hclass} >
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-9.jpg'})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>We Build Your Dream</h2>
                                </div>
                                <div className="slide-text">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt illum
                                        cupiditate rem at earum voluptatem tempore quae pariatur sed inventore error
                                        ducimus,</p>
                                </div>
                                <div className="slide-btns">
                                    <Link href="/about" className="theme-btn">About Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-8.jpg'})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>we are industry factory solution</h2>
                                </div>
                                <div className="slide-text">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt illum
                                        cupiditate rem at earum voluptatem tempore quae pariatur sed inventore error
                                        ducimus,</p>
                                </div>
                                <div className="slide-btns">
                                    <Link href="/about" className="theme-btn">About Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-10.jpg'})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>We Are The Best In The Industry</h2>
                                </div>
                                <div className="slide-text">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt illum
                                        cupiditate rem at earum voluptatem tempore quae pariatur sed inventore error
                                        ducimus,</p>
                                </div>
                                <div className="slide-btns">
                                    <Link href="/about" className="theme-btn">About Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                ...
            </Swiper>
        </section>
    )
}

export default HeroSlider;