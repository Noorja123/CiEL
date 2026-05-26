"use client"

import Link from "next/link"
import { Logo } from "./logo"
import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react"

const footerLinks = {
  programs: [
    { name: "MBA Solopreneurship", href: "#programs" },
    { name: "Innovation Bootcamps", href: "#programs" },
    { name: "AI Workshops", href: "#programs" },
    { name: "Startup Incubation", href: "#programs" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Toolkit", href: "#" },
    { name: "Community", href: "#" },
  ],
  about: [
    { name: "Our Story", href: "#about" },
    { name: "Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-white border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
              Centre for Innovation, Entrepreneurship & Learning. Building future 
              entrepreneurs and independent thinkers.
            </p>
            <div className="flex gap-2 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-1.5 rounded-md bg-cream hover:bg-gold/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-3">Programs</h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-3">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-3">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-gold/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            © 2025 CiEL. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-muted-foreground hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
