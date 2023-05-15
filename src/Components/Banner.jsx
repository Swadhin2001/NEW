import React, { useState, useEffect } from "react";
import "../CSS/Banner_new.css";
import Logo from "../Assets/App_Logo.png";
import BannerImage from "../Assets/Banner.jpg";

const Banner = () => {
    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);

    useEffect(() => {
        const text1 = setTimeout(() => {
            setShowText1(true);
        }, 500);

        const text2 = setTimeout(() => {
            setShowText2(true);
        }, 2000);

        return () => {
            clearTimeout(text1);
            clearTimeout(text2);
        };
    }, []);

    return (
        <>
        <div className="Banner">
            <header className="header" >
                <img src={Logo} alt="Icon" style={{width: "6%"}}/>
                <h3>Smart Calorie</h3>
            </header>
            <section className="banner">
                <img src={BannerImage} alt="Banner"/>
                <h1 className={`slogan_1 ${showText1 ? 'showFirst' : ''}`}>
                    EAT GOOD</h1>
                <h1 className={`slogan_2 ${showText2 ? 'showSecond' : ''}`}>
                    FEEL GOOD</h1>
            </section>
        </div>
        </>
    )
}

export default Banner;