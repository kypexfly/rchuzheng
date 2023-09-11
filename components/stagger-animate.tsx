"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

export const fadeInLeft = {
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

export const fadeInRight = {
  offscreen: {
    opacity: 0,
    translateX: 50,
  },
  onscreen: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const fadeInTop = {
  offscreen: {
    opacity: 0,
    translateY: -50,
  },
  onscreen: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.3,
    },
  },
};

interface StaggerAnimateInViewProps extends HTMLMotionProps<"div"> {}

export const StaggerAnimateInView = ({
  initial,
  whileInView,
  viewport,
  transition,
  children,
  className,
  ...props
}: StaggerAnimateInViewProps) => {
  return (
    <motion.div
      className={className}
      initial={initial || "offscreen"}
      whileInView={whileInView || "onscreen"}
      viewport={viewport || { once: true, amount: 0.3 }}
      transition={transition || { staggerChildren: 0.15, type: "just" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
