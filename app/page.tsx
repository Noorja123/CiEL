import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProgramsSection } from "@/components/programs-section"
import { SolopreneurshipSection } from "@/components/solopreneurship-section"
import { TimelineSection } from "@/components/timeline-section"
import { AISection } from "@/components/ai-section"
import { ExperientialSection } from "@/components/experiential-section"
import { EventsSection } from "@/components/events-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <SolopreneurshipSection />
      <TimelineSection />
      <AISection />
      <ExperientialSection />
      <EventsSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
