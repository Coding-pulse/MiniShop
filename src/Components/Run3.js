import React, { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { RiGoogleLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { PiInstagramLogoThin } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa6";
import style from "./Run3.module.css";
import { IoMdDownload } from "react-icons/io";
import purple from "../pictures/purple.png";
import Button from "./Button";
import Menu from "./Menu";
import { useParams } from "react-router-dom";
export default function Run3() {
  const { name } = useParams();

  const content = {
    shoe: {
      "box-color": "rgb(224, 234, 241)",
      "bt-color": "rgb(59, 76, 150)",
      "bt-bshadow-color": "rgb(47, 52, 56)",
      "btn-color": "rgb(49, 35, 172)",
      "btn-animate-color": "rgb(204, 0, 255)",
      "share-color": "rgb(49, 35, 172)",
      "shareele-animate-color": "rgb(255, 102, 255)",
      "shareele-color": "rgb(49, 35, 172)",
      "top2A-h2-color": "rgb(49, 35, 172)",
      heading: "Nike LeBron 17 'Bron2K' Purple",
      price: "15,095",
      para: `The first GE shoe launch will be a flooded Purple Nike LeBron 17.
      The special edition colorway features the 2K logo and NBA 2k20's WELCOME 
      TO THE NEXT tagline over iconic Laker's Purple.To unlock this GE,players 
       must upskill their MyPLAYER avatar to 98. eclipsing LeBron's in-game rating of 97.`,
    },
  };
  const obj = content[name];
  console.log(obj);
  const btnarr = [
    <RiGoogleLine />,
    <CiTwitter />,
    <PiInstagramLogoThin />,
    <FaFacebook />,
  ];
  const [ref1, animate] = useAnimate();
  const [ref3, animate3] = useAnimate();
  const hove = () => {
    animate(
      ref1.current,
      { backgroundColor: obj["btn-animate-color"] },
      { duration: 0.8 }
    );

    animate(
      ref1.current.children[0],
      { scale: 1.4, y: -6 },
      { duration: 0.5, type: "ease" }
    );

    animate(
      ref1.current.children[1],
      { scale: 1.4, y: 0 },
      { duration: 0.5, type: "ease" }
    );
  };

  const hoveof = () => {
    animate(
      ref1.current.children[1],
      { scale: 1, y: 1 },
      { duration: 0.5, type: "ease" }
    );

    animate(
      ref1.current.children[0],
      { scale: 1, y: 0 },
      { duration: 0.5, type: "ease" }
    );
    animate(
      ref1.current,
      { backgroundColor: obj["btn-color"] },
      { duration: 0.8 }
    );
  };
  const [ref2, anim] = useAnimate();
  const [state2, upd2] = useState(0);
  useEffect(() => {
    if (state2 === 0) {
      for (let i = 0; i < ref2.current.children.length; i++) {
        ref2.current.children[i].addEventListener("mouseenter", () => {
          anim(
            ref2.current.children[i],
            {
              scale: 1.2,
              x: "10%",
              backgroundColor: obj["shareele-animate-color"],
            },
            { duration: 0.3, type: "circIn" }
          );
        });

        ref2.current.children[i].addEventListener("mouseleave", () => {
          anim(
            ref2.current.children[i],
            { scale: 1, x: 0, backgroundColor: obj["shareele-color"] },
            { duration: 0.3, type: "spring" }
          );
        });
      }
      upd2(state2 + 1);
    }
  }, [state2]);

  const arr = ["S", "H", "A", "R", "E"];
  useEffect(() => {
    animate3(
      ref3.current.children[0],
      { opacity: 1, x: "0%" },
      { duration: 1.5, type: "spring", bounce: ".7" }
    );
    animate3(
      ref3.current.children[1],
      { opacity: 1, x: "0%" },
      { duration: 1.5, type: "spring", bounce: ".7" }
    );

    animate3(
      ref3.current.children[2],
      { opacity: 1, y: "0%" },
      { duration: 1.5, type: "tween" }
    );
  }, []);

  return (
    <>
      <div className={style.box} style={{ backgroundColor: obj["box-color"] }}>
        <div className={style.nav}>
          <Menu />

          <motion.div
            className={style.bt}
            style={{ backgroundColor: obj["bt-color"] }}
            whileHover={{ x: "-4%" }}
            transition={{
              type: "spring",
              duration: 0.7,
              bounce: 0.7,
              stiffness: 250,
            }}
          >
            <span>FREEBIE</span>
            <span style={{ fontSize: "1rem" }}>
              <IoMdDownload />
            </span>
          </motion.div>
        </div>

        <div className={style.top}>
          {/*    <div className={style.top1}></div> */}
          <div className={style.top2}>
            <motion.img
              className={style.img}
              src={purple}
              initial={{ opacity: 0, y: "-20%", transform: "rotate(-10deg)" }}
              animate={{ opacity: 1, y: "0%", transform: "rotate(-21deg)" }}
              transition={{ type: "circIn", duration: 1.5 }}
            />

            <motion.div
              className={style.btn}
              style={{ backgroundColor: obj["btn-color"] }}
              onMouseEnter={hove}
              onMouseLeave={hoveof}
              ref={ref1}
            >
              <div className={style.btn1}></div>
              <div className={style.btn2}></div>
            </motion.div>
            <motion.div
              className={style.share}
              ref={ref2}
              style={{ backgroundColor: obj["share-color"] }}
            >
              {arr.map((item, index) => (
                <motion.span
                  key={index}
                  className={style.shareele}
                  style={{ backgroundColor: obj["shareele-color"] }}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

            <motion.div ref={ref3} className={style.top2A}>
              <motion.h1 initial={{ opacity: 0, x: "-4%" }}>
                {obj["heading"]}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, x: "4%" }}
                style={{ color: obj["top2A-h2-color"] }}
              >
                &#8377; {obj["price"]} /-
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: "20%" }}>{obj.para}</motion.p>
              <div className={style.topbutton}>
                {btnarr.map((item, index) => (
                  <Button key={index} text={item} content={obj} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
