"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const categories = ["All", "Events", "Workshops", "Networking", "Talks", "Labs"]

const galleryItems = [
  { category: "Events", title: "Innovation Summit 2024", aspect: "wide" },
  { category: "Workshops", title: "AI Workshop Series", aspect: "tall" },
  { category: "Networking", title: "Founder Meetup", aspect: "square" },
  { category: "Talks", title: "Guest Lecture Series", aspect: "wide" },
  { category: "Labs", title: "Design Thinking Session", aspect: "square" },
  { category: "Events", title: "Startup Demo Day", aspect: "tall" },
  { category: "Workshops", title: "No-Code Bootcamp", aspect: "square" },
  { category: "Networking", title: "Industry Connect", aspect: "wide" },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <section id="gallery" className="py-16 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Campus Culture
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-4 text-balance">
            Life at CiEL
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gold text-white"
                  : "bg-cream text-foreground hover:bg-gold/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-xl bg-cream border border-gold/10 group break-inside-avoid ${
                item.aspect === "tall" ? "aspect-[3/4]" : 
                item.aspect === "wide" ? "aspect-[4/3]" : "aspect-square"
              }`}
            >
              {/* Placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-gold-light/10" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-end">
                <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] text-gold-light uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-base text-white font-semibold mt-0.5">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
