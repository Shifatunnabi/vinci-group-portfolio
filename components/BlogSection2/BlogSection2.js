import React from "react";
import Link from "next/link";
import blogs from '../../api/blogs'
import Image from "next/image";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection2 = (props) => {



    return (
        <section className={"" + props.tClass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <div className="wpo-section-title-s2">
                            <h2>blog</h2>
                            <h3>News & articles</h3>
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
                                    <h2><Link onClick={ClickHandler}href={'/blog-single/[slug]'} to={`/blog-single/${bloge.slug}`}>{bloge.title}</Link></h2>
                                    <p>{bloge.description}</p>
                                    <Link onClick={ClickHandler}href={'/blog-single/[slug]'} to={`/blog-single/${bloge.slug}`}>{bloge.link}<i className="ti-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogSection2;




