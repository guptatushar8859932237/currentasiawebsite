import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Homebanner() {

    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    const userid = JSON.parse(localStorage.getItem("data"))
    const navigate = useNavigate()
    const hanldeclicknavi = () => {
        if (userid === null || undefined) {
            navigate('/login')
        } else {
            navigate('/addfreight')
        }
    }
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='bannerHome item banner_section'>
            {/* <div class="pattern-2 bounce-y"></div> */}
            <Slider {...settings}>
                <div className='image111' >
                    <div data-aos="fade-down-right">
                        <div className='banner_text'>
                            <div className="home_ban">
                                <div className='row justify-content-center'>
                                    <div className='col-md-10'>
                                        <p className='text-white fw-bolder home_para' style={{ fontSize: "3rem" }}>See how truly integrated
                                            logistics delivers</p>
                                        <p className='text-white fs-5 short_para'>With truly integrated logistics there’s always a new way to keep your goods moving and
                                            your business growing.</p>
                                        <div className='text-center'>
                                            <button className='btn text-white fw-bolder' onClick={hanldeclicknavi} style={{ backgroundColor: "#ce1d22", padding: "10px 20px" }}>Add Freight <i className="fi fi-rr-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='image113'>
                    <div className='banner_text'>
                        <div className="home_ban">
                            <div className='row justify-content-center'>
                                <div className='col-md-10'>
                                    <p className='text-white fw-bolder home_para' style={{ fontSize: "3rem" }}>See how truly integrated
                                        logistics delivers</p>
                                    <p className='text-white fs-5 short_para'>With truly integrated logistics there’s always a new way to keep your goods moving and
                                        your business growing.</p>
                                    <div className='text-center'>
                                        <button className='btn text-white fw-bolder' onClick={hanldeclicknavi} style={{ backgroundColor: "#ce1d22", padding: "10px 20px" }}>Add Freight <i className="fi fi-rr-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='image114'>
                    <div className='banner_text'>
                        <div className="home_ban">
                            <div className='row justify-content-center'>
                                <div className='col-md-10'>
                                    <p className='text-white fw-bolder home_para' style={{ fontSize: "3rem" }}>See how truly integrated
                                        logistics delivers</p>
                                    <p className='text-white fs-5 short_para'>With truly integrated logistics there’s always a new way to keep your goods moving and
                                        your business growing.</p>
                                    <div className='text-center'>
                                        <button className='btn text-white fw-bolder' onClick={hanldeclicknavi} style={{ backgroundColor: "#ce1d22", padding: "10px 20px" }}>Add Freight <i className="fi fi-rr-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='image115 '>
                    <div className='banner_text'>
                        <div className="home_ban">
                            <div className='row justify-content-center'>
                                <div className='col-md-10'>
                                    <p className='text-white fw-bolder home_para' style={{ fontSize: "3rem" }}>See how truly integrated
                                        logistics delivers</p>
                                    <p className='text-white fs-5 short_para'>With truly integrated logistics there’s always a new way to keep your goods moving and
                                        your business growing.</p>
                                    <div className='text-center'>
                                        <button className='btn text-white fw-bolder' onClick={hanldeclicknavi} style={{ backgroundColor: "#ce1d22", padding: "10px 20px" }}>Add Freight <i className="fi fi-rr-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}