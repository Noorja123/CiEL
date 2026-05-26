"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Users, Rocket, Building2 } from "lucide-react"
import { Button } from "./ui/button"

const stats = [
  { icon: Rocket, value: "25+", label: "Startup Programs" },
  { icon: Sparkles, value: "100+", label: "Innovation Activities" },
  { icon: Users, value: "500+", label: "Student Ventures" },
  { icon: Building2, value: "50+", label: "Industry Partners" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-gold-light/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cream rounded-full blur-3xl opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-10 items-center"
        >
          {/* Left content */}
          <div className="space-y-5">
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold-dark text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Future of Innovation & Entrepreneurship
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                Building Future{" "}
                <span className="text-gold-gradient">Entrepreneurs</span>,{" "}
                <span className="text-gold-gradient">Innovators</span> &{" "}
                Independent Thinkers
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                CiEL empowers students with entrepreneurship, AI-enabled business 
                skills, innovation thinking, and experiential learning to thrive 
                in the future of work.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold-dark text-white px-6 h-10 text-sm"
              >
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gold/30 hover:bg-gold/5 hover:border-gold px-6 h-10 text-sm"
              >
                Join Innovation Community
              </Button>
            </motion.div>
          </div>

          {/* Right content - Stats cards */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-xl p-4 gold-glow"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-gold/10">
                    <stat.icon className="h-5 w-5 text-gold" />
                  </div>
                </div>
                <p className="font-serif text-2xl font-bold text-foreground mb-0.5">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center pt-2"
          >
            <motion.div className="w-1.5 h-3 rounded-full bg-gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
