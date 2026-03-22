'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AboutPreview() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.sr,.sr-left,.sr-right,.sr-scale').forEach(el => el.classList.add('in'))
      }),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} style={{ background:'white', borderTop:'1px solid #DDE3EE', padding:'5rem 2rem' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'center' }} className="about-grid">
        <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:2.5rem!important}}`}</style>

        <div>
          <p className="eyebrow sr" style={{ marginBottom:'0.75rem' }}>About AL Wasel</p>
          <h2 className="font-display sr-left d1" style={{ fontSize:'clamp(1.9rem,3.5vw,2.8rem)', fontWeight:500, color:'#0F1F3D', lineHeight:1.2, marginBottom:'1.5rem' }}>
            Trusted Engineering<br />
            <em style={{ fontStyle:'italic', fontWeight:300, color:'#2196C4' }}>Across Fujairah</em>
          </h2>
          <p className="sr d2" style={{ fontFamily:'Outfit,sans-serif', fontWeight:300, fontSize:'1rem', color:'#5A6A85', lineHeight:1.8, marginBottom:'1.25rem' }}>
            AL Wasel Engineering Consultancy is a fully licensed engineering firm
            headquartered in Fujairah, UAE. We deliver integrated design and engineering
            services with a steadfast commitment to quality, precision, and client success.
          </p>
          <p className="sr d3" style={{ fontFamily:'Outfit,sans-serif', fontWeight:300, fontSize:'1rem', color:'#5A6A85', lineHeight:1.8, marginBottom:'2rem' }}>
            From initial concept through design, authority approvals, and on-site supervision,
            we are your single trusted partner for every phase of the built environment in Fujairah.
          </p>
          <div className="sr d3" style={{ borderLeft:'3px solid #2196C4', paddingLeft:'1rem', marginBottom:'2rem' }}>
            <p className="font-display" style={{ fontStyle:'italic', fontSize:'1.15rem', color:'#1B3D8C', fontWeight:300 }}>
              "Engineering the future of Fujairah, one project at a time."
            </p>
          </div>
          <div className="sr d4">
            <Link href="/about" className="btn-primary">Our Story <ArrowRight size={14} /></Link>
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1px', background:'#DDE3EE' }}>
          {[
            { v:'15+',  l:'Years in Fujairah',    bg:'#1B3D8C', dark:true },
            { v:'200+', l:'Projects Completed',   bg:'white',   dark:false },
            { v:'5',    l:'Core Disciplines',     bg:'white',   dark:false },
            { v:'UAE',  l:'Licensed & Certified', bg:'#EEF2F9', dark:false },
          ].map((item,i) => (
            <div key={i} className={`sr-scale d${i+1}`} style={{ background:item.bg, padding:'2.25rem', textAlign:'center' }}>
              <div className="font-display" style={{ fontSize:'2.5rem', fontWeight:500, marginBottom:'0.4rem', color:item.dark?'#7DD4F4':'#1B3D8C' }}>{item.v}</div>
              <div style={{ fontFamily:'Outfit,sans-serif', fontSize:'0.68rem', letterSpacing:'0.12em', textTransform:'uppercase', color:item.dark?'rgba(255,255,255,0.55)':'#5A6A85' }}>{item.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
