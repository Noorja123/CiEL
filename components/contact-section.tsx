"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Mail, MapPin, Phone, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")

  return (
    <section id="contact" className="py-16 bg-cream relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-gold-light/5 rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Join Us
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-4 text-balance">
            Join the Future of Innovation & Entrepreneurship
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Be part of a community that&apos;s building the next generation of 
            entrepreneurs, creators, and independent thinkers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Newsletter & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="p-5 rounded-xl glass gold-glow">
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                Stay Updated
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to our newsletter for insights on entrepreneurship, AI, 
                and the future of work.
              </p>
              <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white border-gold/20 focus:border-gold"
                />
                <Button className="bg-gold hover:bg-gold-dark text-white">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: "For Students", cta: "Explore Programs" },
                { title: "For Partners", cta: "Collaborate With Us" },
                { title: "For Investors", cta: "Connect" },
                { title: "For Mentors", cta: "Join Network" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -2 }}
                  className="p-3 rounded-lg bg-white border border-gold/10 hover:border-gold/30 transition-all cursor-pointer group"
                >
                  <p className="text-sm font-medium text-foreground mb-0.5">{item.title}</p>
                  <p className="text-xs text-gold flex items-center gap-1">
                    {item.cta}
                    <ArrowRight className="h-2.5 w-2.5 group-hover:translate-x-1 transition-transform" />
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-5 rounded-xl bg-white border border-gold/20"
          >
            <h3 className="font-serif text-lg font-bold text-foreground mb-4">
              Get in Touch
            </h3>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-3">
                <Input 
                  placeholder="First Name" 
                  className="bg-cream border-gold/20 focus:border-gold"
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-cream border-gold/20 focus:border-gold"
                />
              </div>
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-cream border-gold/20 focus:border-gold"
              />
              <Input 
                placeholder="Subject" 
                className="bg-cream border-gold/20 focus:border-gold"
              />
              <textarea 
                placeholder="Your Message"
                rows={3}
                className="w-full px-3 py-2 text-sm rounded-lg bg-cream border border-gold/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 resize-none"
              />
              <Button className="w-full bg-gold hover:bg-gold-dark text-white">
                Send Message
              </Button>
            </form>

            <div className="mt-5 pt-5 border-t border-gold/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-gold/10">
                  <Mail className="h-3.5 w-3.5 text-gold" />
                </div>
                <span className="text-xs text-muted-foreground">email@ciel.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-gold/10">
                  <Phone className="h-3.5 w-3.5 text-gold" />
                </div>
                <span className="text-xs text-muted-foreground">+91 XXXXXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-gold/10">
                  <MapPin className="h-3.5 w-3.5 text-gold" />
                </div>
                <span className="text-xs text-muted-foreground">Chetana's Innovation Hub</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
