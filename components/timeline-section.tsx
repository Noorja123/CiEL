"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const milestones = [
  {
    month: "Month 1",
    title: "Innovation Bootcamp",
    description: "Design thinking fundamentals and ideation workshops",
    events: ["Ideathon", "Design Sprint", "Problem Discovery"]
  },
  {
    month: "Month 2",
    title: "Startup Foundations",
    description: "Business model development and market validation",
    events: ["Hackathon", "Market Research", "MVP Planning"]
  },
  {
    month: "Month 3",
    title: "AI Business Sprint",
    description: "48-hour AI-powered business building challenge",
    events: ["AI Workshop", "Tool Mastery", "Automation Setup"]
  },
  {
    month: "Month 4",
    title: "Creator Economy Week",
    description: "Personal branding and content monetization",
    events: ["LinkedIn Challenge", "Content Creation", "Brand Building"]
  },
  {
    month: "Month 5",
    title: "Revenue Challenge",
    description: "₹0 to ₹5000 real revenue generation",
    events: ["Client Acquisition", "Product Launch", "First Sales"]
  },
  {
    month: "Month 6",
    title: "Startup Expo",
    description: "Demo day and investor pitching",
    events: ["Demo Day", "Investor Sessions", "Funding Guidance"]
  },
]

export function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="experience" className="py-16 bg-cream" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Learning Experience
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-4 text-balance">
            Your Innovation Journey
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A structured pathway through hackathons, bootcamps, challenges, and 
            real-world business building experiences.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-gold/20 hidden lg:block" />

          {/* Timeline items */}
          <div className="grid lg:grid-cols-6 gap-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.month}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute top-6 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{
                      scale: activeIndex === index ? 1.5 : 1,
                      backgroundColor: activeIndex === index ? "#C8A552" : "#DDD1B4"
                    }}
                    className="w-3 h-3 rounded-full border-3 border-white"
                  />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className={`p-4 rounded-xl bg-white border transition-all duration-300 lg:mt-10 ${
                    activeIndex === index 
                      ? "border-gold/30 gold-glow" 
                      : "border-gold/10"
                  }`}
                >
                  <span className="text-gold font-medium text-xs">{milestone.month}</span>
                  <h3 className="font-serif text-sm font-semibold text-foreground mt-1 mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {milestone.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {milestone.events.map((event) => (
                      <span 
                        key={event} 
                        className="text-[10px] px-1.5 py-0.5 rounded-full bg-gold/10 text-gold-dark"
                      >
                        {event}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
