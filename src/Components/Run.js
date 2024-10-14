import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimate,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
} from "framer-motion";

export default function Run() {
  const { scrollYProgress, scrollY } = useScroll();
  const [ref, animate] = useAnimate();
  const ref2 = useRef();

  const inview = useInView(ref2, { threshold: 1 });
  const x = useMotionValue(0);
  useEffect(() => {
    scrollYProgress.onChange((val) => {
      ref.current.style.scale = val * 3;
      animate(
        ref.current,
        { scale: val * 2 },
        { duration: 0, type: "circIn", stiffness: 2, bounce: 0.4 }
      );
      console.log(ref.current.style.scale);
    });
  }, [scrollYProgress]);
  const cha = (vla) => {
    console.log(vla);
  };
  return (
    <>
      <div style={{ height: "2600px", width: "100%" }}>
        <motion.div
          ref={ref}
          layout
          style={{
            position: "fixed",
            backgroundColor: "red",
            height: "300px",
            width: "300px",
            marginTop: "20%",

            marginLeft: "20%",
            transformOrigin: "50%",
          }}
          onChange={cha}
          transition={{ type: "spring" }}
        ></motion.div>
      </div>
    </>
  );
}
