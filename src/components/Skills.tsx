import React, { useState } from "react";
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

  return (
    <>
      <article className="skill-card">
      <h3>Working with...</h3>
        <animated.button
        className={open ? "" : "skill-btn"}
          type="button"
          style={{ ...rest, width: size, height: "size",  border: "none" }}
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
