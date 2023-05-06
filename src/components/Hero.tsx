import React from "react";
import Typed from "typed.js";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { animated } from "@react-spring/web";
import Nav from "./Nav";

interface ButtonProps {
  button: React.ReactNode;
}

function Hero({ button }: ButtonProps): JSX.Element {
  const typedRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const typedOptions = {
      strings: ["Developer", "Creative", "Designer"],
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
    <>
    <Nav/>
    <article className="intro-section__content">
      <h1>Nyrell Leonor</h1>
      <article className="profession-container">
        <p>I am a</p>
        <animated.p ref={typedRef}></animated.p>
      </article>
      {button}
    </article>
    </>
  );
}

export default Hero;
