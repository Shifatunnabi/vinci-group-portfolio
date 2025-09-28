import React from 'react';
import Link from 'next/link';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const hero5 = () => {
    return (
        <section className="static-hero-s5">
            <div className="container">
                <div className="content">
                    <h2>Welcome to Sailo</h2>
                    <h3>We will provide the best <span>Industrial</span> service</h3>
                    <p>Dapibus aliquet lacus sem egestas netus vestibulum sit turpis scelerisque pharetra pelque
                        diam
                        pharetra curabitur.</p>
                    <div className="hero-btn">
                        <Link onClick={ClickHandler}  href="/about" className="theme-btn">Discover More</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default hero5;