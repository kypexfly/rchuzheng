"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

export const cardAnimate = {
  offscreen: {
    opacity: 0,
    translateX: -50,
  },
  onscreen: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.3,
    },
  },
};

interface StaggerAnimateInViewProps extends React.HTMLAttributes<HTMLElement> {}

export const StaggerAnimateInView = ({ children, className }: StaggerAnimateInViewProps) => {
  return (
    <motion.div
      className={className}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.1, type: "just" }}
    >
      {children}
    </motion.div>
  );
};
