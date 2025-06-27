import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import "./Hero.css";

const heroText = {
  en: {
    title: "Download MPX",
    button: "Download Now",
  },
  ar: {
    title: "تحميل MPX",
    button: "تحميل الآن",
  },
};

const Hero = ({ language }) => (
  <section className="hero">
    <div className="hero-left">
      <h1 className="hero-title">{heroText[language].title}</h1>
      <button className="download-btn">{heroText[language].button}</button>
    </div>
    <div className="hero-right">
      <a href="#" className="icon-btn">
        <FaFacebook />
      </a>
      <a href="#" className="icon-btn">
        <FaInstagram />
      </a>
      <a href="#" className="icon-btn">
        <FaTiktok />
      </a>
      <a href="#" className="icon-btn">
        <FaYoutube />
      </a>
    </div>
  </section>
);

export default Hero;
