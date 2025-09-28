import React from "react";
import { useState } from 'react';




const PricingSection = (props) => {
    const [plan] = useState([
        {
            id: '01',
            name: 'PREMIUM',
            price: 250,
            features: ['Blandit massa enim nec', 'Orci dapibus ultrices in', 'Elementum nisi eleifend', 'Sed turpis tincidunt id', 'Amet consectetur', 'Gravida neque convallis']
        },
        {
            id: '02',
            name: 'GOLD PACKAGE',
            price: 350,
            features: ['Blandit massa enim nec', 'Orci dapibus ultrices in', 'Elementum nisi eleifend', 'Sed turpis tincidunt id', 'Amet consectetur', 'Gravida neque convallis']
        },
        {
            id: '03',
            name: 'BASIC PACKAGE',
            price: 400,
            features: ['Blandit massa enim nec', 'Orci dapibus ultrices in', 'Elementum nisi eleifend', 'Sed turpis tincidunt id', 'Amet consectetur', 'Gravida neque convallis']
        },


    ])

    return (
        <section className={"" + props.pClass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="wpo-section-title-s2">
                            <h2>Pricing</h2>
                            <h3>Our Awesome Packages</h3>
                        </div>
                    </div>
                </div>
                <div className="wpo-pricing-wrap">
                    <div className="row">
                        {plan.map((palns, pritem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={pritem}>
                                <div className="wpo-pricing-item">
                                    <div className="wpo-pricing-top">
                                        <div className="wpo-pricing-text">
                                            <h4>{palns.name}</h4>
                                            <h2>${palns.price}<span>/MONTHLY</span></h2>
                                        </div>
                                    </div>
                                    <div className="wpo-pricing-bottom">
                                        <div className="wpo-pricing-bottom-text">
                                            <ul>
                                                {palns.features.map((feature, featureitem) => (
                                                    <li key={featureitem}>{feature}</li>
                                                ))
                                                }
                                            </ul>
                                            <span className="theme-btn" >Choose Plan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}


export default PricingSection;





