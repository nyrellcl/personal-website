/* eslint-disable react/no-unescaped-entities */
import React, { ReactNode } from "react";
import Skills from "./Skills";

interface AboutProps {
  button: React.ReactNode;
}

function About({ button }: AboutProps) {
  return (
    <section className="about-section">
      <article className="about-section__card">
        <h2>About</h2>
        <p>
          I specialize in crafting visually appealing and engaging user
          interfaces. Specialize in writing clean, efficient, and maintainable
          code that brings designs to life.
        </p>
        <p>
          With a passion for dynamic animations and intuitive navigation, I am
          committed to enhancing user experience through continuous learning and
          building.
        </p>
        <h3>Working with...</h3>
        <Skills />
        {button}
      </article>
    </section>
  );
}

export default About;
