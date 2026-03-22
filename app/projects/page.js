'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const allPhotos = Array.from({ length: 21 }, (_, i) => ({
  src: `/project_photos_${i + 1}.jpeg`,
  id: i + 1,
}))

export default function ProjectsPage() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [animating, setAnimating]   = useState(true)
  const [lightbox, setLightbox]     = useState(null)
  const intervalRef                 = useRef(null)
  const ref                         = useRef(null)

  const goSlide = (dir) => {
    setAnimating(false)
    setTimeout(() => {
      setSlideIndex(p => (p + dir + allPhotos.length) % allPhotos.length)
      setAnimating(true)
    }, 300)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => goSlide(1), 5000)
    return () => clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    const onKey = e => {
      if (lightbox === null) return
      if (e.key === 'ArrowRight') setLightbox(l => (l + 1) % allPhotos.length)
      if (e.key === 'ArrowLeft')  setLightbox(l => (l - 1 + allPhotos.length) % allPhotos.length)
      if (e.key === 'Escape')     setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll('.sr').forEach(el => el.classList.add('in'))
      }),
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ paddingTop: 80, minHeight: '100vh', background: '#F8FAFD' }}>

      {/* Slideshow hero */}
      <div style={{ position: 'relative', height: '72vh', minHeight: 440, overflow: 'hidden', background: '#0F1F3D' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: animating ? 1 : 0, transition: 'opacity 0.5s ease' }}>
          <Image
            src={allPhotos[slideIndex].src}
            alt="AL Wasel Engineering project"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,31,61,0.5) 0%, rgba(15,31,61,0.25) 50%, rgba(15,31,61,0.75) 100%)' }} />

        <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', zIndex: 2 }}>
          <div style={{ display: 'flex', gap: 7 }}>
            {allPhotos.map((_, i) => (
              <button key={i}
                onClick={() => { clearInterval(intervalRef.current); setAnimating(false); setTimeout(() => { setSlideIndex(i); setAnimating(true) }, 250) }}
                style={{ width: i === slideIndex ? 26 : 6, height: 6, borderRadius: 3, border: 'none', cursor: 'pointer', background: i === slideIndex ? '#4FB8E0' : 'rgba(255,255,255,0.3)', transition: 'all 0.35s ease', padding: 0 }} />
            ))}
          </div>
        </div>

        <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1.5rem', right: '1.5rem', display: 'flex', justifyContent: 'space-between', zIndex: 2 }}>
          {[[-1, ChevronLeft], [1, ChevronRight]].map(([dir, Icon]) => (
            <button key={dir}
              onClick={() => { clearInterval(intervalRef.current); goSlide(dir) }}
              style={{ width: 46, height: 46, background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}>
              <Icon size={20} />
            </button>
          ))}
        </div>

        <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontFamily: 'Cormorant Garamond, serif', display: 'flex', alignItems: 'center', gap: '0.5rem', zIndex: 2 }}>
          <span style={{ fontSize: '1.4rem', fontWeight: 300, color: '#7DD4F4' }}>{String(slideIndex + 1).padStart(2,'0')}</span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1rem' }}>/</span>
          <span style={{ fontSize: '1rem', fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}>{String(allPhotos.length).padStart(2,'0')}</span>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'rgba(255,255,255,0.1)', zIndex: 2 }}>
          <div style={{ height: '100%', background: '#2196C4', width: `${((slideIndex + 1) / allPhotos.length) * 100}%`, transition: 'width 0.6s ease' }} />
        </div>
      </div>

      {/* Section header */}
      <div ref={ref} style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        <p className="eyebrow sr" style={{ marginBottom: '0.75rem' }}>Project Portfolio</p>
        <h2 className="font-display sr d1" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 500, color: '#0F1F3D', lineHeight: 1.15 }}>
          Our Work Across<br />
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#2196C4' }}>Fujairah and the UAE</em>
        </h2>
        <p className="sr d2" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300, color: '#5A6A85', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: 520, marginTop: '1rem' }}>
          A collection of completed engineering and architecture projects in Fujairah — click any photo to view full size.
        </p>
      </div>

      {/* Photo grid */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '6px' }}>
          {allPhotos.map((photo, i) => (
            <button key={photo.id}
              onClick={() => setLightbox(i)}
              className="photo-card"
              style={{ position: 'relative', height: 240, border: 'none', padding: 0, cursor: 'pointer', background: '#DDE3EE', display: 'block' }}>
              <Image
                src={photo.src}
                alt="AL Wasel Engineering project"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', inset: 0, background: 'rgba(27,61,140,0)',
                transition: 'background 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(27,61,140,0.35)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(27,61,140,0)' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 300, color: 'rgba(255,255,255,0.8)', opacity: 0, transition: 'opacity 0.3s', lineHeight: 1 }}
                  className="photo-num">
                  {String(i + 1).padStart(2,'0')}
                </span>
              </div>
              <style>{`.photo-card:hover .photo-num { opacity: 1 !important; }`}</style>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: 'fixed', inset: 0, zIndex: 999, background: 'rgba(0,0,0,0.94)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: 1000, width: '100%', maxHeight: '90vh' }}>
            <div style={{ position: 'relative', height: '80vh', maxHeight: 680 }}>
              <Image
                src={allPhotos[lightbox].src}
                alt="AL Wasel Engineering project"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div style={{ textAlign: 'center', marginTop: '0.75rem', fontFamily: 'Cormorant Garamond, serif', color: 'rgba(255,255,255,0.5)', fontSize: '1rem', fontWeight: 300 }}>
              {String(lightbox + 1).padStart(2,'0')} / {String(allPhotos.length).padStart(2,'0')}
            </div>
            <button onClick={() => setLightbox(null)}
              style={{ position: 'absolute', top: -14, right: -14, width: 40, height: 40, background: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <X size={18} style={{ color: '#0F1F3D' }} />
            </button>
            {[[-1, ChevronLeft, { left: -56 }], [1, ChevronRight, { right: -56 }]].map(([dir, Icon, pos]) => (
              <button key={dir}
                onClick={() => setLightbox(l => (l + dir + allPhotos.length) % allPhotos.length)}
                style={{ position: 'absolute', top: '40%', ...pos, width: 46, height: 46, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white', transition: 'background 0.2s' }}
                className="hidden md:flex"
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
