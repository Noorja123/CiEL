"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  GraduationCap, 
  Zap, 
  Bot, 
  Rocket, 
  Compass, 
  TrendingUp,
  Briefcase,
  ArrowRight
} from "lucide-react"
import { Button } from "./ui/button"

const programs = [
  {
    icon: GraduationCap,
    title: "MBA Solopreneurship Program",
    description: "Build parallel income streams while pursuing your corporate career. Learn AI-assisted consulting, digital products, and creator economy models.",
    featured: true,
    tags: ["Portfolio Careers", "AI Business", "Creator Economy"]
  },
  {
    icon: Zap,
    title: "Innovation Bootcamps",
    description: "Intensive programs focused on design thinking, rapid prototyping, and bringing innovative ideas to market.",
    tags: ["Design Thinking", "Prototyping", "Market Validation"]
  },
  {
    icon: Bot,
    title: "AI for Business Workshops",
    description: "Master ChatGPT, automation tools, and AI-powered workflows to 10x your business productivity.",
    tags: ["ChatGPT", "Automation", "No-Code"]
  },
  {
    icon: Rocket,
    title: "Startup Incubation",
    description: "End-to-end support for launching your startup with mentorship, resources, and investor connections.",
    tags: ["Mentorship", "Funding", "Launch Support"]
  },
  {
    icon: Compass,
    title: "Design Thinking Labs",
    description: "Human-centered design workshops to solve complex problems and create user-centric products.",
    tags: ["User Research", "Ideation", "Prototyping"]
  },
  {
    icon: TrendingUp,
    title: "Creator Economy Accelerator",
    description: "Build your personal brand, create content, and monetize your expertise in the digital economy.",
    tags: ["Personal Branding", "Content", "Monetization"]
  },
  {
    icon: Briefcase,
    title: "Freelancing & Consulting Labs",
    description: "Launch your independent consulting practice with client acquisition, pricing, and delivery frameworks.",
    tags: ["Client Acquisition", "Consulting", "Freelancing"]
  },
]

export function ProgramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="programs" className="py-20 bg-cream" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Our Programs
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-4 text-balance">
            Learning Pathways for Future Leaders
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Comprehensive programs designed to equip you with entrepreneurial skills, 
            AI capabilities, and innovation mindset for the future of work.
          </p>
        </motion.div>

        {/* Featured Program */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative overflow-hidden rounded-2xl bg-white border border-gold/20 p-6 lg:p-8 gold-glow">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-medium mb-3">
                  <Zap className="h-3 w-3" />
                  Flagship Program
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-3">
                  MBA Solopreneurship Program
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  The cornerstone of CiEL&apos;s vision. Learn to build sustainable 
                  parallel income streams while excelling in your corporate career. 
                  Master AI-powered business execution, creator economy models, 
                  and independent wealth creation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Portfolio Careers", "AI Consulting", "Digital Products", "Personal Branding", "Passive Income"].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-gold/10 text-gold-dark text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button className="bg-gold hover:bg-gold-dark text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="hidden lg:grid grid-cols-2 gap-3">
                {[
                  { value: "12", label: "Week Program" },
                  { value: "5+", label: "Income Streams" },
                  { value: "₹50K", label: "Avg. Monthly Goal" },
                  { value: "1:1", label: "Mentorship" },
                ].map((stat) => (
                  <div key={stat.label} className="p-3 rounded-lg bg-cream/50 text-center">
                    <p className="font-serif text-xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs.filter(p => !p.featured).map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden p-4 rounded-xl bg-white border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="inline-flex p-2 rounded-lg bg-gold/10 mb-3">
                  <program.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-serif text-base font-semibold text-foreground mb-2">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {program.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-cream text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
