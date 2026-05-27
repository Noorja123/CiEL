"use client"

import { useState, useEffect, useRef } from "react"
// Helper to check if a section is in view
function useSectionInView(sectionId: string) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    function onScroll() {
      const section = document.getElementById(sectionId.replace('#', ''));
      if (!section) return setInView(false);
      const rect = section.getBoundingClientRect();
      // Section is in view if its top is above 120px and bottom is below 120px (header height)
      setInView(rect.top <= 120 && rect.bottom > 120);
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionId]);
  return inView;
}
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"
import { Button } from "./ui/button"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Experience", href: "#experience" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Compute inView for each navItem only once, outside of render loops
  const navInView = navItems.map((item) =>
    typeof window !== 'undefined' ? useSectionInView(item.href) : false
  );

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-gold/10" 
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item, idx) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 
                    ${navInView[idx] ? 'font-bold text-gold border-b-2 border-gold pb-1' : 'text-foreground/80 hover:text-gold'}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <Button 
                variant="outline" 
                className="border-gold/30 text-foreground hover:bg-gold/5 hover:border-gold"
              >
                Sign In
              </Button>
              <Button className="bg-gold hover:bg-gold-dark text-white">
                Join Community
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`text-2xl font-serif transition-colors ${navInView[index] ? 'font-bold text-gold' : 'text-foreground hover:text-gold'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-4 mt-8">
                <Button 
                  variant="outline" 
                  className="border-gold/30 text-foreground hover:bg-gold/5"
                >
                  Sign In
                </Button>
                <Button className="bg-gold hover:bg-gold-dark text-white">
                  Join Community
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
