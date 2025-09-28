import React from 'react';
import Link from 'next/link';
import About1 from '/public/images/ab-3.jpg';
import About3 from '/public/images/ab-4.jpg';
import Image from 'next/image';

const About2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="about-left-image">
                            <div className="ab-3">
                                <Image src={About1} alt=""/>
                            </div>
                            <div className="ab-4">
                                <Image src={About3} alt=""/>
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

export default About2;