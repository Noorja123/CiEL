"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Users } from "lucide-react"
import { Button } from "./ui/button"

const events = [
  {
    title: "Annual Innovation & Startup Summit",
    date: "March 2025",
    location: "Main Campus",
    attendees: "500+",
    description: "The flagship event bringing together entrepreneurs, investors, and innovators for a day of inspiration and networking.",
    featured: true
  },
  {
    title: "Creator Economy Summit",
    date: "June 2025",
    location: "Virtual + Campus",
    attendees: "300+",
    description: "Deep dive into building personal brands, content monetization, and digital product creation."
  },
  {
    title: "Startup Expo",
    date: "September 2025",
    location: "Innovation Hub",
    attendees: "200+",
    description: "Showcase student ventures to potential investors and industry partners."
  },
  {
    title: "Innovation League Finals",
    date: "November 2025",
    location: "Main Auditorium",
    attendees: "400+",
    description: "The culmination of year-long innovation competitions with top prizes."
  },
  {
    title: "Entrepreneurship Bootcamp",
    date: "December 2025",
    location: "Campus Wide",
    attendees: "150+",
    description: "Intensive 3-day bootcamp covering all aspects of launching a startup."
  },
  {
    title: "Freelance Fair",
    date: "February 2025",
    location: "Career Center",
    attendees: "250+",
    description: "Connect with clients and learn freelancing strategies from top practitioners."
  },
]

export function EventsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="events" className="py-16 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Signature Events
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-4 text-balance">
            Where Innovation Happens
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Join our signature events that bring together the brightest minds in 
            entrepreneurship, innovation, and the creator economy.
          </p>
        </motion.div>

        {/* Featured Event */}
        {events.filter(e => e.featured).map((event) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cream to-white border border-gold/20 p-6 lg:p-8 gold-glow">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative grid lg:grid-cols-2 gap-6 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-medium mb-3">
                    Featured Event
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-3">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-gold" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-gold" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 text-gold" />
                      {event.attendees} Attendees
                    </div>
                  </div>
                  <Button className="bg-gold hover:bg-gold-dark text-white">
                    Register Now
                  </Button>
                </div>
                <div className="hidden lg:block">
                  <div className="grid grid-cols-2 gap-3">
                    {["Keynotes", "Workshops", "Networking", "Pitch Sessions"].map((item, idx) => (
                      <div key={item} className="p-3 rounded-lg bg-white border border-gold/10 text-center">
                        <p className="text-sm font-medium text-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.filter(e => !e.featured).map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -3 }}
              className="group relative overflow-hidden p-4 rounded-xl bg-cream/50 border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="mb-3">
                <h3 className="font-serif text-base font-semibold text-foreground mb-1">
                  {event.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  {event.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3 text-gold" />
                  {event.date}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3 text-gold" />
                  {event.attendees}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
