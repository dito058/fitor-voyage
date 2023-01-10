import React from "react";
import "./jumbotron.css";
import ReactPlayer from "react-player";

const Jumbotron = () => {
    return (
        <>
            <section className="jumbotron">
                <ReactPlayer
                    className="hero"
                    url={"https://www.youtube.com/embed/xkePSjoXd1Q"}
                    playing={true}
                    loop={true}
                    controls={false}
                    muted={true}
                    width="100%"
                    height="111%"
                />
                <div className="slogan">
                    <div className="satu">
                        <h1>
                            CREATING
                            <br />
                            <span>INNOVATION</span>
                        </h1>
                    </div>
                    <div className="dua">
                        <h1>
                            THROUGH
                            <br />
                            <span>MULTIMEDIA</span>
                        </h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Jumbotron;
