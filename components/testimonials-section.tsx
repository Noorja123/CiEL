"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "CiEL transformed my perspective on career building. I now run a successful AI consulting practice alongside my corporate job, generating ₹80K in monthly side income.",
    name: "Priya Sharma",
    role: "MBA Graduate, AI Consultant",
    avatar: "PS"
  },
  {
    quote: "The Solopreneurship program taught me skills that no traditional MBA covers. I launched my first digital product during the program and it&apos;s now my primary income source.",
    name: "Rahul Verma",
    role: "Founder, ProductHub",
    avatar: "RV"
  },
  {
    quote: "From zero followers to 50K on LinkedIn in 6 months. The creator economy module at CiEL gave me the frameworks and confidence to build my personal brand.",
    name: "Ananya Gupta",
    role: "Content Creator & Consultant",
    avatar: "AG"
  },
  {
    quote: "The 48-hour AI Business Sprint was a game-changer. We built and launched a real product that now serves 100+ customers. CiEL makes entrepreneurship accessible.",
    name: "Vikram Patel",
    role: "Co-Founder, AutomateAI",
    avatar: "VP"
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-16 bg-cream" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-4 text-balance">
            Voices from the CiEL Community
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="glass rounded-2xl p-6 lg:p-8 gold-glow">
            <Quote className="h-8 w-8 text-gold/30 mb-4" />
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-serif text-lg lg:text-xl text-foreground leading-relaxed mb-6">
                &quot;{testimonials[currentIndex].quote}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="font-serif text-sm font-bold text-gold">
                    {testimonials[currentIndex].avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white border border-gold/20 hover:border-gold/40 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 text-foreground" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-gold" : "bg-gold/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white border border-gold/20 hover:border-gold/40 transition-colors"
            >
              <ChevronRight className="h-4 w-4 text-foreground" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
