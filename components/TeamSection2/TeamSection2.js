import React from "react";
import Link from "next/link";
import Teams from "../../api/team";
import Image from "next/image";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSection2 = (props) => {

    return (

        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="wpo-section-title-s2">
                            <h2>Expert Team</h2>
                            <h3>Our Expert Team.</h3>
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
export default TeamSection2;