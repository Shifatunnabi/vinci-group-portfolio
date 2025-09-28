import React, { useEffect, useState } from 'react'
import Image from 'next/image';

const About = (props) => {
    const [aboutData, setAboutData] = useState({
        images: {
            image1: '',
            image2: '',
            ceoImage: ''
        },
        title: '',
        subtitle: '',
        paragraphs: [],
        ceoName: '',
        ceoTitle: ''
    });
    
    useEffect(() => {
        fetch('/about.json')
            .then(response => response.json())
            .then(data => {
                setAboutData({
                    images: {
                        image1: data.image1,
                        image2: data.image2,
                        ceoImage: data.ceoImage
                    },
                    title: data.title,
                    subtitle: data.subtitle,
                    paragraphs: data.paragraphs || [],
                    ceoName: data.ceoName,
                    ceoTitle: data.ceoTitle
                });
            });

    }, []);



    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="about-left-image">
                            <img src={aboutData.images.image1} alt="" />
                            <div className="ab-2">
                                <img src={aboutData.images.image2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <h2>{aboutData.title}</h2>
                            <h3>{aboutData.subtitle}</h3>
                            {aboutData.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                            <div className="ceo-content">
                                <div className="text">
                                    <h2>{aboutData.ceoName}</h2>
                                    <span>{aboutData.ceoTitle}</span>
                                </div>
                                <div className="image">
                                    <img src={aboutData.images.ceoImage} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;


