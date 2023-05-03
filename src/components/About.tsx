/* eslint-disable react/no-unescaped-entities */
import React, { ReactNode } from "react";
import Skills from "./Skills";

interface AboutProps {
    button: React.ReactNode;
  }

function About({button}: AboutProps) {
  return (
    <section className="about-section">
      <article className="about-section__card">
        <h2>About</h2>
        <p>Focused on strengthening my skills as a front-end developer. I'm constantly refining
            my knowledge of front-end technologies through creating simple to complex projects.
        </p>
        <h3>Learning and creating with...</h3>
        <Skills/>
      {button}
      </article>
    </section>
  );
}

export default About;
