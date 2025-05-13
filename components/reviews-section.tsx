"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

// Sample reviews data
const reviews = [
  {
    id: 1,
    name: "Khaled",
    position: "client",
    company: "شركة للتكنولوجيا",
    rating: 5,
    text: "خدمة على أعلى مستوى من الاحترافية. الباشمهندسه جميلة شخصية راقية، صبورة جدًا، وتعاونها فوق الممتاز. قدمت تعديلات دقيقة ومميزة للتطبيق بلمسة إبداعية. أنصح كل بالتعامل معها، لأنها تستحق الثقة بجدارة. وبكل تأكيد،
      هيكون لي تعاملات مستقبلية كتيرة معاها! بجد، شكرًا على المجهود الرائع والإتقان! 🌟",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 1,
    name: "Sara Qasam",
    position: "client",
    company: "شركة للتكنولوجيا",
    rating: 5,
    text: "خدمة ممتازة و امانه وسرعه في الإنجاز  و أنصح كل بالتعامل معها وبكل تأكيد، هيكون لي تعاملات مستقبلية كتيرة معاها! 🌟",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "محمد العلي",
    position: "صاحب مشروع",
    company: "متجر إلكتروني",
    rating: 4,
    text: "ساعدني فريق GAMILA في إطلاق متجري الإلكتروني بتصميم جذاب وواجهة سهلة الاستخدام. النتائج كانت مبهرة والدعم الفني ممتاز.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextReview = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  const prevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const goToReview = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-gray-800">آراء العملاء</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نفخر بثقة عملائنا ونسعى دائمًا لتقديم أفضل الخدمات التي تلبي توقعاتهم وتتجاوزها
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Large quote icon */}
          <motion.div
            className="absolute -top-10 left-1/2 -translate-x-1/2 text-[#6B5DD3] opacity-10 z-0"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Quote size={120} />
          </motion.div>

          {/* Reviews slider */}
          <div className="relative overflow-hidden">
            <div className="flex items-center justify-center">
              <motion.button
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-[#6B5DD3] transition-colors z-10 mr-4"
                onClick={prevReview}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
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
                  className="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </motion.button>

              <div className="w-full max-w-3xl">
                {reviews.map((review, index) => (
                  <motion.div
                    key={review.id}
                    className={`${
                      index === activeIndex ? "block" : "hidden"
                    } bg-white rounded-2xl shadow-lg p-8 md:p-10`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-right">
                      <div className="mb-6 md:mb-0 md:ml-6 flex-shrink-0">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                          <Image
                            src={review.image || "/placeholder.svg"}
                            alt={review.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-center md:justify-start mb-3">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <Star
                                size={20}
                                className={`${
                                  i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                } ml-1`}
                              />
                            </motion.div>
                          ))}
                        </div>

                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">{review.text}</p>

                        <div>
                          <h4 className="text-xl font-bold text-gray-800">{review.name}</h4>
                          <p className="text-[#6B5DD3]">
                            {review.position} | {review.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-[#6B5DD3] transition-colors z-10 ml-4"
                onClick={nextReview}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
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
                  className="lucide lucide-chevron-left"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </motion.button>
            </div>

            {/* Dots navigation */}
            <div className="flex justify-center mt-8">
              {reviews.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 ${index === activeIndex ? "bg-[#6B5DD3]" : "bg-gray-300"}`}
                  onClick={() => goToReview(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
