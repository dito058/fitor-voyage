import React from "react";
import logo from "../../assets/image/logo.png";
import "./navbar.css";
import { useState } from "react";
import yellowVoyage from "../../assets/image/Voyage-yellow.png";
import { Squash as Hamburger } from "hamburger-react";

function Navbar() {
    // to change menu classes
    const [menu_class, setMenuClass] = useState("menu hidden");

    return (
        <>
            <nav>
                <div className="logo">
                    <div className="logo-img">
                        <a href="#">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                </div>
                <div className="voyage">
                    <img src={yellowVoyage} alt="Voyage" />
                </div>

                <Hamburger
                    color="#ffde59"
                    size={30}
                    rounded
                    onToggle={(toggled) => {
                        if (toggled) {
                            setMenuClass("menu visible");
                        } else {
                            setMenuClass("menu hidden");
                        }
                    }}
                />

                <div className={menu_class}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#Works">Works</a>
                        </li>
                        <li>
                            <a href="#About">About Us</a>
                        </li>
                        <li>
                            <a href="#Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
