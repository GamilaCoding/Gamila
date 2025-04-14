"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-800">About GAMILA</h2>
          <p className="text-lg text-gray-600 mb-6">
           a dedicated developer with a focus on producing sophisticated, useful digital experiences. Ideas are turned into stunning, interactive applications by someone with a strong sense of design and knowledge of contemporary web technology.
Every project is tackled with originality, accuracy, and a dedication to quality, guaranteeing that every solution not only satisfies but surpasses expectations.
          </p>
          <p className="text-lg text-gray-600 mb-10">
            Every project is approached with creativity, precision, and a commitment to excellence, ensuring that each
            solution not only meets but exceeds expectations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              className="p-6 bg-white rounded-lg shadow-lg"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Innovative</h3>
              <p className="text-gray-600">Pushing boundaries with creative solutions and cutting-edge technologies</p>
            </motion.div>

            <motion.div
              className="p-6 bg-white rounded-lg shadow-lg"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-teal-600">Detail-Oriented</h3>
              <p className="text-gray-600">Meticulous attention to every aspect of development and design</p>
            </motion.div>

            <motion.div
              className="p-6 bg-white rounded-lg shadow-lg"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Client-Focused</h3>
              <p className="text-gray-600">Dedicated to understanding and achieving your specific goals and vision</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

