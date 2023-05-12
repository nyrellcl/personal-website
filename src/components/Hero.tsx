import React from "react";
import { useRef, useState } from "react";
import { useTrail, a } from "@react-spring/web";
import Nav from "./Nav";

interface ButtonProps {
  button: React.ReactNode;
}

function Hero({ button }: ButtonProps): JSX.Element {
  const [open] = useState<boolean>(true);

  const Trail: React.FC<{ open: boolean; children: React.ReactNode }> = ({
    open,
    children,
  }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
      config: { mass: 50, tension: 3000, friction: 250 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    });
    return (
      <>
        {trail.map(({ height, ...style }, index) => (
          <a.h1 key={index} className="trail-text" style={style}>
            {items[index]}
          </a.h1>
        ))}
      </>
    );
  };

  return (
    <>
      <Nav />
      <article className="intro-section__content">
        <article className="trail-text-container">
          <Trail open={open}>
            <span>Creative</span>
            <span>Designer</span>
            <span>Developer</span>
          </Trail>
        </article>
        <article className="intro-section__content__intro">
          <p>
            I am a developer actively building <span style={{color: "hsl(155, 38%, 48%)"}}>efficient</span>, <span style={{color: "hsl(155, 38%, 48%)"}}>intuitive</span>, and <span style={{color: "hsl(155, 38%, 48%)"}}>resilient</span> front end
            applications.
          <br/>
          <br/>
            I strive for <span style={{color: "hsl(155, 38%, 48%)"}}>purposeful</span> and <span style={{color: "hsl(155, 38%, 48%)"}}>impactful</span> creations in my work.{" "}
          </p>
        {button}
        </article>
      </article>
    </>
  );
}

export default Hero;
