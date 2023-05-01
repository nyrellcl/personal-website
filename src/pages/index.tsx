import Head from "next/head";
import Typed from "typed.js";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { animated, useSpring } from "@react-spring/web";
import Nav from "@/components/Nav";

export default function Home() {
  //const el = useRef<HTMLSpanElement>(null!);

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
    <>
      <Head>
        <title>Nyrell Leonor - Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <section className="intro-section">
          <Parallax pages={2}>
            <ParallaxLayer
              offset={0}
              speed={1}
              style={{ backgroundColor: "red", height: "100%" }}
            ></ParallaxLayer>
            <ParallaxLayer offset={0} speed={1.5}>
              <Nav />
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
                    <Link href="../assets/Nyrell Leonor Resume-CV.pdf" download>
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
              </article>
            </ParallaxLayer>

            <ParallaxLayer
              offset={1}
              speed={1}
              style={{ backgroundColor: "blue" }}
            ></ParallaxLayer>
            <ParallaxLayer offset={1.1} speed={1.3}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              maxime quae aut fugit saepe! Similique unde rerum, consectetur,
              distinctio numquam, reiciendis omnis perspiciatis harum quod
              obcaecati aspernatur nisi optio consequatur.
            </ParallaxLayer>
          </Parallax>
        </section>
      </main>
    </>
  );
}
