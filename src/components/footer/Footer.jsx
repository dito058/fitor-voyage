import React from "react";
import "./footer.css";
import foot from "../../assets/image/icon1.png";
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram";
import { SiYoutube } from "@react-icons/all-files/si/SiYoutube";

function Footer() {
    return (
        <>
            <footer id="Contact">
                <div className="judul-footer">
                    <h2>Lets work together!</h2>
                </div>

                <button
                    className="contact-us"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open("https://wa.me/+6285926841538", "_blank");
                    }}
                >
                    <p>CONTACT US!</p>
                    <img src={foot} alt="icon" />
                </button>

                <div className="white-line"></div>

                <div className="address">
                    <div className="connect-address">
                        <h3>BANDUNG, INDONESIA</h3>
                        <p>
                            <a
                                href="https://wa.me/+6285926841538"
                                target="_blank"
                            >
                                +6285926841538
                            </a>
                            <br />
                            <a
                                href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgmQMHTZwMqdNgJktZdQLjgLzNnDMwBJSnnlFlpDNGmpRjZCZnlVdPTsCSWBHWVDDVTsq"
                                target="_blank"
                            >
                                fitor.voyage@gmail.com
                            </a>
                            <br />
                            <br />
                            <a
                                href="https://goo.gl/maps/eL7R6Kmw2S7DCPtQ8"
                                target="_blank"
                            >
                                Jl.Cijerokaso, No.16, RT05/RW01, Bandung, West
                                Java, Indonesia
                            </a>
                        </p>
                    </div>

                    <div className="connect-icon">
                        <ul>
                            <li>
                                <a
                                    href="https://www.instagram.com/fitorvoyage.id/"
                                    target="_blank"
                                >
                                    <SiInstagram />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/channel/UC_iy91eFlCMrx4ZeV1VEGBw"
                                    target="_blank"
                                >
                                    <SiYoutube />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="white-second-line"></div>

                <div className="copyright">
                    <p>Copyright © 2023 FITOR VOYAGE All Rights Reserved</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
