"use client"

import { motion } from "framer-motion"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        <span className="font-serif text-3xl font-bold tracking-tight text-gold-gradient">
          CiEL
        </span>
        <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-gold to-gold-light" />
      </div>
    </motion.div>
  )
}

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="font-serif text-4xl font-bold tracking-tight text-gold-gradient">
        CiEL
      </span>
      <span className="text-sm text-muted-foreground tracking-wide">
        Center for Innovation and
        <br />
        Entrepreneurship Learning
      </span>
    </div>
  )
}
