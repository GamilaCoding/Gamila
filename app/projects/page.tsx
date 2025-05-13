"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import VerticalText from "@/components/vertical-text"
import { describe } from "node:test"
import { Description } from "@radix-ui/react-toast"

const projects = [
  {
    title: "SaaS ai",
    category: "SaaS Dashboard",
    description: "",
    image: "",
    link: "",
  },
  {
    title: "Nike E-commerce",
    category: "Frontend Developer",
    description:
      "A specialized e-commerce platform for Nike store, featuring a bilingual interface and mobile-responsive design",
    image: "https://i.imgur.com/87PKsXk.png",
    link: "https://nike-store-silk-mu.vercel.app",
  },
  {
    title: "Motkamel - E-commerce Platform",
    category: "Full Stack Development",
    description: "A comprehensive e-commerce solution with advanced features and mobile-first approach Tech Used: React.js, CSS, JavaScript, Bootstrap, Mateiral MUI ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-51eE6SSKpac20uD3jcjzsF2amtVo8A.png",
    link: "https://www.motkaml.com/home",
  },
  {
    title: "WASILA website",
    category: "Frontend Developer",
    description: "Tech Used: HTML, CSS, JavaScript, Bootstrap, Next.js, framer motion I built a responsive logistics website with interactive elements that improved the user experience.",
    image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pink%20minimal%20new%20website%20instagram%20post-8l0pEwbKORV8fbJ6pDRbAZxbg3QkCq.png",
    link: "https://wasila.vercel.app/",
  },
    {
    title: "Travel website",
    category: "Frontend Developer",
    description:
      "Deploy website for travelling, featuring a bilingual interface and mobile-responsive design",
    image: "https://i.imgur.com/WBAbIR4.png",
    link: "https://travel-reactjs-two.vercel.app",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Vertical Text */}
      <VerticalText />

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-16 lg:pl-32">
        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Project Image */}
              <motion.div
                className="relative aspect-[16/9] group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500">
                  <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.h3
                      className="text-white text-2xl font-serif mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-300"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {project.category}
                    </motion.p>
                  </div>
                </div>
              </motion.div>

              {/* Project Description */}
              <div className="mt-6">
                <h3 className="text-xl font-serif text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

