'use client'
import { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle, Clock } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef(null)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll('.sr, .sr-left, .sr-right').forEach(el => el.classList.add('in'))
      }),
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const field = (label, key, type, ph, req) => (
    <div>
      <label style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#5A6A85', display: 'block', marginBottom: '0.4rem' }}>{label}</label>
      <input type={type} required={req} placeholder={ph} value={form[key]}
        onChange={e => setForm({ ...form, [key]: e.target.value })}
        style={{ width: '100%', background: 'white', border: '1px solid #DDE3EE', color: '#0F1F3D', fontSize: '0.875rem', padding: '0.75rem 1rem', outline: 'none', fontFamily: 'Outfit, sans-serif', transition: 'border-color 0.2s' }}
        onFocus={e => e.target.style.borderColor = '#2196C4'}
        onBlur={e => e.target.style.borderColor = '#DDE3EE'} />
    </div>
  )

  return (
    <section ref={ref} style={{ background: '#F8FAFD', borderTop: '1px solid #DDE3EE', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="eyebrow sr" style={{ marginBottom: '0.75rem' }}>Contact Us</p>
          <h2 className="font-display sr d1" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 500, color: '#0F1F3D', lineHeight: 1.15 }}>
            Let's Build Something<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#2196C4' }}>Remarkable</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '3rem', alignItems: 'start' }} className="contact-grid">
          <style>{`@media(max-width:768px){ .contact-grid{ grid-template-columns:1fr !important; } }`}</style>

          <div className="sr" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { icon: MapPin, label: 'Office', val: 'Emirates Islamic Bank Building, Office No. 410, Fujairah 125212' },
              { icon: Phone,  label: 'Phone',  val: '+971 55 194 8383', href: 'tel:+971551948383' },
              { icon: Mail,   label: 'Email',  val: 'info@alwaselfuj.com', href: 'mailto:info@alwaselfuj.com' },
              { icon: Clock,  label: 'Hours',  val: 'Sunday – Thursday: 8:00 AM – 6:00 PM' },
            ].map(({ icon: Icon, label, val, href }) => (
              <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, background: '#EEF2F9', border: '1px solid #DDE3EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={16} style={{ color: '#1B3D8C' }} />
                </div>
                <div>
                  <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2196C4', marginBottom: '0.25rem' }}>{label}</p>
                  {href
                    ? <a href={href} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.875rem', color: '#0F1F3D', textDecoration: 'none', fontWeight: 400 }}>{val}</a>
                    : <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.875rem', color: '#5A6A85', fontWeight: 300, lineHeight: 1.6 }}>{val}</p>
                  }
                </div>
              </div>
            ))}
          </div>

          <div className="sr d2">
            {sent ? (
              <div style={{ border: '1px solid #DDE3EE', padding: '3.5rem', textAlign: 'center', background: 'white' }}>
                <CheckCircle size={44} style={{ color: '#2196C4', margin: '0 auto 1rem', display: 'block' }} />
                <h3 className="font-display" style={{ fontSize: '1.75rem', fontWeight: 500, color: '#0F1F3D', marginBottom: '0.5rem' }}>Message Received</h3>
                <p style={{ fontFamily: 'Outfit, sans-serif', color: '#5A6A85', fontSize: '0.9rem', fontWeight: 300 }}>Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'white', padding: '2rem', border: '1px solid #DDE3EE' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <style>{`@media(max-width:500px){ .form-row{ grid-template-columns:1fr !important; } }`}</style>
                  {field('Full Name *', 'name', 'text', 'Your name', true)}
                  {field('Email *', 'email', 'email', 'your@email.com', true)}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  {field('Phone', 'phone', 'tel', '+971 ...', false)}
                  <div>
                    <label style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#5A6A85', display: 'block', marginBottom: '0.4rem' }}>Service Required</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                      style={{ width: '100%', background: 'white', border: '1px solid #DDE3EE', color: form.service ? '#0F1F3D' : '#5A6A85', fontSize: '0.875rem', padding: '0.75rem 1rem', outline: 'none', fontFamily: 'Outfit, sans-serif', appearance: 'none', transition: 'border-color 0.2s' }}
                      onFocus={e => e.target.style.borderColor = '#2196C4'}
                      onBlur={e => e.target.style.borderColor = '#DDE3EE'}>
                      <option value="">Select a service</option>
                      <option>Authority Approvals</option>
                      <option>Architectural Design</option>
                      <option>Planning & Master Planning</option>
                      <option>Project Supervision</option>
                      <option>Interior Design</option>
                      <option>MEP Engineering</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#5A6A85', display: 'block', marginBottom: '0.4rem' }}>Project Details *</label>
                  <textarea required rows={5} placeholder="Tell us about your project — location, scope, timeline..." value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: '100%', background: 'white', border: '1px solid #DDE3EE', color: '#0F1F3D', fontSize: '0.875rem', padding: '0.75rem 1rem', outline: 'none', fontFamily: 'Outfit, sans-serif', resize: 'none', transition: 'border-color 0.2s' }}
                    onFocus={e => e.target.style.borderColor = '#2196C4'}
                    onBlur={e => e.target.style.borderColor = '#DDE3EE'} />
                </div>
                <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                  Send Enquiry <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
