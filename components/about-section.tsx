"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Lightbulb, 
  Rocket, 
  Brain, 
  Building, 
  Palette, 
  TrendingUp 
} from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Foster creative thinking and problem-solving through design thinking and ideation workshops."
  },
  {
    icon: Rocket,
    title: "Entrepreneurship",
    description: "Launch your venture with mentorship, funding guidance, and startup incubation support."
  },
  {
    icon: Brain,
    title: "AI Learning",
    description: "Master AI tools and automation to build scalable, technology-driven businesses."
  },
  {
    icon: Building,
    title: "Startup Incubation",
    description: "Access resources, workspace, and expert guidance to transform ideas into successful ventures."
  },
  {
    icon: Palette,
    title: "Design Thinking",
    description: "Learn human-centered design approaches to create impactful products and services."
  },
  {
    icon: TrendingUp,
    title: "Creator Economy",
    description: "Build personal brands and monetize skills through content, consulting, and digital products."
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            About CiEL
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-4 text-balance">
            Centre for Innovation, Entrepreneurship & Learning
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            CiEL is a future-focused innovation ecosystem designed to prepare MBA students 
            and young professionals for entrepreneurship, innovation leadership, AI-enabled 
            careers, and independent wealth creation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-5 rounded-xl bg-cream/50 border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="inline-flex p-2 rounded-lg bg-gold/10 mb-3">
                  <feature.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-serif text-base font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-5 rounded-xl glass gold-glow">
            <p className="text-sm text-muted-foreground mb-1">Core Philosophy</p>
            <p className="font-serif text-lg sm:text-xl font-bold text-foreground">
              &quot;Corporate Career + Parallel Income Architecture&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
