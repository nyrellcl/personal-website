import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Image, { StaticImageData } from "next/image";
import { CgArrowLongRightC } from "react-icons/cg";
import Link from "next/link";
import coffee from "../assets/coffee.png";
import myTeam from "../assets/myteam.png";
import dictionaryApp from "../assets/dictionary-app.png";
import typingGame from "../assets/typing-game.png";
import githubSearch from "../assets/github-search.png";
import toDo from "../assets/todo.png";
import loop from "../assets/loop-studios.png";
import advice from "../assets/advice.png";

interface ButtonProps {
  button: React.ReactNode;
}

interface ProjectProps {
  offset: number;
  onPageClick: () => void;
  projects: Project[];
  gradient: string;
}

interface Project {
  name: string;
  description: string;
  image: StaticImageData;
  link: string;
}

const ProjectPage = ({
  offset,
  onPageClick,
  projects,
  gradient,
}: ProjectProps) => (
  <>
    <ParallaxLayer
      offset={offset}
      speed={0.2}
      onClick={onPageClick}
      className="polygon-begin"
    ></ParallaxLayer>

    <ParallaxLayer
      offset={offset}
      speed={0.6}
      onClick={onPageClick}
      className={`polygon-end ${gradient}`}
    ></ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.5}>
      <section className="projects-section">
        <h2>My Work</h2>
        <button
          type="button"
          aria-label="navigate-projects-button"
          className="project-btn"
          onClick={onPageClick}
        >
          <CgArrowLongRightC />
        </button>
        <article className="projects-section__container">
          {projects.map((project) => (
            <article key={project.name} className="projects-section__card">
              <Link href={project.link} target="_blank">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="projects-section__images"
                />
              </Link>
              <Link href={project.link} target="_blank">
                <h3>{project.name}</h3>
              </Link>
              <p>{project.description}</p>
            </article>
          ))}
        </article>
      </section>
    </ParallaxLayer>
  </>
);

const projects1 = [
  {
    name: "Github User Search",
    description: "React | TypeScript  | SASS | Github API",
    image: githubSearch,
    link: "https://nyrellcl.github.io/github-search/",
  },
  {
    name: "Dictionary Application",
    description: "React | TypeScript | API | Vite",
    image: dictionaryApp,
    link: "https://dictionary-app-by46.vercel.app/",
  },
];

const projects2 = [
  {
    name: "Coffeeroasters Website",
    description: "React | React Router | JavaScript | SCSS",
    image: coffee,
    link: "https://nyrellcl.github.io/coffee-roasters-react/",
  },
  {
    name: "My Team Website",
    description: "HTML | SCSS | JavaScript",
    image: myTeam,
    link: "https://keen-lily-45c773.netlify.app/",
  },
];

const projects3 = [
  {
    name: "Typing Game Application",
    description: "React | JavaScript | SCSS",
    image: typingGame,
    link: "https://nyrellcl.github.io/typing-game/",
  },
  {
    name: "To-do Application",
    description: "React | JavaScript | SCSS ",
    image: toDo,
    link: "https://nyrellcl.github.io/todo-app/",
  },
];
const projects4 = [
  {
    name: "Loopstudios Website",
    description: "HTML | SCSS | JavaScript",
    image: loop,
    link: "https://stalwart-puffpuff-88d009.netlify.app",
  },
  {
    name: "Advice Generator Applicaton",
    description: "HTML | SCSS | JavaScript | API",
    image: advice,
    link: "https://nyrellcl.github.io/advice-generator/",
  },
];

function Projects({ button }: ButtonProps) {
  const projectsParallax = useRef<IParallax>(null);

  const scrollToProjects = (to: number) => {
    if (projectsParallax.current) {
      projectsParallax.current?.scrollTo(to);
    }
  };
  return (
    <>
      {button}
      <Parallax ref={projectsParallax} pages={4} horizontal>
        <ProjectPage
          offset={0}
          onPageClick={() => scrollToProjects(1)}
          projects={projects1}
          gradient="purple"
        />
        <ProjectPage
          offset={1}
          onPageClick={() => scrollToProjects(2)}
          projects={projects2}
          gradient="teal"
        />
        <ProjectPage
          offset={2}
          onPageClick={() => scrollToProjects(3)}
          projects={projects3}
          gradient="pastel-purple"
        />
        <ProjectPage
          offset={3}
          onPageClick={() => scrollToProjects(0)}
          projects={projects4}
          gradient="pink"
        />
      </Parallax>
    </>
  );
}

export default Projects;
