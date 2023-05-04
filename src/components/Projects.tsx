import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

interface ProjectProps {
  offset: number;
  onClick: () => void;
}

const ProjectPage = ({ offset, onClick }: ProjectProps) => (
  <>
    <ParallaxLayer
      offset={offset}
      speed={0.2}
      onClick={onClick}
    ></ParallaxLayer>

    <ParallaxLayer
      offset={offset}
      speed={0.6}
      onClick={onClick}
    ></ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </ParallaxLayer>
  </>
);

function Projects() {
  const projectsParallax = useRef<IParallax>(null);

  const scrollToProjects = (to: number) => {
    if (projectsParallax.current) {
      projectsParallax.current.scrollTo(to);
    }
  };
  return (
    <div>
      <Parallax ref={projectsParallax} pages={3} horizontal>
        <ProjectPage offset={0} onClick={() => scrollToProjects(1)} />
        <ProjectPage offset={1} onClick={() => scrollToProjects(2)} />
        <ProjectPage offset={2} onClick={() => scrollToProjects(0)} />
      </Parallax>
    </div>
  );
}

export default Projects;
