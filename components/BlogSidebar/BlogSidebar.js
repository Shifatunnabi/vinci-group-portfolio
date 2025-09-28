import React from 'react';
import Link from 'next/link'
import about from '/public/images/blog/about-widget.jpg'
import blogs from '../../api/blogs'
import Image from 'next/image';

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <Image src={about} alt="" />
                    </div>
                    <h4>Manik Doe</h4>
                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack"><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack"><i className="ti-linkedin"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack"><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Post Categories</h3>
                    <ul>
                        <ul>
                            <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Asbestos Remediation <span>5</span></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">International Planning <span>7</span></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Mechanical Engineering <span>3</span></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Oil & Gas Engineering<span>6</span></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Painting and Protective <span>2</span></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Petroleum and Gas<span>8</span></Link></li>
                        </ul>
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.slice(0, 3).map((blog, bl) => (
                            <div className="post" key={bl}>
                                <div className="img-holder">
                                    <Image src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title2}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">accountant</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Engineering</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Industrial</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Mechanical</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Oil & Gas</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Painting</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Petroleum</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Success</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
