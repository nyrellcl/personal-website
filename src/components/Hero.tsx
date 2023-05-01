import React from 'react'
import Head from "next/head";
import Typed from "typed.js";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { animated, useSpring } from "@react-spring/web";

function Hero({button}: any): JSX.Element {

  const typedRef = useRef<HTMLParagraphElement>(null);
  const parallaxRef = useRef<IParallax>(null)


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
    <animated.p ref={typedRef}></animated.p>
    <nav className="nav-social">
      <ul className="nav-social__list">
        <Link
          href="https://www.linkedin.com/in/nyrell-leonor-39180a1a4/"
          target="_blank"
        >
          <li>LinkedIn</li>
        </Link>
        <Link href="./assets/Nyrell Leonor Resume-CV.pdf" download={true}>
          <li>Resume</li>
        </Link>
        <Link href="https://github.com/nyrellcl" target="_blank">
          <li>Github</li>
        </Link>
        <Link href="mailto:nyrell.leonor2000@gmail.com">
          <li>Mail</li>
        </Link>
      </ul>
    </nav>
    {button}
  </article>
  )
}

export default Hero