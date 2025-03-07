"use client"

import type React from "react"

import { Calendar } from "lucide-react"
import { motion } from "framer-motion"

export default function AnimatedButton({ href = "#contact", children }: { href: string; children: React.ReactNode }) {
  const handleScroll = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const yOffset = -80 // تعديل هذه القيمة بناءً على ارتفاع شريط التنقل
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  // إذا كان الرابط يبدأ بـ #، فسنستخدم التمرير السلس
  const isAnchor = href.startsWith("#")

  return (
    <motion.div
      className="group relative inline-flex items-center gap-2 px-6 py-3 overflow-hidden rounded-full cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      onClick={isAnchor ? handleScroll : undefined}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500" />

      {/* Animated shine effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>

      {/* Content */}
      <Calendar className="relative z-10 h-4 w-4 text-white" />
      <span className="relative z-10 text-white font-medium">{children}</span>
    </motion.div>
  )
}

