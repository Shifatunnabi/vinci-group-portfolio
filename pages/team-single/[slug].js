import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import Teams from '../../api/team';
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Contact from './contact';
import logo from '/public/images/logo-3.svg'
import Image from 'next/image';


const TeamSinglePage = (props) => {

    const router = useRouter()

    const TeamSingles = Teams.find(item => item.slug === router.query.slug)


    return (
        <Fragment>
            <HeaderTopbar />
            <Navbar Logo={logo} hclass={'wpo-site-header wpo-site-header-s3'} />
            <PageTitle pageTitle={TeamSingles?.title} pagesub={'Team'} />
            <div className="team-pg-area section-padding">
                <div className="container">
                    <div className="team-info-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="team-info-img">
                                    <Image src={TeamSingles?.Sime} alt="sdAS" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="team-info-text">
                                    <h2>{TeamSingles?.title}</h2>
                                    <ul>
                                        <li>Position: <span>President miata</span></li>
                                        <li>Planner Service:<span>Senior Engineer</span></li>
                                        <li>Experience:<span>12 Years</span></li>
                                        <li>Address:<span>Millington, Ave, TN 38053</span></li>
                                        <li>Phone:<span>+00 568 746 987</span></li>
                                        <li>Email:<span>youremail@gmail.com</span></li>
                                        <li>Fax:<span>568 746 987</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="exprience-area">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="exprience-wrap">
                                        <h2>Personal Experience</h2>
                                        <p>The purpose of lorem ipsum is to create a natural looking block oftext (sentence,
                                            paragraph, page, etc.) that doesn't distract from thelayout. A practice not without
                                            controversy, laying out pages withmeaningless filler text can be very useful when
                                            the focus is meantto be on design, not content.There are many variations of passages
                                            of Lorem Ipsum available.</p>
                                        <p>But the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don’t look even slightly believable. If you are going to use
                                            a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing
                                            hidden in the middle of text generators on the Internet tend to repeat.</p>
                                       
                                    </div>
                                    <div className="education-area ex-wiget">
                                        <h2>Education</h2>
                                        <ul>
                                            <li>There are many variations of passages of Lorem Ipsum available, but the majority
                                                have suffered alteration in some form, by injected humour.</li>
                                            <li>If you are going to use a passage of Lorem Ipsum.</li>
                                            <li>Very popular during the Renaissance. </li>
                                            <li>Many desktop publishing packages and web page editors now.</li>
                                        </ul>
                                    </div>
                                    <div className="language-area ex-wiget">
                                        <h2>Language</h2>
                                        <ul>
                                            <li>French(fluent), English (fluent), Greek , chinese.</li>
                                        </ul>
                                    </div>

                                    <div className="wpo-contact-area ex-wiget">
                                        <h2>Contact Me</h2>
                                        <div className="quote-form">
                                            <Contact />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
            <Scrollbar />

        </Fragment>
    )
};
export default TeamSinglePage;