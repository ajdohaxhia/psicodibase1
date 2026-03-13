"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TrustSection } from "@/components/sections/trust-section";
import { AboutSection } from "@/components/sections/about-section";
import { TeamSection } from "@/components/sections/team-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <HeroSection />
        <TrustSection />
        <IntroSection />
        <ServicesSection />
        <AboutSection />
        <TeamSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
