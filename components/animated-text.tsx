"use client"

import type React from "react"

import { motion } from "framer-motion"

export default function AnimatedText({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.span className="relative inline-block group cursor-pointer" initial="initial" whileHover="hover">
      <motion.span className="relative z-10 inline-block">{children}</motion.span>
      <motion.span
        className="absolute inset-0 h-[2px] bg-current top-1/2 -translate-y-1/2 origin-left"
        variants={{
          initial: { scaleX: 0 },
          hover: {
            scaleX: 1,
            transition: {
              duration: 0.3,
              delay: delay,
              ease: "easeInOut",
            },
          },
        }}
      />
    </motion.span>
  )
}

