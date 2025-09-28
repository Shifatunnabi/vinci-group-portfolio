import React from "react";
import Link from "next/link";
import Teams from "../../api/team";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSection = (props) => {

    return (

        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center" style={{marginTop: '60px', paddingTop: '40px', marginBottom: '50px'}}>
                            <h2 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '20px'}}>Our Expert Team</h2>
                            <p style={{fontSize: '18px', color: '#687693', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6'}}>
                                Meet our dedicated professionals who bring expertise, innovation, and excellence to every project we undertake
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Teams.slice(0, 4).map((team, titem) => (
                        <div className="col-lg-3 col-md-6 col-12" key={titem}>
                            <div className="tema-card">
                                <div className="image">
                                    <Image src={team.timg} alt="" />
                                </div>
                                <div className="content">
                                    <h3><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>{team.title}</Link></h3>
                                    <span>{team.subtitle}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default TeamSection;