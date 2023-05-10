/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Skills from "./Skills";

interface ButtonProps {
  button: React.ReactNode;
}

function About({ button }: ButtonProps) {
  return (
    <section className="about-section">
      <article className="about-section__card">
        <article className="about-section__card__content">
          <h2>About</h2>
          <p>
            With a passion for dynamic animations and intuitive navigation, I am
            committed to enhancing user experience through continuous learning
            and building.
          </p>
          <p>
            I strive to create things that
            serve a purpose and help solve problems. With experience in customer
            relations, putting the users first allows me to identify the right
            problems to solve, deliver the solution efficiently, and
            continuously improve on the solution.
          </p>
        </article>
        <article className="about-section__card__content__skills">
          <Skills />
        </article>
        {button}
      </article>
    </section>
  );
}

export default About;
