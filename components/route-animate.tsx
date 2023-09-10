"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export function RouteAnimate({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.15 } }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ type: "just" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
