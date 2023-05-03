import React, { useState } from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
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

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "50%", background: "hotpink" },
    to: {
      size: open ? "100%" : "50%",
      background: open ? "transparent" : "hotpink",
    },
  });

  const transApi = useSpringRef()
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ])

  return (
    <section className="skill-section">
      <article className="skill-section__card">
      <animated.button type="button"
        style={{ ...rest, width: size, height: size }}
        className="container"
        onClick={() => setOpen(!open)}>
        {transition((style, item) => (
          <animated.span
            className="item"
            style={{ ...style, background: item.svg }}>
                {item.name}
            </animated.span>
        ))}
      </animated.button>
      </article>
    </section>
  );
}

export default Skills;
