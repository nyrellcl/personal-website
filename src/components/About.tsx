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
        <h3>Click below to see my skills!</h3>
        <Skills/>
        <p className="projects-blurb">Continue below to see my <span style={{color: "hsl(284, 40%, 40%)"}}>projects!</span></p>
      {button}
      </article>
    </section>
  );
}

export default About;
