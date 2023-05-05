import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Image, { StaticImageData } from "next/image";
import coffee from "../assets/coffee.png"
import arch from "../assets/arch-studio.png";
import myTeam from "../assets/myteam.png";
import budgetWeb from "../assets/react-challenge.png";
import typingGame from "../assets/typing-game.png";
import singlePage from "../assets/single-page.png"

interface ProjectProps {
  offset: number;
  onPageClick: () => void;
  projects: Project[]
}

interface Project {
  name: string
  description: string
  image: StaticImageData
}

const ProjectPage = ({ offset, onPageClick, projects }: ProjectProps) => (
  <>
    <ParallaxLayer
      offset={offset}
      speed={0.2}
      onClick={onPageClick}
    ></ParallaxLayer>

    <ParallaxLayer
      offset={offset}
      speed={0.6}
      onClick={onPageClick}
    ></ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.5}>
      <section className="projects-section">
        <h2>My Work</h2>
        <article className="projects-section__container">
      {projects.map((project)=>(
        <article key={project.name} className="projects-section__card">
          <Image src={project.image} alt={project.name} className="projects-section__images"/>
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
  { name: 'Financial Resource Website', description: 'Description for Project 1', image: budgetWeb },
  { name: 'Coffeeroasters Website', description: 'Description for Project 2', image: coffee }
]

const projects2 = [
  { name: 'Arch Studio Website', description: 'Description for Project 3', image: arch },
  { name: 'My Team Website', description: 'Description for Project 4', image: myTeam }
]

const projects3 = [
  { name: 'Typing Game Application', description: 'Description for Project 5', image: typingGame },
  { name: 'Single Page Design', description: 'Description for Project 6', image: singlePage }
]


function Projects() {
  const projectsParallax = useRef<IParallax>(null);

  const scrollToProjects = (to: number) => {
    if (projectsParallax.current) {
      projectsParallax.current?.scrollTo(to);
    }
  };
  return (
    <section>
      <Parallax ref={projectsParallax} pages={3} horizontal>
        <ProjectPage offset={0} onPageClick={() => scrollToProjects(1)} projects={projects1} />
        <ProjectPage offset={1} onPageClick={() => scrollToProjects(2)} projects={projects2}/>
        <ProjectPage offset={2} onPageClick={() => scrollToProjects(0)} projects={projects3}/>
      </Parallax>
    </section>
  );
}

export default Projects;
