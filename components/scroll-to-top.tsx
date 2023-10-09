"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Icons } from "./icons";
import clsx from "clsx";

const ScrollToTop = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(true);
  const height = useRef<number>();

  useEffect(() => {
    height.current = window.innerHeight;
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const halfViewport = Number(height?.current) * 0.5;
    if (latest > halfViewport) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={goToTop}
      aria-label="Go to top"
      className={clsx("fixed bottom-5 right-5 rounded-full border p-1 bg-secondary opacity-0")}
      variants={{
        visible: {
          opacity: 1,
        },
        hidden: {
          opacity: 0,
        },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <Icons.up />
    </motion.button>
  );
};

export default ScrollToTop;
