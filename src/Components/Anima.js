import React, { useEffect } from "react";
import { inView, motion, spring, useAnimate, useInView } from "framer-motion";
import { useLocation } from "react-router-dom";
export default function Anima({ children }) {
  const loc = useLocation();
  const [state, animate] = useAnimate();
  const view = useInView(state, { once: false });

  useEffect(() => {
    animate(
      state.current,
      { scale: 0.7, opacity: 0.5 },
      { type: "spring", duration: 0.8 }
    );
  }, []);
  return (
    <motion.div ref={state} layout key={loc}>
      {children}
    </motion.div>
  );
}
