import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../assets/personal-logo.png";

function Nav() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <header>
      <nav className="nav-social">
        <div className="logo">
          <Link href="/"><span>Nyrell Leonor</span></Link>
          
        </div>

        <div
          className="nav-social__menu"
          onClick={() => setIsClicked(!isClicked)}
        >
          {!isClicked ? <FaBars /> : <FaTimes />}
        </div>
        <ul
          className={
            !isClicked ? "nav-social__list" : "nav-social__list active"
          }
        >
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
      </nav>
    </header>
  );
}

export default Nav;
