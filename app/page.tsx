import AnimatedLogo from "@/components/animated-logo"
import Footer from "@/components/footer"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import VerticalText from "@/components/vertical-text"
import AnimatedHeading from "@/components/animated-heading"

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      <VerticalText />

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 md:pt-24 pb-16 md:pb-32 lg:pl-32">
        <div className="flex flex-col items-center justify-center">
          <AnimatedHeading />
          <div className="relative w-full max-w-md mx-auto">
            <AnimatedLogo />
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

