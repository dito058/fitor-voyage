import "./porto.css";
import React, { useState } from "react";
import PauseOnHover from "./carousel/Carousel";

function Porto() {
    // Text scrolling animation
    const [fadeIn, setFadeIn] = useState(false);
    const zoomIn = () => {
        if (window.scrollY >= 500) {
            setFadeIn(true);
        } else if (window.scrollY < 500) {
            setFadeIn(true);
        } else {
            setFadeIn(false);
        }
    };
    window.addEventListener("scroll", zoomIn);

    return (
        <>
            <section id="Works">
                <div
                    className={
                        fadeIn
                            ? "judul-porto judul-porto-fadein"
                            : "judul-porto"
                    }
                >
                    <h1>OUR WORKS</h1>
                    <h2>TRUSTED BY</h2>
                </div>
                <div className="slideshow">
                    <PauseOnHover />
                </div>
            </section>
        </>
    );
}

export default Porto;
