"use client";
import { useEffect, useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "971551948383";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello AL Wasel Engineering Consultancy, I would like to enquire about your services.",
);

export default function ContactSection() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            e.target
              .querySelectorAll(".sr,.sr-left,.sr-right,.sr-scale")
              .forEach((el) => el.classList.add("in"));
        }),
      { threshold: 0.08 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "#F8FAFD",
        borderTop: "1px solid #DDE3EE",
        padding: "5rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="eyebrow sr" style={{ marginBottom: "0.75rem" }}>
            Contact Us
          </p>
          <h2
            className="font-display sr d1"
            style={{
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 500,
              color: "#0F1F3D",
              lineHeight: 1.15,
            }}
          >
            Let's Build Something
            <br />
            <em
              style={{ fontStyle: "italic", fontWeight: 300, color: "#2196C4" }}
            >
              Remarkable
            </em>
          </h2>
          <p
            className="sr d2"
            style={{
              fontFamily: "Outfit,sans-serif",
              fontWeight: 300,
              fontSize: "0.95rem",
              color: "#5A6A85",
              maxWidth: 480,
              margin: "1rem auto 0",
              lineHeight: 1.75,
            }}
          >
            Reach out to us directly on WhatsApp or give us a call — our team
            typically responds within minutes.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}}`}</style>

          {/* ── Left: contact info ── */}
          <div
            className="sr"
            style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}
          >
            {/* Address */}
            <div
              style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: "#EEF2F9",
                  border: "1px solid #DDE3EE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <MapPin size={16} style={{ color: "#1B3D8C" }} />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Outfit,sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#2196C4",
                    marginBottom: "0.3rem",
                  }}
                >
                  Office
                </p>
                <p
                  style={{
                    fontFamily: "Outfit,sans-serif",
                    fontSize: "0.875rem",
                    color: "#5A6A85",
                    fontWeight: 300,
                    lineHeight: 1.7,
                  }}
                >
                  Emirates Islamic Bank Building
                  <br />
                  Mershid - Hamad Bin Abdulla Rd
                  <br />
                  Fujairah - United Arab Emirates
                </p>
              </div>
            </div>

            {/* Phone */}
            <div
              style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: "#EEF2F9",
                  border: "1px solid #DDE3EE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <Phone size={16} style={{ color: "#1B3D8C" }} />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Outfit,sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#2196C4",
                    marginBottom: "0.3rem",
                  }}
                >
                  Phone
                </p>
                <a
                  href="tel:+971551948383"
                  style={{
                    fontFamily: "Outfit,sans-serif",
                    fontSize: "0.875rem",
                    color: "#0F1F3D",
                    textDecoration: "none",
                    fontWeight: 400,
                  }}
                >
                  +971 55 194 8383
                </a>
              </div>
            </div>

            {/* Email */}
            <div
              style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: "#EEF2F9",
                  border: "1px solid #DDE3EE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <Mail size={16} style={{ color: "#1B3D8C" }} />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Outfit,sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#2196C4",
                    marginBottom: "0.3rem",
                  }}
                >
                  Email
                </p>
                <a
                  href="mailto:alwaselconsultancy@gmail.com"
                  style={{
                    fontFamily: "Outfit,sans-serif",
                    fontSize: "0.875rem",
                    color: "#0F1F3D",
                    textDecoration: "none",
                    fontWeight: 400,
                  }}
                >
                  alwaselconsultancy@gmail.com
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div
              style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: "#EEF2F9",
                  border: "1px solid #DDE3EE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <Clock size={16} style={{ color: "#1B3D8C" }} />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Outfit,sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#2196C4",
                    marginBottom: "0.5rem",
                  }}
                >
                  Working Hours
                </p>
                <table
                  style={{
                    borderCollapse: "collapse",
                    fontFamily: "Outfit,sans-serif",
                    fontSize: "0.82rem",
                  }}
                >
                  <tbody>
                    {[
                      {
                        day: "Monday",
                        hours: "8:00am – 1:30pm, 5:00 – 8:30pm",
                      },
                      {
                        day: "Tuesday",
                        hours: "8:00am – 1:30pm, 5:00 – 8:30pm",
                      },
                      {
                        day: "Wednesday",
                        hours: "8:00am – 1:30pm, 5:00 – 8:30pm",
                      },
                      {
                        day: "Thursday",
                        hours: "8:00am – 1:30pm, 5:00 – 8:30pm",
                      },
                      { day: "Friday", hours: "8:00am – 11:00am" },
                      { day: "Saturday", hours: "Closed", closed: true },
                      {
                        day: "Sunday",
                        hours: "8:00am – 1:30pm, 5:00 – 8:30pm",
                      },
                    ].map(({ day, hours, closed }) => (
                      <tr key={day}>
                        <td
                          style={{
                            paddingRight: "1.25rem",
                            paddingBottom: "0.25rem",
                            color: "#0F1F3D",
                            fontWeight: 500,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {day}
                        </td>
                        <td
                          style={{
                            paddingBottom: "0.25rem",
                            color: closed ? "#E05A5A" : "#5A6A85",
                            fontWeight: 300,
                          }}
                        >
                          {hours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Social links */}
            <div
              style={{ display: "flex", gap: "0.75rem", paddingTop: "0.25rem" }}
            >
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/alwaselfuj/",
                  color: "#E1306C",
                  icon: (
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle
                        cx="17.5"
                        cy="6.5"
                        r="1.5"
                        fill="currentColor"
                        stroke="none"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/alwaselfuj/",
                  color: "#1877F2",
                  icon: (
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 40,
                    height: 40,
                    border: "1px solid #DDE3EE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#5A6A85",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = s.color;
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.background = "#f8f0f4";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#DDE3EE";
                    e.currentTarget.style.color = "#5A6A85";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: WhatsApp + Call ── */}
          <div
            className="sr d2"
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {/* WhatsApp button */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                padding: "1.75rem 2rem",
                background: "#25D366",
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 24px rgba(37,211,102,0.28)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1ebe5d";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(37,211,102,0.38)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#25D366";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 24px rgba(37,211,102,0.28)";
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MessageCircle size={26} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontFamily: "Outfit,sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "white",
                    marginBottom: "0.2rem",
                  }}
                >
                  Chat on WhatsApp
                </p>
                <p
                  style={{
                    fontFamily: "Outfit,sans-serif",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  +971 55 194 8383 · Typically replies in minutes
                </p>
              </div>
              <ArrowRight size={20} color="rgba(255,255,255,0.8)" />
            </a>

            {/* Quick enquiry shortcuts */}
            <div>
              <p
                style={{
                  fontFamily: "Outfit,sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#5A6A85",
                  marginBottom: "0.75rem",
                }}
              >
                Quick Enquiries
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {[
                  "I need authority approval services",
                  "I need architectural design services",
                  "I need MEP engineering services",
                  "I need interior design services",
                  "I need project supervision services",
                ].map((msg) => (
                  <a
                    key={msg}
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.75rem 1rem",
                      background: "white",
                      border: "1px solid #DDE3EE",
                      textDecoration: "none",
                      transition: "all 0.2s",
                      gap: "0.75rem",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#25D366";
                      e.currentTarget.style.background = "#f0fff5";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#DDE3EE";
                      e.currentTarget.style.background = "white";
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Outfit,sans-serif",
                        fontSize: "0.85rem",
                        color: "#0F1F3D",
                        fontWeight: 400,
                      }}
                    >
                      {msg}
                    </span>
                    <MessageCircle
                      size={14}
                      style={{ color: "#25D366", flexShrink: 0 }}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Direct call button */}
            <a
              href="tel:+971551948383"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem",
                padding: "0.9rem",
                background: "transparent",
                border: "1.5px solid #1B3D8C",
                textDecoration: "none",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1B3D8C";
                e.currentTarget.querySelector("span").style.color = "white";
                e.currentTarget.querySelector("svg").style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.querySelector("span").style.color = "#1B3D8C";
                e.currentTarget.querySelector("svg").style.color = "#1B3D8C";
              }}
            >
              <Phone
                size={16}
                style={{ color: "#1B3D8C", transition: "color 0.25s" }}
              />
              <span
                style={{
                  fontFamily: "Outfit,sans-serif",
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#1B3D8C",
                  transition: "color 0.25s",
                }}
              >
                Call Us — +971 55 194 8383
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
