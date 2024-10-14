import React, { useEffect, useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";

export default function Run2() {
  const { scrollYProgress } = useScroll();
  const ref2 = useRef();
  const inview = useInView(ref2, { amount: 1 });
  const ref3 = useRef(inview);
  useEffect(() => {
    ref3.current = inview;
    const qw = ref2.current.getBoundingClientRect();
    console.log(qw);
  }, [inview]);
  useEffect(() => {
    scrollYProgress.onChange((val) => {
      if (ref3.current) {
        console.log("viewing");
      }
    });
  }, [scrollYProgress]);
  return (
    <>
      <div
        style={{
          height: "2500px",
          width: "100vw",
          position: "relative",
        }}
      >
        <motion.div
          layout
          ref={ref2}
          style={{
            height: "400px",
            width: " 300px",
            backgroundColor: "gray",
            position: "relative",
            top: "30%",
            left: "40%",
          }}
        >
          <span style={{ display: "block", marginTop: "20px" }}>hello</span>
          <span style={{ display: "block", marginTop: "20px" }}>hell</span>
          <span style={{ display: "block", marginTop: "20px" }}>hel</span>
          <span style={{ display: "block", marginTop: "20px" }}>he</span>
        </motion.div>
      </div>
    </>
  );
}
