import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ProjectShowcase from '@/components/ProjectShowcase'
import AboutPreview from '@/components/AboutPreview'
import ContactSection from '@/components/ContactSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <ProjectShowcase />
      <AboutPreview />
      <ContactSection />
    </>
  )
}
