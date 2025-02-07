// components/Hero.js

import Image from "next/image";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Affan, a passionate Full Stack Developer.</p>
        <a href="#projects" className="btn">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
