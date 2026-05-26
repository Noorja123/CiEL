"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Bot, Cpu, Zap, Globe, Layers, Sparkles } from "lucide-react"

const aiTools = [
  {
    icon: Bot,
    name: "ChatGPT & AI Assistants",
    description: "Leverage conversational AI for business operations, content, and automation"
  },
  {
    icon: Cpu,
    name: "AI Automation",
    description: "Build automated workflows that work 24/7 without manual intervention"
  },
  {
    icon: Layers,
    name: "No-Code Platforms",
    description: "Launch apps, websites, and SaaS products without writing code"
  },
  {
    icon: Sparkles,
    name: "Canva & Design AI",
    description: "Create professional designs and visual content in minutes"
  },
  {
    icon: Globe,
    name: "Digital Products",
    description: "Build and sell courses, templates, and digital assets at scale"
  },
  {
    icon: Zap,
    name: "Productivity Tools",
    description: "Master tools like Notion, Gamma, and AI writing assistants"
  },
]

export function AISection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 bg-white relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-96 h-96 border border-gold/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-80 h-80 border border-gold/10 rounded-full"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            AI & Future of Work
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-4 text-balance">
            Master the AI-Powered Business Stack
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The future belongs to those who can leverage AI as a force multiplier. 
            Learn to build, automate, and scale using cutting-edge tools.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {aiTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="group relative p-4 rounded-xl glass border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <tool.icon className="h-4 w-4 text-gold" />
                </div>
                <h3 className="font-serif text-sm font-semibold text-foreground">
                  {tool.name}
                </h3>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* AI Dashboard Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-cream to-white p-5 border border-gold/20 gold-glow"
        >
          <div className="grid lg:grid-cols-3 gap-4">
            {/* Metric Cards */}
            {[
              { label: "Tasks Automated", value: "80%", change: "+25%" },
              { label: "Time Saved Weekly", value: "20h", change: "+40%" },
              { label: "Revenue Impact", value: "3x", change: "+200%" },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="p-4 rounded-xl bg-white border border-gold/10"
              >
                <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                <div className="flex items-end justify-between">
                  <p className="font-serif text-2xl font-bold text-foreground">{metric.value}</p>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">
                    {metric.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
