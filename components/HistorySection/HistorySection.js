import React from 'react';
import Link from 'next/link';
import Hs1 from '/public/images/history.jpg'
import VideoModal from '../ModalVideo/VideoModal';
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const HistorySection = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <span>Our History</span>
                            <h2>Company history, present and the future</h2>
                            <p>Tellus sed volutpat massa turpis justo blandit blandit nec. Viverra ante in urna sit
                                posuere nunc ut. Tempus montes ut magna nisl quis turpis sed etiam.</p>
                            <div className="btn_history">
                                <Link onClick={ClickHandler} href="/">Discover More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-content">
                <Image src={Hs1} alt="" />
                <VideoModal/>
            </div>
        </section>
    );
};

export default HistorySection;