import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Image, { StaticImageData } from "next/image";
import { CgArrowLongRightC } from "react-icons/cg";
import coffee from "../assets/coffee.png";
import arch from "../assets/arch-studio.png";
import myTeam from "../assets/myteam.png";
import budgetWeb from "../assets/react-challenge.png";
import typingGame from "../assets/typing-game.png";
import singlePage from "../assets/single-page.png";
import githubSearch from "../assets/github-search.png";
import toDo from "../assets/todo.png";

interface ProjectProps {
  offset: number;
  onPageClick: () => void;
  projects: Project[];
  gradient: string
}

interface Project {
  name: string;
  description: string;
  image: StaticImageData;
}

const ProjectPage = ({ offset, onPageClick, projects, gradient }: ProjectProps) => (
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
        <button type="button" className="project-btn" onClick={onPageClick}><CgArrowLongRightC/></button>
        <article className="projects-section__container">
          {projects.map((project) => (
            <article key={project.name} className="projects-section__card">
              <Image
                src={project.image}
                alt={project.name}
                className="projects-section__images"
              />
              <h3>{project.name}</h3>
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
    name: "Financial Resource Website",
    description: "React | NextJS | TypeScript | SASS | Git",
    image: budgetWeb,
  },
  {
    name: "Github User Search",
    description: "React | TypeScript  | SASS | Github API",
    image: githubSearch,
  },
];

const projects2 = [
  {
    name: "To-do Application",
    description: "React | JavaScript | SASS ",
    image: toDo,
  },
  {
    name: "My Team Website",
    description: "HTML | SASS | JavaScript",
    image: myTeam,
  },
];

const projects3 = [
  {
    name: "Typing Game Application",
    description: "React | JavaScript | SASS",
    image: typingGame,
  },
  {
    name: "Coffeeroasters Website",
    description: "React | React Router | JavaScript | SASS",
    image: coffee,
  },
];
const projects4 = [
  {
    name: "Arch Studio Website",
    description: "TailWind | JavaScript",
    image: arch,
  },
  { name: "Single Page Design", description: "HTML | SASS ", image: singlePage },
];

function Projects() {
  const projectsParallax = useRef<IParallax>(null);

  const scrollToProjects = (to: number) => {
    if (projectsParallax.current) {
      projectsParallax.current?.scrollTo(to);
    }
  };
  return (
    <section>
      <Parallax ref={projectsParallax} pages={4} horizontal>
        <ProjectPage
          offset={0}
          onPageClick={() => scrollToProjects(1)}
          projects={projects1}
          gradient="pink"
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
          gradient="cyan"
        />
         <ProjectPage
          offset={3}
          onPageClick={() => scrollToProjects(0)}
          projects={projects4}
          gradient="purple"
        /> 
      </Parallax>
    </section>
  );
}

export default Projects;
