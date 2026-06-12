import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PainSection } from "@/components/pain-section"
import { DiagnosticSection } from "@/components/diagnostic-section"
import { WhySection } from "@/components/why-section"
import { AboutSection } from "@/components/about-section"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainSection />
        <DiagnosticSection />
        <WhySection />
        <AboutSection />
        <FinalCta />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}
