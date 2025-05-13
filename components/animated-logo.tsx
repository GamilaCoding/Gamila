"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AnimatedLogo() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative flex justify-center items-center w-full aspect-square max-w-md mx-auto">
      {/* Animated glow effect */}
      <motion.div
        className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-50 blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Logo container */}
      <motion.div
        className="relative z-10 w-4/5 h-4/5"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full relative">
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <Image
              src="https://imgur.com/a/xAKdRVm"
              alt="GAMILA Developer Logo"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

