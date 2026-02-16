import AboutSection from "@/components/home/AboutSection";
import CTASection from "@/components/home/CTASection";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import SafetySection from "@/components/home/SafetySection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <AboutSection />
      <TestimonialsSection />
      <SafetySection />
      <CTASection />
    </>
  );
}
