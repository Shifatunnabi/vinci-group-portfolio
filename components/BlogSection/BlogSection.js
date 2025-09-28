import React from "react";
import Link from "next/link";
import SectionTitle from "../SectionTitle/SectionTitle";
import blogs from '../../api/blogs'
import Image from "next/image";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = (props) => {



    return (
        <section className={"" + props.tClass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center" style={{marginTop: '60px', paddingTop: '40px', marginBottom: '50px'}}>
                            <h2 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '20px'}}>News & Articles</h2>
                            <p style={{fontSize: '18px', color: '#687693', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6'}}>
                                Stay updated with our latest news, insights, and industry articles that showcase our expertise and innovations
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {blogs.slice(0.3).map((bloge, bkye) => (
                        <div className="col-lg-4 col-md-6 col-12" key={bkye}>
                            <div className="blog-card">
                                <div className="image">
                                    <Image src={bloge.screens} alt="" />
                                </div>
                                <div className="content">
                                    <ul>
                                        <li>{bloge.create_at}</li>
                                        <li>By: {bloge.author}</li>
                                    </ul>
                                    <h2><Link onClick={ClickHandler} href='/'>{bloge.title}</Link></h2>
                                    <p>{bloge.description}</p>
                                    <Link onClick={ClickHandler} href='/'>{bloge.link}<i className="ti-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogSection;




