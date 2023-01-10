import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Porto from "./components/porto/Porto";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";

function App() {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <Porto />
            <About />
            <Footer />
        </>
    );
}

export default App;
