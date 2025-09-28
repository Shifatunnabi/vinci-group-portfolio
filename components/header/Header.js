import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import Image from 'next/image';



const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/1234567890', '_blank'); // Replace with your WhatsApp number
    }


    return (
        <header id="header">
            <div className={"" + props.hclass}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    {/* <Link onClick={ClickHandler} className="navbar-brand" href="/home"><Image src={props.Logo}
                                        alt="logo" /></Link> */}
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/home"><Image src="/images/new/asset4.svg" width={120} height={50}
                                        alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Home</Link>
                                            {/* <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/home">Home style 1</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-2">Home style 2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-3">Home style 3</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-4">Home style 4</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-5">Home style 5</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-6">Home style 6</Link></li>
                                            </ul> */}
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/">About</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/"> Sister Concerns </Link>
                                            {/* <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/service">Service Style 1</Link></li>
                                                <li><Link onClick={ClickHandler} href="/service-s2">Service Style 2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/service-s3">Service Style 3</Link></li>
                                                <li><Link onClick={ClickHandler} href="/service-single/Power-&-Energy-Sectors">Service Single</Link></li>
                                            </ul> */}
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Projects</Link>
                                            {/* <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/project">Project </Link></li>
                                                <li><Link onClick={ClickHandler} href="/project-single/Custom-Fabrication">Project Single</Link></li>
                                            </ul> */}
                                        </li>
                                        {/* <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="#">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/team">Team</Link></li>
                                                <li><Link onClick={ClickHandler} href="/team-single/Henry-Bannet">Team Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/shop">Shop</Link></li>
                                                <li><Link onClick={ClickHandler} href="/product-single/Perfume">Shop single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/cart">Cart</Link></li>
                                                <li><Link onClick={ClickHandler} href="/checkout">Chackout</Link></li>
                                                <li><Link onClick={ClickHandler} href="/pricing">Pricing</Link></li>
                                                <li><Link onClick={ClickHandler} href="/404">404 Error</Link></li>
                                            </ul>
                                        </li> */}
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Blogs</Link>
                                            {/* <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/blog">Blog right sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/">Blog details</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Blog details right sidebar</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-left-sidebar/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Blog details left
                                                            sidebar</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-fullwidth/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Blog details
                                                            fullwidth</Link></li>
                                                    </ul>
                                                </li>
                                            </ul> */}
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="whatsapp-icon">
                                        <button 
                                            className="whatsapp-btn" 
                                            onClick={handleWhatsAppClick}
                                            style={{
                                                background: 'transparent',
                                                border: 'none',
                                                borderRadius: '50%',
                                                width: '50px',
                                                height: '50px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                marginRight: '15px'
                                            }}
                                        >
                                            <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={40} height={40} />
                                        </button>
                                    </div>
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                                className={`fi ti-search ${menuActive ? "ti-close" : "fi "}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi flaticon-loupe"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="close-form">
                                        <Link onClick={ClickHandler} className="theme-btn" href="/">Get In Touch</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;