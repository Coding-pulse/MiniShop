import React, { useEffect, useRef, useState } from "react";
import style from "./Preload.module.css";
import { useAnimate, motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Preload() {
  const arr = ["Hello", "Welcome", "My Shop"];
  const [ref1, animate] = useAnimate();
  const [state, update] = useState(false);

  useEffect(() => {
    const run = async () => {
      for (let i = 0; i < arr.length; i++) {
        if (i !== arr.length - 1) {
          ref1.current.innerText = arr[i];
          await animate(ref1.current, { opacity: 1 }, { duration: 1.5 });
          await animate(ref1.current, { opacity: 0 }, { duration: 1.5 });
        } else {
          ref1.current.innerText = arr[i];
          await animate(ref1.current, { opacity: 1 }, { duration: 1.5 });

          await animate(
            ref1.current.nextElementSibling,
            { opacity: 1, visibility: "visible" },
            { duration: 2 }
          );
        }
      }
    };
    if (state === false) {
      update(true);
      run();
    }
  }, [state]);

  return (
    <div className={style.box}>
      <motion.div ref={ref1} className={style.top1}></motion.div>

      <Link
        className={style.top2}
        to={{ pathname: "/shop/shoe", state: { data: state } }}
      >
        <span>Shop now!</span>
      </Link>
    </div>
  );
}
