"use client"

import { motion } from "framer-motion"
import { Code, Palette, Globe, Database, Smartphone, Lightbulb } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Web Development",
      description: "Creating responsive, modern websites with clean code and optimal performance.",
    },
    // {
    //   icon: <Palette className="w-8 h-8 text-teal-600" />,
    //   title: "UI/UX Design",
    //   description: "Designing intuitive interfaces that provide exceptional user experiences.",
    // },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Full-Stack Solutions",
      description: "End-to-end development from front-end interfaces to back-end systems.",
    },
    // {
    //   icon: <Database className="w-8 h-8 text-teal-600" />,
    //   title: "Database Design",
    //   description: "Efficient database architecture for optimal data management and retrieval.",
    // },
    // {
    //   icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    //   title: "Mobile Development",
    //   description: "Building native and cross-platform mobile applications for iOS and Android.",
    // },
    {
      icon: <Lightbulb className="w-8 h-8 text-teal-600" />,
      title: "Technical Consultation",
      description: "Expert advice on technology choices, architecture, and implementation strategies.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-gray-800">Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive development solutions tailored to your specific needs and goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

