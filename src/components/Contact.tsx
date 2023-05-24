import React, { useRef, useState, useEffect } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Link from "next/link";
import Footer from "./Footer";

interface ButtonProps {
  button: React.ReactNode;
}

function Contact({ button }: ButtonProps) {
  return (
    <>
      <section className="contact-section">
        <article className="contact-section__content">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h3>Let's connect</h3>
          <p>
            My goal is to work alongside <span style={{color: "hsl(155, 38%, 48%);"}}>talented</span> people and contribute to
            products that <span style={{color: "hsl(155, 38%, 48%)"}}>enhances</span> the lives of users.
          </p>
          <br />
          <p>
            I am always looking to <span style={{color: "hsl(155, 38%, 48%)"}}>learn </span> more and am open to taking on
            challenging roles that <span style={{color: "hsl(155, 38%, 48%)"}}>strengthens</span> my skills as a developer.
          </p>
          <div className="contact-section__content__btn">{button}</div>
          <article className="contact-section__content__mail">
            <article className="contact-section__content__mail__info">
              <h4>Get in touch</h4>
              <Link href="mailto:nyrell.leonor2000@gmail.com?subject=%20Connect%20with%20me%20">
                <button type="button">Contact</button>
              </Link>
            </article>
          </article>
        </article>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
