import React from 'react'
import Services from '../../api/Services';
import Link from 'next/link'
import ins1 from '/public/images/instragram/1.jpg'
import ins2 from '/public/images/instragram/2.jpg'
import ins3 from '/public/images/instragram/3.jpg'
import ins4 from '/public/images/instragram/4.jpg'
import ins5 from '/public/images/instragram/5.jpg'
import ins6 from '/public/images/instragram/6.jpg'
import Image from 'next/image';

const ServiceSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="col-lg-4 col-md-8">
            <div className="blog-sidebar">
                <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                                <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Services</h3>
                    <ul>
                        {Services.slice(0, 6).map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="wpo-newsletter-widget widget">
                    <h3>Newsletter</h3>
                    <p>Join 20,000 Sabscribers!</p>
                    <form className="form" onSubmit={SubmitHandler}>
                        <input type="text" placeholder="Email Address"/>
                            <button type="submit">Sign Up</button>
                    </form>
                    <span>By signing up you agree to our <Link href="/contact">Privecy Policy</Link></span>
                </div>
                <div className="wpo-instagram-widget widget">
                    <h3>Instagram Shot</h3>
                    <ul>
                        <li><Image src={ins1} alt="instragram" /></li>
                        <li><Image src={ins2} alt="instragram" /></li>
                        <li><Image src={ins3} alt="instragram" /></li>
                        <li><Image src={ins4} alt="instragram" /></li>
                        <li><Image src={ins5} alt="instragram" /></li>
                        <li><Image src={ins6} alt="instragram" /></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ServiceSidebar;