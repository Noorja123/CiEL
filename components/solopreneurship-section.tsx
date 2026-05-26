"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Briefcase, 
  Laptop, 
  PenTool, 
  ShoppingBag, 
  Mic2, 
  DollarSign 
} from "lucide-react"

const incomeStreams = [
  {
    icon: Briefcase,
    title: "AI Consulting",
    description: "Leverage AI tools to offer premium consulting services",
    revenue: "₹30K-1L/month"
  },
  {
    icon: Laptop,
    title: "Freelancing",
    description: "Build a portfolio of high-value freelance clients",
    revenue: "₹20K-80K/month"
  },
  {
    icon: PenTool,
    title: "Digital Products",
    description: "Create and sell courses, templates, and tools",
    revenue: "₹10K-50K/month"
  },
  {
    icon: ShoppingBag,
    title: "No-Code Business",
    description: "Launch SaaS and apps without coding",
    revenue: "₹15K-1L/month"
  },
  {
    icon: Mic2,
    title: "Creator Economy",
    description: "Monetize content and build audience",
    revenue: "₹10K-2L/month"
  },
  {
    icon: DollarSign,
    title: "Passive Income",
    description: "Build automated income systems",
    revenue: "₹5K-30K/month"
  },
]

export function SolopreneurshipSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            The Solopreneurship Experience
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-4 text-balance">
            Corporate Career + Parallel Income Architecture
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Build multiple income streams while excelling in your corporate career. 
            Learn to leverage AI, digital tools, and your expertise to create 
            financial independence.
          </p>
        </motion.div>

        {/* Income Streams Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {incomeStreams.map((stream, index) => (
            <motion.div
              key={stream.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-4 rounded-xl bg-cream/50 border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 rounded-lg bg-gold/10">
                  <stream.icon className="h-5 w-5 text-gold" />
                </div>
                <span className="text-xs font-medium text-gold-dark bg-gold/10 px-2 py-0.5 rounded-full">
                  {stream.revenue}
                </span>
              </div>
              <h3 className="font-serif text-base font-semibold text-foreground mb-1">
                {stream.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {stream.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { value: "₹50K+", label: "Average Monthly Goal", suffix: "/month" },
            { value: "5+", label: "Income Streams", suffix: "streams" },
            { value: "10x", label: "Productivity Boost", suffix: "with AI" },
            { value: "100%", label: "Location Freedom", suffix: "remote" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="text-center p-4 rounded-xl glass gold-glow"
            >
              <p className="font-serif text-xl sm:text-2xl font-bold text-gold-gradient mb-0.5">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
