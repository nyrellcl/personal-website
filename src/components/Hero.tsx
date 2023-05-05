import React from "react";
import Typed from "typed.js";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { animated } from "@react-spring/web";

import linkedIn from "../assets/linkedin.svg";
import resume from "../assets/resume.svg";
import github from "../assets/github.svg";
import mail from "../assets/envelope.svg";
import Image from "next/image";

interface HeroProps {
  button: React.ReactNode;
}

function Hero({ button }: HeroProps): JSX.Element {
  const typedRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const typedOptions = {
      strings: ["Front End Developer", "Creative", "Designer"],
      typeSpeed: 70,
      loop: true,
      backSpeed: 70,
      showCursor: false,
    };

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, typedOptions);
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <article className="intro-section__content">
      <h1>Nyrell Leonor</h1>
      <article className="profession-container">
        <p>I am a</p>
        <animated.p ref={typedRef}></animated.p>
      </article>
      <nav className="nav-social">
        <ul className="nav-social__list">
          <Link
            href="https://www.linkedin.com/in/nyrell-leonor-39180a1a4/"
            target="_blank"
          >
            <Image src={linkedIn} alt="linked-in-icon" />
          </Link>
          <Link href="/Nyrell-Leonor-Resume-CV.pdf" download>
            <Image src={resume} alt="resume-icon" />
          </Link>
          <Link href="https://github.com/nyrellcl" target="_blank">
            <Image src={github} alt="github-icon" />
          </Link>
          <Link href="mailto:nyrell.leonor2000@gmail.com">
            <Image src={mail} alt="envelope-icon" />
          </Link>
        </ul>
      </nav>
      {button}
    </article>
  );
}

export default Hero;
