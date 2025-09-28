import React, { Fragment, useEffect, useState } from 'react';
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Navbar from '../../components/Navbar/Navbar';
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/action";
import Product from './product'
import api from "../../api";
import { useRouter } from 'next/router'
import PageTitle from '../../components/pagetitle/PageTitle';
import ProductTabs from './alltab';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import logo from '/public/images/logo-3.svg';


const ProductSinglePage = (props) => {
    const router = useRouter()

    const productsArray = api();
    const Allproduct = productsArray

    const { addToCart } = props;

    const initialProducts = Allproduct.filter(prod => prod.slug === router.query.slug);
    const [product, setProduct] = useState(initialProducts);

    useEffect(() => {
        setProduct(Allproduct.filter(prod => prod.slug === router.query.slug));
      }, [Allproduct, router.query.slug]);

    const item = product[0];


    return (
        <Fragment>
            <HeaderTopbar />
            <Navbar hclass={'wpo-site-header wpo-site-header-s3'} Logo={logo} />
            <PageTitle pageTitle={item?.title} pagesub={item?.title}/>
            <section className="wpo-shop-single-section section-padding">
                <div className="container">
                    {item ? <Product
                        item={item}
                        addToCart={addToCart}
                    /> : null}
                    <ProductTabs/>
                </div>
            </section>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        products: state.data.products,
    }
};

export default connect(mapStateToProps, { addToCart })(ProductSinglePage);
