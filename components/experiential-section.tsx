"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Trophy, 
  Rocket, 
  TrendingUp, 
  Zap, 
  Users, 
  Mic2 
} from "lucide-react"

const experiences = [
  {
    icon: Trophy,
    title: "₹0 to ₹5000 Challenge",
    description: "Generate your first ₹5000 in revenue using skills learned in the program",
    color: "from-amber-500/20 to-yellow-500/20"
  },
  {
    icon: Mic2,
    title: "Shark Tank MBA Edition",
    description: "Pitch your startup idea to a panel of investors and industry experts",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: TrendingUp,
    title: "LinkedIn Authority Challenge",
    description: "Build your professional brand with 30-day content creation sprint",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Zap,
    title: "48-Hour AI Business Sprint",
    description: "Build a complete AI-powered business in just 48 hours",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Rocket,
    title: "Startup Simulations",
    description: "Experience real startup challenges in a risk-free environment",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: Users,
    title: "Demo Days",
    description: "Present your ventures to investors, mentors, and industry leaders",
    color: "from-indigo-500/20 to-violet-500/20"
  },
]

export function ExperientialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            Experiential Learning
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-4 text-balance">
            Learn by Doing, Not Just Watching
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Real challenges, real revenue, real experience. Our programs focus on 
            hands-on execution and measurable outcomes.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -3, scale: 1.01 }}
              className={`group relative overflow-hidden p-5 rounded-xl bg-white border border-gold/10 hover:border-gold/30 transition-all duration-300 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative">
                <div className="inline-flex p-2 rounded-lg bg-gold/10 mb-3">
                  <exp.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-serif text-base font-bold text-foreground mb-2">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
