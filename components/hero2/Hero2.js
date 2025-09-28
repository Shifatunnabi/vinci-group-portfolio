import React from 'react';
import Link from 'next/link';
import FunFactS2 from '../FunFactS2/FunFactS2';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero2 = () => {
    return (
        <div className="wpo-hero-section">
            <section className="static-hero-s2">
                <div className="container">
                    <div className="content">
                        <h2>Welcome to Sailo</h2>
                        <h3>Modern Way To Lead
                            The Future World</h3>
                        <p>Dapibus aliquet lacus sem egestas netus vestibulum sit turpis scelerisque pharetra pelque
                            diam
                            pharetra curabitur.</p>
                        <div className="hero-btn">
                            <Link onClick={ClickHandler} href="/about" className="theme-btn">Discover More</Link>
                        </div>
                    </div>
                </div>
            </section>
            <FunFactS2 hclass={'wpo-feature-section-s2'} />
        </div>
    );
};

export default Hero2;



