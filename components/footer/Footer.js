import React, { useState } from 'react'
import Link from 'next/link'
import logo from '/public/images/my-logo.svg'
import Services from '../../api/Services';
import Image from 'next/image';



const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer = (props) => {
    const [email, setEmail] = useState('');

    const handleReset = () => {
        setEmail('');
    };
    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Image src={logo} alt="blog" />
                                </div>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt iure blanditiis
                                    labore tempora inventore laborum error molestias,</p>
                                <div className="social-widget">
                                    <ul>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-facebook"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-instagram"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-linkedin"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Our Services</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 5).map((service, Sitem) => (
                                        <li key={Sitem}><Link onClick={ClickHandler} href={'/'}>{service.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Navigalion</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/">Home</Link></li>
                                    <li><Link onClick={ClickHandler} href="/">about us</Link></li>
                                    <li><Link onClick={ClickHandler} href="/">service</Link></li>
                                    <li><Link onClick={ClickHandler} href="/">blog</Link></li>
                                    <li><Link onClick={ClickHandler} href="/">contact us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>Newsletter</h3>
                                </div>
                                <p>Get latest updates and offers</p>
                                <div className="email-from">
                                    <input
                                        className="fild"
                                        type="text"
                                        placeholder="Your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button type="button" onClick={handleReset}>
                                        <i className="ti-arrow-top-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> &copy; 2025 Vinci Group <Link onClick={ClickHandler} href="/"></Link>. All
                                Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;







