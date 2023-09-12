import React from "react";
import "./About.css";
import { aboutUs } from "./constant";

export default function About() {
  return (
    <div>
      <section className="hero">
        <div className="heading">
          <h1>About Us</h1>
        </div>
        <div className="aboutContainer">
          <div className="hero-content">
            <h2>Welcome to WYAMRO</h2>
            <p>{aboutUs}</p>
            <button className="cta-button">Learn More</button>
          </div>
          <div className="hero-image">
            <img src="/images/home/aboutUsImg.jpg" />
          </div>
        </div>
      </section>
    </div>
  );
}
