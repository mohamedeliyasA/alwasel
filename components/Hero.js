'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const photos = Array.from({ length: 21 }, (_, i) => `/project_photos_${i + 1}.jpeg`)

const anim = (loaded, delay, from = 'bottom') => ({
  opacity:    loaded ? 1 : 0,
  transform:  loaded ? 'none'
    : from === 'left'  ? 'translateX(-30px)'
    : from === 'right' ? 'translateX(30px)'
    : from === 'top'   ? 'translateY(-18px)'
    : 'translateY(22px)',
  transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s,
               transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
})

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev]       = useState(null)
  const [loaded, setLoaded]   = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 150)
    const t = setInterval(() => {
      setCurrent(c => { setPrev(c); return (c + 1) % photos.length })
    }, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section style={{ position:'relative', height:'100vh', minHeight:600, display:'flex', flexDirection:'column', overflow:'hidden' }}>

      {/* Slideshow */}
      {photos.map((src, i) => (
        <div key={src} style={{
          position:'absolute', inset:0,
          opacity: i===current ? 1 : 0,
          transition: (i===current||i===prev) ? 'opacity 1.6s ease' : 'none',
          zIndex: i===current ? 1 : 0,
        }}>
          <Image src={src} alt="AL Wasel project" fill style={{ objectFit:'cover' }} priority={i===0} />
        </div>
      ))}

      {/* Gradient layers */}
      <div style={{ position:'absolute', inset:0, zIndex:2, background:'linear-gradient(105deg, rgba(6,14,38,0.82) 0%, rgba(6,14,38,0.38) 52%, rgba(6,14,38,0.08) 100%)' }} />
      <div style={{ position:'absolute', inset:0, zIndex:2, background:'linear-gradient(to top, rgba(6,14,38,0.65) 0%, transparent 45%)' }} />
      <div style={{ position:'absolute', inset:0, zIndex:2, background:'linear-gradient(to bottom, rgba(6,14,38,0.28) 0%, transparent 22%)' }} />

      {/* Hero content */}
      <div style={{ position:'relative', zIndex:3, flex:1, display:'flex', alignItems:'center', maxWidth:1280, margin:'0 auto', padding:'7rem 2rem 2rem', width:'100%' }}>
        <div style={{ maxWidth:600 }}>

          {/* Eyebrow — flies from left */}
          <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'1.1rem', ...anim(loaded, 0.1, 'left') }}>
            <div style={{ width:32, height:2, background:'#4FB8E0', borderRadius:1 }} />
            <p style={{
              fontFamily:'Outfit,sans-serif', fontSize:'0.72rem', fontWeight:600,
              letterSpacing:'0.22em', textTransform:'uppercase', color:'#7DD4F4', margin:0,
            }}>
              Engineering Consultant in Fujairah
            </p>
          </div>

          {/* Headline line 1 — flies from bottom */}
          <div style={{ overflow:'hidden', marginBottom:'0.15rem' }}>
            <h1 style={{
              fontFamily:'Outfit,sans-serif', fontSize:'clamp(2.8rem,5.5vw,5.2rem)',
              fontWeight:700, color:'white', lineHeight:1.08, margin:0,
              ...anim(loaded, 0.28, 'bottom'),
            }}>
              Transforming
            </h1>
          </div>

          {/* Headline line 2 — flies from bottom, slight delay */}
          <div style={{ overflow:'hidden', marginBottom:'1.5rem' }}>
            <h1 style={{
              fontFamily:'Outfit,sans-serif', fontSize:'clamp(2.8rem,5.5vw,5.2rem)',
              fontWeight:700, color:'white', lineHeight:1.08, margin:0,
              ...anim(loaded, 0.42, 'bottom'),
            }}>
              Dreams into{' '}
              <span style={{ color:'#7DD4F4', fontStyle:'italic', fontWeight:300, fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(3rem,6vw,5.8rem)' }}>
                Reality
              </span>
            </h1>
          </div>

          {/* Body copy — fades up */}
          <p style={{
            fontFamily:'Outfit,sans-serif', fontSize:'0.98rem', fontWeight:300,
            color:'rgba(255,255,255,0.72)', lineHeight:1.78, maxWidth:460,
            marginBottom:'2.25rem',
            ...anim(loaded, 0.58, 'bottom'),
          }}>
            Delivering architectural design, authority approvals, MEP engineering,
            and project supervision across Fujairah.
          </p>

          {/* CTAs — scale in */}
          <div style={{
            display:'flex', gap:'1rem', flexWrap:'wrap',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'scale(0.94)',
            transition:'opacity 0.8s ease 0.72s, transform 0.8s ease 0.72s',
          }}>
            <Link href="/contact" style={{
              display:'inline-flex', alignItems:'center', gap:'0.5rem',
              padding:'0.82rem 1.9rem',
              background:'#2196C4', color:'white',
              fontFamily:'Outfit,sans-serif', fontWeight:600, fontSize:'0.85rem',
              textDecoration:'none', border:'2px solid #2196C4',
              transition:'all 0.25s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background='#1677A0'; e.currentTarget.style.borderColor='#1677A0'; e.currentTarget.style.transform='translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background='#2196C4'; e.currentTarget.style.borderColor='#2196C4'; e.currentTarget.style.transform='translateY(0)' }}
            >
              Contact Us <ArrowRight size={15} />
            </Link>
            <Link href="/services" style={{
              display:'inline-flex', alignItems:'center', gap:'0.5rem',
              padding:'0.82rem 1.9rem',
              background:'transparent', color:'rgba(255,255,255,0.9)',
              fontFamily:'Outfit,sans-serif', fontWeight:500, fontSize:'0.85rem',
              textDecoration:'none', border:'2px solid rgba(255,255,255,0.45)',
              transition:'all 0.25s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='white'; e.currentTarget.style.color='white'; e.currentTarget.style.transform='translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.45)'; e.currentTarget.style.color='rgba(255,255,255,0.9)'; e.currentTarget.style.transform='translateY(0)' }}
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        position:'relative', zIndex:3,
        background:'rgba(10,22,55,0.90)', backdropFilter:'blur(16px)', WebkitBackdropFilter:'blur(16px)',
        borderTop:'1px solid rgba(255,255,255,0.07)',
      }}>
        <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 2rem', display:'grid', gridTemplateColumns:'repeat(4,1fr)' }}>
          {[
            { v:'15+',  l:'Years Experience' },
            { v:'200+', l:'Projects Completed' },
            { v:'50+',  l:'Expert Engineers' },
            { v:'UAE',  l:'Licensed & Certified' },
          ].map((s,i) => (
            <div key={i} style={{
              padding:'1rem', textAlign:'center',
              borderRight: i<3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'none' : 'translateY(12px)',
              transition: `opacity 0.7s ease ${0.8 + i*0.1}s, transform 0.7s ease ${0.8 + i*0.1}s`,
            }}>
              <div style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'1.7rem', fontWeight:500, color:'#7DD4F4', marginBottom:'0.1rem' }}>{s.v}</div>
              <div style={{ fontFamily:'Outfit,sans-serif', fontSize:'0.58rem', letterSpacing:'0.13em', textTransform:'uppercase', color:'rgba(255,255,255,0.38)' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators — right vertical */}
      <div style={{ position:'absolute', right:'1.5rem', top:'50%', transform:'translateY(-50%)', zIndex:3, display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
        {photos.map((_,i) => (
          <button key={i} onClick={() => { setPrev(current); setCurrent(i) }}
            style={{ width:3, height:i===current?28:7, borderRadius:2, border:'none', cursor:'pointer', padding:0,
              background: i===current ? '#4FB8E0' : 'rgba(255,255,255,0.25)', transition:'all 0.4s ease' }} />
        ))}
      </div>
    </section>
  )
}
