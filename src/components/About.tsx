/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Skills from "./Skills";

function About() {
  return (
    <section className="about-section">
      <article className="about-section__card">
        <h2>About</h2>
        <p>Focused on strengthening my skills as a front-end developer. I'm constantly refining
            my knowledge of front-end technologies through creating simple to complex projects.
        </p>
        <h3>Skilled in...</h3>
        <Skills/>
      </article>
    </section>
  );
}

export default About;
