import React from "react";
import "./AboutUs.css";

const AboutUs = ({ title, desc }) => (
  <section className="aboutus">
    <h2 className="aboutus-title">{title}</h2>
    <p className="aboutus-desc">
      {desc.split("\n").map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ))}
    </p>
  </section>
);

export default AboutUs;
