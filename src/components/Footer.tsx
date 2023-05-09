
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="footer-section">
      <span className="footer-line"/>
      <nav className="footer-section__nav">
        <ul className="footer-section__nav__list">
          <Link
            href="https://www.linkedin.com/in/nyrell-leonor-39180a1a4/"
            target="_blank"
          >
            <li>Linkedin</li>
          </Link>
          <Link href="/Nyrell-Leonor-Resume-CV.pdf" download>
            <li>Resume</li>
          </Link>
          <Link href="https://github.com/nyrellcl" target="_blank">
            <li>Github</li>
          </Link>
          <Link href="mailto:nyrell.leonor2000@gmail.com">
            <li>E-mail</li>
          </Link>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
