import React from "react";
import "./Services.css";

const Services = ({ title, services }) => (
  <section className="services">
    <h2 className="services-title">{title}</h2>
    <div className="services-grid">
      {services.map((service, i) => (
        <div key={i} className="service-card">
          {service}
        </div>
      ))}
    </div>
  </section>
);

export default Services;
