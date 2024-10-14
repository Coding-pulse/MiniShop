import React, { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import style from "./Menu.module.css";
export default function Menu() {
  const [ref1, animate] = useAnimate();
  const nav = useNavigate();
  useEffect(() => {
    for (let i = 0; i < ref1.current.children.length; i++) {
      ref1.current.children[i].addEventListener("mouseenter", () => {
        animate(
          ref1.current.children[i],
          { boxShadow: ".5rem .5rem 2rem .5rem gray" },
          { duration: 1.3 }
        );
      });

      ref1.current.children[i].addEventListener("mouseleave", () => {
        animate(
          ref1.current.children[i],
          { boxShadow: "none" },
          { duration: 1.3 }
        );
      });
    }
  }, []);
  return (
    <>
      <motion.div ref={ref1} className={style.menu}>
        <div className={style.section}>Shoe</div>
        <div className={style.section}>Cap</div>
        <div className={style.section}>Jersey</div>
        <div className={style.section}>Bag</div>
      </motion.div>
    </>
  );
}
