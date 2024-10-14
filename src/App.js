import { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  animate,
  AnimatePresence,
  delay,
  easeIn,
  inView,
  LayoutGroup,
  motion,
  useAnimate,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useAnimation,
} from "framer-motion";
import { style } from "framer-motion/client";
import Page1 from "./Components/Page1";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Page2 from "./Components/Page2";

function App() {
  const [state, update] = useState(true);
  const [sta, anima] = useAnimate();
  const [lock, upd] = useState(false);

  const tap = async () => {
    if (state) {
      if (lock == false) {
        upd(true);
        update(false);
        sta.current.disabled = true;
        anima(
          sta.current,
          { scale: 1, backgroundColor: "black" },
          { duration: 1.2, type: "spring", bounce: 0.5 }
        );

        anima(
          sta.current.children[0],
          { rotate: -50, y: 10, x: -7 },
          { duration: 1.2, type: "spring", bounce: 0.6 }
        );

        anima(
          sta.current.children[1],
          { opacity: 0 },
          { duration: 0.2, type: "spring", bounce: 0.5 }
        );

        anima(
          sta.current.children[2],
          { rotate: 50, y: -6, x: 7 },
          { duration: 1.2, type: "spring", bounce: 0.6 }
        );
        await anima(
          sta.current.nextElementSibling,
          { x: "0%" },
          { duration: 0.4, type: "circIn", delay: 0.6 }
        );
        await anima(
          sta.current,
          { x: 265 },
          { duration: 0.9, type: "circIn", delay: 0.1 }
        );

        await anima(
          sta.current.nextElementSibling.children[0],
          { y: 6, opacity: 1 },
          { duration: 0.8, type: "circIn" }
        );
        await anima(
          sta.current.nextElementSibling.children[1],
          { y: 6, opacity: 1 },
          { duration: 0.8, type: "circIn" }
        );
        await anima(
          sta.current.nextElementSibling.children[2],
          { y: 6, opacity: 1 },
          { duration: 0.8, type: "circIn" }
        );
        upd(false);
      }
    } else {
      if (lock == false) {
        upd(true);
        update(true);
        await anima(
          sta.current.nextElementSibling.children[2],
          { y: 0, opacity: 0 },
          { duration: 0.8, type: "circIn" }
        );

        await anima(
          sta.current.nextElementSibling.children[1],
          { y: 0, opacity: 0 },
          { duration: 0.8, type: "circIn" }
        );

        await anima(
          sta.current.nextElementSibling.children[0],
          { y: 0, opacity: 0 },
          { duration: 0.8, type: "circIn" }
        );

        await anima(
          sta.current,
          { x: 0 },
          { duration: 0.9, type: "circIn", delay: 0.1 }
        );
        anima(
          sta.current,
          { scale: 1, backgroundColor: "rgb(83, 4, 83)" },
          { duration: 1.2, type: "spring", bounce: 0.5 }
        );

        anima(
          sta.current.children[0],
          { rotate: 0, y: 0, x: 0 },
          { duration: 1.2, type: "spring", bounce: 0.6 }
        );

        anima(
          sta.current.children[1],
          { opacity: 1 },
          { duration: 0.2, type: "spring", bounce: 0.5 }
        );

        anima(
          sta.current.children[2],
          { rotate: 0, y: 0, x: 0 },
          { duration: 1.2, type: "spring", bounce: 0.6 }
        );

        await anima(
          sta.current.nextElementSibling,
          { x: "-100%" },
          { duration: 0.4, type: "circIn", delay: 0.6 }
        );
        upd(false);
      }
    }
  };

  const [ref2, animate2] = useAnimate();
  const view = useInView(ref2);
  const part = () => {
    if (view) console.log("yes!");
    window.addEventListener("scroll", (event) => {
      console.log("scrolling");
    });
  };
  /* inView(
    ref2.current,
    () => {
      console.log(ref2.current.style.transform);
    },
    { amount: 1 }
  );*/
  const check2 = () => {
    console.log(window.getComputedStyle(ref2.current).transform);
    console.log(ro.get());
  };
  var ro = useMotionValue(0);
  useMotionValueEvent(ro, "change", (latest) => {
    console.log(latest);
  });
  return (
    <>
      <div className="box1">
        <motion.div
          layout
          className="cir"
          ref={sta}
          onTap={tap}
          initial={{ x: 0 }}
        >
          <div className="cir1"></div>
          <div className="cir1"></div>
          <div className="cir1"></div>
        </motion.div>
        <motion.div className="vir" layout initial={{ x: "-100%" }}>
          <motion.div layout initial={{ opacity: 0, y: -4 }}>
            Home
          </motion.div>
          <motion.div layout initial={{ opacity: 0, y: -4 }}>
            about
          </motion.div>
          <motion.div layout initial={{ opacity: 0, y: -4 }}>
            store
          </motion.div>
        </motion.div>
      </div>

      <motion.h1
        ref={ref2}
        layout
        initial={{ transform: "translate(0%)" }}
        animate={{ transform: [`translate(${ro.get()}%)`, "translate(1000%)"] }}
        transition={{ duration: 4, stiffness: 100, repeat: 5 }}
        style={{ position: "absolute" }}
        onMouseEnter={check2}
      >
        Moving!!!
      </motion.h1>
      <p>
        Paragraphs are the building blocks of papers. Many students define
        paragraphs in terms of length: a paragraph is a group of at least five
        sentences, a paragraph is half a page long, etc. In reality, though, the
        unity and coherence of ideas among sentences is what constitutes a
        paragraph. A paragraph is defined as “a group of sentences or a single
        sentence that forms a unit” (Lunsford and Connors 116). Length and
        appearance do not determine whether a section in a paper is a paragraph.
        For instance, in some styles of writing, particularly journalistic
        styles, a paragraph can be just one sentence long. Ultimately, a
        paragraph is a sentence or group of sentences that support one main
        idea. In this handout, we will refer to this as the “controlling idea,”
        because it controls what happens in the rest of the paragraph. How do I
        decide what to put in a paragraph? Before you can begin to determine
        what the composition of a particular paragraph will be, you must first
        decide on an argument and a working thesis statement for your paper.
        What is the most important idea that you are trying to convey to your
        reader? The information in each paragraph must be related to that idea.
        In other words, your paragraphs should remind your reader that there is
        a recurrent relationship between your thesis and the information in each
        paragraph. A working thesis functions like a seed from which your paper,
        and your ideas, will grow. The whole process is an organic one—a natural
        progression from a seed to a full-blown paper where there are direct,
        familial relationships between all of the ideas in the paper. The
        decision about what to put into your paragraphs begins with the
        germination of a seed of ideas; this “germination process” is better
        known as brainstorming. There are many techniques for brainstorming;
        whichever one you choose, this stage of paragraph development cannot be
        skipped. Building paragraphs can be like building a skyscraper: there
        must be a well-planned foundation that supports what you are building.
        Any cracks, inconsistencies, or other corruptions of the foundation can
        cause your whole paper to crumble. So, let’s suppose that you have done
        some brainstorming to develop your thesis. What else should you keep in
        mind as you begin to create paragraphs? Every paragraph in a paper
        should be: Unified: All of the sentences in a single paragraph should be
        related to a single controlling idea (often expressed in the topic
        sentence of the paragraph). Clearly related to the thesis: The sentences
        should all refer to the central idea, or thesis, of the paper (Rosen and
        Behrens 119). Coherent: The sentences should be arranged in a logical
        manner and should follow a definite plan for development (Rosen and
        Behrens 119). Well-developed: Every idea discussed in the paragraph
        should be adequately explained and supported through evidence and
        details that work together to explain the paragraph’s controlling idea
        (Rosen and Behrens 119). How do I organize a paragraph? There are many
        different ways to organize a paragraph. The organization you choose will
        depend on the controlling idea of the paragraph. Below are a few
        possibilities for organization, with links to brief examples: Narration:
        Tell a story. Go chronologically, from start to finish. (See an
        example.) Description: Provide specific details about what something
        looks, smells, tastes, sounds, or feels like. Organize spatially, in
        order of appearance, or by topic. (See an example.) Process: Explain how
        something works, step by step. Perhaps follow a sequence—first, second,
        third. (See an example.) Classification: Separate into groups or explain
        the various parts of a topic. (See an example.) Illustration: Give
        examples and explain how those examples support your point. (See an
        example in the 5-step process below.) Illustration paragraph: a 5-step
        example From the list above, let’s choose “illustration” as our
        rhetorical purpose. We’ll walk through a 5-step process for building a
        paragraph that illustrates a point in an argument. For each step there
        is an explanation and example. Our example paragraph will be about human
        misconceptions of piranhas. Step 1. Decide on a controlling idea and
        create a topic sentence Paragraph development begins with the
        formulation of the controlling idea. This idea directs the paragraph’s
        development. Often, the controlling idea of a paragraph will appear in
        the form of a topic sentence. In some cases, you may need more than one
        sentence to express a paragraph’s controlling idea. Controlling idea and
        topic sentence — Despite the fact that piranhas are relatively harmless,
        many people continue to believe the pervasive myth that piranhas are
        dangerous to humans. Step 2. Elaborate on the controlling idea
      </p>
    </>
  );
}

export default App;
