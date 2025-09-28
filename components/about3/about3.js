import React from 'react'
import Link from 'next/link'
import CountUp from 'react-countup';
import abImg from '/public/images/ab-5.jpg'
import Image from 'next/image';


const About3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="about-left-image">
                            <div className="image">
                                <Image src={abImg} alt=""/>
                            </div>
                            <div className="experience">
                                <h2><span className="text-musk-title" ><CountUp end={20} enableScrollSpy /></span></h2>
                               
                                <h3>Years <span>Experience</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <div className="text">
                                <h2>About Company</h2>
                                <h3>We Are Solving All of Your Business Problem</h3>
                                <p>
                                    Our industry's business policy encompasses the strategies, guidelines, and practices
                                    that technology companies use to achieve their goals and objectives.
                                </p>
                            </div>
                            <div className="list">
                                <ul>
                                    <li><i className="ti-check"></i> <span>Raw Materials</span></li>
                                    <li><i className="ti-check"></i> <span>Quality Control</span></li>
                                    <li><i className="ti-check"></i> <span>Finished Goods</span></li>
                                </ul>
                                <ul>
                                    <li><i className="ti-check"></i> <span>Raw Materials</span></li>
                                    <li><i className="ti-check"></i> <span>Quality Control</span></li>
                                    <li><i className="ti-check"></i> <span>Finished Goods</span></li>
                                </ul>

                            </div>
                            <div className="about-btn">
                                <Link onClick={ClickHandler} href="/about" className="theme-btn">About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About3;