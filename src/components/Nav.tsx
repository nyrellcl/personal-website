import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../assets/personal-logo.png";
import linkedIn from "../assets/linkedin.svg";
import resume from "../assets/resume.svg";
import github from "../assets/github.svg";
import mail from "../assets/envelope.svg";

function Nav() {
    const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <header>
      <nav className="nav-social">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="" />
          </Link>
        </div>

        <div className="nav-social__menu" onClick={() => setIsClicked(!isClicked)}>

        {!isClicked ? <FaBars/> : <FaTimes/>}
        </div>
        <ul className={!isClicked ? "nav-social__list" : "nav-social__list active"}>
            <Link
              href="https://www.linkedin.com/in/nyrell-leonor-39180a1a4/"
              target="_blank"
            >
              <Image src={linkedIn} alt="linked-in-icon" />
            </Link>
            <Link href="/Nyrell-Leonor-Resume-CV.pdf" download>
              <Image src={resume} alt="resume-icon" />
            </Link>
            <Link href="https://github.com/nyrellcl" target="_blank">
              <Image src={github} alt="github-icon" />
            </Link>
            <Link href="mailto:nyrell.leonor2000@gmail.com">
              <Image src={mail} alt="envelope-icon" />
            </Link>
          </ul>
      </nav>
    </header>
  );
}

export default Nav;
