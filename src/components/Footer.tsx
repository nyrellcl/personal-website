import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="footer-section">
      <span className="footer-line" />
      <nav className="footer-section__nav">
        <ul className="footer-section__nav__list">
          <li>
            <Link
              href="https://www.linkedin.com/in/nyrell-leonor-39180a1a4/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href="/Nyrell-Leonor-Resume-CV.pdf" download>
              Resume
            </Link>
          </li>

          <li>
            <Link href="https://github.com/nyrellcl" target="_blank">
              Github
            </Link>
          </li>

          <li>
            <Link href="mailto:nyrell.leonor2000@gmail.com">E-mail</Link>
          </li>
        </ul>
        <small className="attribution">
          <h5>Design & code by Nyrell Leonor © 2023</h5>
        </small>
      </nav>
    </footer>
  );
}

export default Footer;
