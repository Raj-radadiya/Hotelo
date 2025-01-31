import React from 'react';
import './team.scss';
import Slider from "react-slick";
import person1 from '../../../assets/image/member-1.webp';
import share from '../../../assets/icon/material-symbols-light--share.svg';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
export default function Team() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    pauseOnHover: true
                }
            },
        ]
    };
    return (
        <div>
            <div className='mainsection2'>
                <section>
                    <div className='container'>
                        <div className='sectionTitle'>
                            <h2>Our Team</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='mainsection2'>
                            <div className="slider-container">
                                <Slider {...settings}>
                                    <div className='memberDetails'>
                                        <div className='memberImg'>
                                            <img src={person1} alt='person1' />
                                            <div className='social_media'>
                                                <div className='fb'>
                                                    <FaFacebookF />
                                                </div>
                                                <div className='tw'>
                                                    <FaXTwitter />
                                                </div>
                                                <div className='fb'>
                                                    <FaInstagram />
                                                </div>
                                                <div className='tw'>
                                                    <FaLinkedinIn />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='memberDetailsInfo'>
                                            <div className='memberShare'>
                                                <img src={share} alt='share' />
                                            </div>
                                            <div className='memberName'>
                                                <h3>John Smith</h3>
                                            </div>
                                            <div className='memberDesignation'>
                                                <span>Hotel Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='memberDetails'>
                                        <div className='memberImg'>
                                            <img src={person1} alt='person1' />
                                            <div className='social_media'>
                                                <div className='fb'>
                                                    <FaFacebookF />
                                                </div>
                                                <div className='tw'>
                                                    <FaXTwitter />
                                                </div>
                                                <div className='fb'>
                                                    <FaInstagram />
                                                </div>
                                                <div className='tw'>
                                                    <FaLinkedinIn />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='memberDetailsInfo'>
                                            <div className='memberShare'>
                                                <img src={share} alt='share' />
                                            </div>
                                            <div className='memberName'>
                                                <h3>John Smith</h3>
                                            </div>
                                            <div className='memberDesignation'>
                                                <span>Hotel Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='memberDetails'>
                                        <div className='memberImg'>
                                            <img src={person1} alt='person1' />
                                            <div className='social_media'>
                                                <div className='fb'>
                                                    <FaFacebookF />
                                                </div>
                                                <div className='tw'>
                                                    <FaXTwitter />
                                                </div>
                                                <div className='fb'>
                                                    <FaInstagram />
                                                </div>
                                                <div className='tw'>
                                                    <FaLinkedinIn />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='memberDetailsInfo'>
                                            <div className='memberShare'>
                                                <img src={share} alt='share' />
                                            </div>
                                            <div className='memberName'>
                                                <h3>John Smith</h3>
                                            </div>
                                            <div className='memberDesignation'>
                                                <span>Hotel Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='memberDetails'>
                                        <div className='memberImg'>
                                            <img src={person1} alt='person1' />
                                            <div className='social_media'>
                                                <div className='fb'>
                                                    <FaFacebookF />
                                                </div>
                                                <div className='tw'>
                                                    <FaXTwitter />
                                                </div>
                                                <div className='fb'>
                                                    <FaInstagram />
                                                </div>
                                                <div className='tw'>
                                                    <FaLinkedinIn />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='memberDetailsInfo'>
                                            <div className='memberShare'>
                                                <img src={share} alt='share' />
                                            </div>
                                            <div className='memberName'>
                                                <h3>John Smith</h3>
                                            </div>
                                            <div className='memberDesignation'>
                                                <span>Hotel Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
