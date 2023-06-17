"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export function WrapperTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="min-h-screen container py-6"
    >
      {children}
    </motion.div>
  );
}
