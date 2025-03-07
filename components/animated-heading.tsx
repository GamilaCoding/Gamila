"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function AnimatedHeading() {
  const letters = "GAMILA".split("")
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // محاكاة وقت التحميل
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <h1 className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-wider text-gray-800 mb-8 md:mb-16 flex justify-center overflow-hidden">
      {isLoading ? (
        // تأثير التحميل
        <motion.div className="flex items-center" initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            className="mr-2"
          >
            Loading
          </motion.span>
          <motion.div className="flex space-x-1">
            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                className="w-2 h-2 bg-blue-600 rounded-full"
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  delay: dot * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      ) : (
        // تأثير ظهور الحروف
        letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block mx-1"
            initial={{ opacity: 0, y: 50, rotateX: 90 }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.1,
              },
            }}
            whileHover={{
              scale: 1.2,
              color: "#3B82F6",
              transition: { duration: 0.2 },
            }}
          >
            {letter}
          </motion.span>
        ))
      )}
    </h1>
  )
}

