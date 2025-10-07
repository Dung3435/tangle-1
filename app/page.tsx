import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ValueCards } from "@/components/value-cards"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ServicePackages } from "@/components/service-packages"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ValueCards />
      <AboutSection />
      <ServicesSection />
      <ServicePackages />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
