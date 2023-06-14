/* eslint-disable @next/next/no-script-component-in-head */
/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @next/next/next-script-for-ga */
import Head from "next/head";
import Script from "next/script";
import { useRef, useState, useEffect } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Hero from "@/components/Hero";
import { CgArrowLongDownC, CgArrowLongUpC } from "react-icons/cg";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const [factorSize, setFactorSize] = useState<number>(1.5);
  const parallaxRef = useRef<IParallax>(null);

  function handleFactorResize() {
    if (window.innerWidth >= 768) {
      return setFactorSize(1);
    } else {
      return factorSize;
    }
  }

  useEffect(() => {
    handleFactorResize();

    window.addEventListener("resize", handleFactorResize);
    return () => window.removeEventListener("resize", handleFactorResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
      <Script
    dangerouslySetInnerHTML={{
      __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NTPPP99');`,
    }}
  />
        <title>Nyrell Leonor - Front End Developer </title>
        <meta
          name="description"
          content="I am a Frontend Developer with expertise in creating beautiful and functional websites and digital products. Contact me to learn more!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="main">
        <section className="intro-section">
          <Parallax ref={parallaxRef} pages={4}>
            <ParallaxLayer offset={0} speed={1.5}>
              <Hero
                button={
                  <button
                    type="button"
                    className="page-btn"
                    aria-label="navigate-pages-button"
                    onClick={() => parallaxRef.current?.scrollTo(1)}
                  >
                    <CgArrowLongDownC />
                  </button>
                }
              />
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={0.4}
              factor={factorSize}
            ></ParallaxLayer>

            <ParallaxLayer
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              offset={1}
              speed={1.5}
              factor={factorSize}
            >
              <About
                button={
                  <button
                    type="button"
                    className="page-btn"
                    aria-label="navigate-pages-button"
                    onClick={() => parallaxRef.current?.scrollTo(2)}
                  >
                    <CgArrowLongDownC />
                  </button>
                }
              />
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={1.5} factor={1.15}>
              <Projects
                button={
                  <button
                    type="button"
                    className="project-page-btn"
                    aria-label="navigate-pages-button"
                    onClick={() => parallaxRef.current?.scrollTo(3)}
                  >
                    <CgArrowLongDownC />
                  </button>
                }
              />
            </ParallaxLayer>

            <ParallaxLayer
              offset={3}
              speed={0.5}
              style={{ background: "hsl(34deg, 100%, 75%)" }}
            ></ParallaxLayer>
            <ParallaxLayer offset={3} speed={1.5} factor={1.5}>
              <Contact
                button={
                  <button
                    type="button"
                    className="page-btn"
                    aria-label="navigate-pages-button"
                    onClick={() => parallaxRef.current?.scrollTo(0)}
                  >
                    <CgArrowLongUpC />
                  </button>
                }
              />
            </ParallaxLayer>
          </Parallax>
        </section>
      </main>
    </>
  );
}
