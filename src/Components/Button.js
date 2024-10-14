import React from "react";
import style from "./Button.module.css";
import { useAnimate, motion } from "framer-motion";
export default function Button(props) {
  const [ref1, animate] = useAnimate();
  const change = () => {
    animate(
      ref1.current,
      {
        boxShadow: "none",
        backgroundColor: props.content["btn-color"],
      },
      { duration: 0.3, type: "backInOut" }
    );
    animate(
      ref1.current.children[0],
      { color: "White" },
      { duration: 0.3, type: "backInOut" }
    );
  };
  const end = () => {
    animate(
      ref1.current,
      {
        boxShadow: `inset 0.5rem 0.2rem 0.3rem 0.2rem rgb(238, 236, 236),
             inset -4px -1px 1px 1px rgb(255, 255, 255)`,
        backgroundColor: "rgb(224, 234, 241)",
      },
      { duration: 0.3, type: "backInOut" }
    );

    animate(
      ref1.current.children[0],
      { color: "black" },
      { duration: 0.3, type: "backInOut" }
    );
  };
  return (
    <motion.div
      ref={ref1}
      className={style.btn}
      onHoverStart={change}
      onHoverEnd={end}
    >
      <span className={style.turn}>{props.text}</span>
    </motion.div>
  );
}
