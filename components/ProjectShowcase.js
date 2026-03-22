'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const featured = [1, 5, 9, 13, 17, 21]

export default function ProjectShowcase() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.sr,.sr-left,.sr-right,.sr-scale').forEach(el => el.classList.add('in'))
      }),
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} style={{ background:'#EEF2F9', borderTop:'1px solid #DDE3EE', padding:'5rem 2rem' }}>
      <div style={{ maxWidth:1280, margin:'0 auto' }}>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:'2.5rem', gap:'1.5rem', flexWrap:'wrap' }}>
          <div>
            <p className="eyebrow sr" style={{ marginBottom:'0.6rem' }}>Our Work</p>
            <h2 className="font-display sr-left d1" style={{ fontSize:'clamp(2rem,4vw,3rem)', fontWeight:500, color:'#0F1F3D', lineHeight:1.15 }}>
              Projects in<br />
              <em style={{ fontStyle:'italic', fontWeight:300, color:'#2196C4' }}>Fujairah</em>
            </h2>
          </div>
          <Link href="/projects" className="btn-outline sr-right d1" style={{ whiteSpace:'nowrap' }}>
            View All Projects <ArrowRight size={13} />
          </Link>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gridTemplateRows:'repeat(2,280px)', gap:'6px' }}>
          {featured.map((n,i) => (
            <div key={n}
              className={`photo-card sr-scale d${(i%3)+1}`}
              style={{
                position:'relative',
                gridColumn: i===0 ? 'span 2' : 'span 1',
                overflow:'hidden',
              }}>
              <Image src={`/project_photos_${n}.jpeg`} alt="AL Wasel project" fill style={{ objectFit:'cover' }} />
              <div style={{ position:'absolute', inset:0, background:'rgba(27,61,140,0)', transition:'background 0.4s' }}
                onMouseEnter={e => e.currentTarget.style.background='rgba(27,61,140,0.18)'}
                onMouseLeave={e => e.currentTarget.style.background='rgba(27,61,140,0)'} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
