"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function VerticalText() {
  const pathname = usePathname()
  const isProjects = pathname === "/projects"

  // Different text for different pages
  const text = isProjects ? "PROJECTS" : "GAMILA"
  const letters = text.split("")

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:block z-50">
      <div className="flex flex-col items-center space-y-6">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="text-4xl font-serif text-gray-800 hover:text-blue-600 transition-colors cursor-default"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            whileHover={{ scale: 1.1 }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

