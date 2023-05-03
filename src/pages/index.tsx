import Head from "next/head";
import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Hero from "@/components/Hero";
import { CgArrowLongDownC } from "react-icons/cg";
import { TbGhost } from "react-icons/tb";
import { FaGit, FaHtml5, FaNpm } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  const parallaxRef = useRef<IParallax>(null);
  const alignCenter = { display: "flex", alignItems: "center" };

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
          <Parallax ref={parallaxRef} pages={5}>
            <ParallaxLayer offset={0} speed={1}></ParallaxLayer>
            <ParallaxLayer offset={1.3} speed={-0.3}>
              <article className="ghost-blurb">
                <TbGhost
                  style={{
                    display: "inline-block",
                    width: "8em",
                    height: "8em",
                    marginLeft: "70%",
                    position: "relative",
                  }}
                />
                <span>Enjoy!</span>
              </article>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1.5}>
              <Hero
                button={
                  <button
                    type="button"
                    className="page-btn"
                    onClick={() => parallaxRef.current?.scrollTo(1)}
                  >
                    <CgArrowLongDownC />
                  </button>
                }
              />
            </ParallaxLayer>

            <ParallaxLayer
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              offset={1}
              speed={1}
            >
              <About
                button={
                  <button
                    type="button"
                    className="page-btn"
                    onClick={() => parallaxRef.current?.scrollTo(2)}
                  >
                    <CgArrowLongDownC />
                  </button>
                }
              />
            </ParallaxLayer>
            {/* <article className="skills-grid">
              <ParallaxLayer offset={1.7}>
                <Skills/>
              </ParallaxLayer>
        
            </article> */}
          </Parallax>
        </section>
      </main>
    </>
  );
}
