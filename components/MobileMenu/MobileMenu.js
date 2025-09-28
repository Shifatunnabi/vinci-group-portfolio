import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Home style 1',
                link: '/home'
            },
            {
                id: 12,
                title: 'Home style 2',
                link: '/home-2'
            },
            {
                id: 13,
                title: 'Home style 3',
                link: '/home-3'
            },
            {
                id: 14,
                title: 'Home style 4',
                link: '/home-4'
            },
            {
                id: 14,
                title: 'Home style 5',
                link: '/home-5'
            },
            {
                id: 14,
                title: 'Home style 6',
                link: '/home-6'
            },
          
        ]
    },
    {
        id: 88,
        title: 'About Us',
        link: '/about',
    },
    {
        id: 7,
        title: 'Service',
        link: '#',
        submenu: [
            {
                id: 71,
                title: 'Service Style 1',
                link: '/service',
            },
            {
                id: 72,
                title: 'Service Style 2',
                link: '/service-s2',
            },
            {
                id: 73,
                title: 'Service Style 3',
                link: '/service-s3',
            },
            {
                id: 74,
                title: 'Service Single',
                link: '/service-single/Power-&-Energy-Sectors',
            },
           
            
        ]
    },
    {
        id: 44,
        title: 'Project',
        link: '/',
        submenu: [
            {
                id: 41,
                title: 'Projects ',
                link: '/project',
            },
            {
                id: 42,
                title: 'Projects Single',
                link: '/project-single/Custom-Fabrication'
            },
        ]
    },
    {
        id: 3,
        title: 'Pages',
        link: '/',
        submenu: [
            {
                id: 31,
                title: 'Team',
                link: '/team'
            },
            {
                id: 32,
                title: 'Team single',
                link: '/team-single/Henry-Bannet'
            },
            {
                id: 33,
                title: 'Shop Page',
                link: '/shop'
            },
            {
                id: 34,
                title: 'Shop Single',
                link: '/product-single/Perfume'
            },
            {
                id: 35,
                title: 'Cart',
                link: '/cart'
            },
            {
                id: 36,
                title: 'Checkout',
                link: '/checkout'
            },
            {
                id: 37,
                title: 'Pricing',
                link: '/pricing'
            },
            {
                id: 38,
                title: '404 Error',
                link: '/404'
            },
        ]
    },
    {
        id: 5,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 52,
                title: 'Blog Left sidebar',
                link: '/blog-left-sidebar'
            },
            {
                id: 53,
                title: 'Blog full width',
                link: '/blog-fullwidth'
            },
            {
                id: 54,
                title: 'Blog single',
                link: '/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack'
            },
            {
                id: 55,
                title: 'Blog single Left sidebar',
                link: '/blog-single-left-sidebar/Why-Industry-Are-A-Juicy-Target-For-Cyberattack'
            },
            {
                id: 56,
                title: 'Blog single Left sidebar',
                link: '/blog-single-fullwidth/Why-Industry-Are-A-Juicy-Target-For-Cyberattack'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    href={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="active"
                                        href={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;