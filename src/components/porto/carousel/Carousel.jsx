import React, { useState } from "react";
import Slider from "react-slick";
import "./carousel.css";
import ReactPlayer from "react-player";
import Play from "../play-btn/Play";
import bjb from "../../../assets/image/bjb.webp";
import eldoda from "../../../assets/image/Elldoda.webp";
import moladin from "../../../assets/image/Moladin.webp";
import mandiri from "../../../assets/image/mandiri.webp";
import ghost from "../../../assets/image/Ghostober.webp";
import Popup from "../popup/Popup";

function PauseOnHover() {
    const [bjbPopup, setBjbPopup] = useState(false);
    const [eldodaPopup, setEldodaPopup] = useState(false);
    const [moladinPopup, setMoladinPopup] = useState(false);
    const [mandiriPopup, setMandiriPopup] = useState(false);
    const [ghostPopup, setGhostPopup] = useState(false);

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        initialSlide: 0,
        swipeToSlide: true,
        lazyLoad: "progressive",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                },
            },
        ],
    };
    return (
        <>
            <div className="wahana">
                <Slider {...settings}>
                    <div className="img-1">
                        <button
                            className="batox"
                            onClick={() => setBjbPopup(true)}
                        >
                            <img src={bjb} />
                            <div className="bg-play">
                                <div className="play-btn">
                                    <Play />
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className="img-1">
                        <button
                            className="batox"
                            onClick={() => setEldodaPopup(true)}
                        >
                            <img src={eldoda} />
                            <div className="bg-play">
                                <div className="play-btn">
                                    <Play />
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className="img-1">
                        <button
                            className="batox"
                            onClick={() => setMoladinPopup(true)}
                        >
                            <img src={moladin} />
                            <div className="bg-play">
                                <div className="play-btn">
                                    <Play />
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className="img-1">
                        <button
                            className="batox"
                            onClick={() => setMandiriPopup(true)}
                        >
                            <img src={mandiri} />
                            <div className="bg-play">
                                <div className="play-btn">
                                    <Play />
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className="img-1">
                        <button
                            className="batox"
                            onClick={() => setGhostPopup(true)}
                        >
                            <img src={ghost} />
                            <div className="bg-play">
                                <div className="play-btn">
                                    <Play />
                                </div>
                            </div>
                        </button>
                    </div>
                </Slider>
            </div>
            <Popup trigger={bjbPopup} setTrigger={setBjbPopup}>
                <ReactPlayer
                    className="popup-vids"
                    url={"https://www.youtube.com/embed/86M4_QxkgvA"}
                    playing={false}
                    loop={true}
                    controls={true}
                    height="90vh"
                    width="82%"
                />
            </Popup>
            <Popup trigger={eldodaPopup} setTrigger={setEldodaPopup}>
                <ReactPlayer
                    className="popup-vids"
                    url={"https://www.youtube.com/embed/vySRj0EL2ss"}
                    playing={false}
                    loop={true}
                    controls={true}
                    height="90vh"
                    width="82%"
                />
            </Popup>
            <Popup trigger={moladinPopup} setTrigger={setMoladinPopup}>
                <ReactPlayer
                    className="popup-vids"
                    url={"https://www.youtube.com/embed/eGdnGiMnAa4"}
                    playing={false}
                    loop={true}
                    controls={true}
                    height="90vh"
                    width="82%"
                />
            </Popup>
            <Popup trigger={mandiriPopup} setTrigger={setMandiriPopup}>
                <ReactPlayer
                    className="popup-vids"
                    // url={"https://www.youtube.com/embed/vySRj0EL2ss"}
                    playing={false}
                    loop={true}
                    controls={true}
                    height="90vh"
                    width="82%"
                />
            </Popup>
            <Popup trigger={ghostPopup} setTrigger={setGhostPopup}>
                <ReactPlayer
                    className="popup-vids"
                    // url={"https://www.youtube.com/embed/vySRj0EL2ss"}
                    playing={false}
                    loop={true}
                    controls={true}
                    height="90vh"
                    width="82%"
                />
            </Popup>
        </>
    );
}

export default PauseOnHover;
