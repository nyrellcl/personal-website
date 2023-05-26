import React, { useState, useRef, useEffect } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

import data from "@/data";

function Skills() {
  const [open, setOpen] = useState<boolean>(false);
  const skillCardRef = useRef<any>(null);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "skill-btn", background: "hsl(192, 60%, 50%)" },
    to: {
      size: open ? "skill-btn-full" : "skill-btn",
      background: open ? "transparent" : "hsl(192, 60%, 50%)",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  useEffect(() => {
    const skillAnimateOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // when element is >50% visible in the viewport
    };

    //intersection observer used when a target element in this case the article skill card, 
    //intersects the document's viewport
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setOpen(true);
        }
      });
    };

    const observer = new IntersectionObserver(callback, skillAnimateOptions);
    observer.observe(skillCardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <article className="skill-card" ref={skillCardRef}>
        <h3>Working with...</h3>
        <animated.button
          className={open ? "" : "skill-btn"}
          type="button"
          style={{ ...rest, width: size, height: "size", border: "none" }}
          onClick={() => setOpen(!open)}
        >
          {" "}
          <animated.div className="container">
            {transition((style, item) => (
              <animated.span
                className="item"
                style={{ ...style, background: item.bgColor }}
              >
                {item.name}
              </animated.span>
            ))}
          </animated.div>
        </animated.button>
      </article>
    </>
  );
}

export default Skills;
