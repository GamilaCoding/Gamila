"use client"

import type React from "react"

import Link from "next/link"
import AnimatedButton from "./animated-button"
import AnimatedText from "./animated-text"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="text-2xl font-serif">
        <Link href="/" className="text-gray-800">
          GA
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
          <AnimatedText>Start</AnimatedText>
        </Link>
        {isHomePage ? (
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <AnimatedText delay={0.1}>About</AnimatedText>
          </a>
        ) : (
          <Link href="/#about" className="text-gray-600 hover:text-gray-900 transition-colors">
            <AnimatedText delay={0.1}>About</AnimatedText>
          </Link>
        )}
        <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">
          <AnimatedText delay={0.2}>Projects</AnimatedText>
        </Link>



 {isHomePage ? (
          <a
            href="#reviews"
            onClick={(e) => handleScroll(e, "reviews")}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <AnimatedText delay={0.25}>Reviews</AnimatedText>
          </a>
        ) : (
          <Link href="/#reviews" className="text-gray-600 hover:text-gray-900 transition-colors">
            <AnimatedText delay={0.25}>Reviews</AnimatedText>
          </Link>
        )}

        
        {isHomePage ? (
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <AnimatedText delay={0.3}>Contact</AnimatedText>
          </a>
        ) : (
          <Link href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
            <AnimatedText delay={0.3}>Contact</AnimatedText>
          </Link>
        )}
        <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </Link>
      </div>

      <div>
        {isHomePage ? (
          <AnimatedButton href="#contact">Contact</AnimatedButton>
        ) : (
          <Link href="/#contact">
            <AnimatedButton href="/#contact">Contact</AnimatedButton>
          </Link>
        )}
      </div>
    </nav>
  )
}

