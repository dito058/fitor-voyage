import React from "react";
import ReactPlayer from "react-player";
import "./about.css";

function About() {
    return (
        <>
            <section id="About">
                <div className="about-judul1">
                    <h1>ABOUT US</h1>
                </div>

                <div className="about-int">
                    <div className="about-int-vids">
                        <ReactPlayer
                            className="interview-vids"
                            url={"https://www.youtube.com/embed/Tjkhn7q-diQ"}
                            muted={true}
                            playing={true}
                            loop={true}
                            controls={false}
                            height="60vh"
                            width="100%"
                        />
                        <div className="close"></div>
                        <h3>TO CREATE</h3>
                    </div>

                    <div className="about-judul2">
                        <h2>Fitor Voyage</h2>
                    </div>

                    <br />
                    <br />

                    <div className="about-int-text">
                        <div className="text1">
                            <p>
                                A creative production team
                                <br />
                                that mainly works in the fields of
                                <br />
                                videography and photography
                                <br />
                                located in Bandung, West Java, Indonesia.
                            </p>
                        </div>
                        <h3>TO EXPLORE</h3>
                        <div className="text2">
                            <p>
                                We believe in terms of creative project,
                                <br />
                                a proper communication is a necessity to gain
                                <br />
                                mutual understanding in order to achieve a
                                <br />
                                perfect impectful results.
                            </p>
                        </div>
                    </div>

                    <div className="about-bts-vids">
                        <ReactPlayer
                            className="bts-full"
                            url={
                                "https://www.youtube.com/watch?v=utbIGXsoRM0rel=0&iv_load_policy=3&disablekb=1"
                            }
                            muted={true}
                            playing={true}
                            loop={true}
                            controls={false}
                            height="50vh"
                            width="100%"
                        />
                        <div className="tutup"></div>
                        <h3>TO GAIN</h3>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
