"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Compass,
  ClipboardCheck,
  Paintbrush,
  Zap,
  FileCheck,
} from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Authority Approvals",
    desc: "Full permit and approval management across all Fujairah authorities — from first submission to final sign-off.",
    authorities: [
      "Government of Fujairah",
      "Etihad Water and Electricity",
      "Etisalat and du",
      "Civil Defence Fujairah",
      "Tanqia Water Treatment",
    ],
  },
  {
    icon: Building2,
    title: "Architectural Design",
    desc: "End-to-end architectural design from initial concept to construction documents — residential, commercial, and government projects across Fujairah.",
  },
  {
    icon: Compass,
    title: "Planning & Master Planning",
    desc: "Strategic site planning that balances land use, functionality, and regulatory compliance for sustainable Fujairah development.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Supervision",
    desc: "Rigorous on-site supervision ensuring your project meets approved designs, quality benchmarks, and UAE construction standards.",
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    desc: "Refined interior environments for villas, offices, retail, and hospitality — from space planning and material selection to full fit-out.",
  },
  {
    icon: Zap,
    title: "MEP Engineering",
    desc: "Comprehensive Mechanical, Electrical, and Plumbing engineering — fully coordinated for efficient, code-compliant building systems.",
  },
];

export default function Services() {
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
        background: "white",
        borderTop: "4px solid #1B3D8C",
        padding: "5rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="eyebrow sr" style={{ marginBottom: "0.75rem" }}>
            What We Offer
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
            Services Across
            <br />
            <em
              style={{ fontStyle: "italic", fontWeight: 300, color: "#2196C4" }}
            >
              Fujairah
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
            An integrated suite of engineering and design services — all
            delivered from our Fujairah office.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "1px",
            background: "#DDE3EE",
          }}
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className={`sr-scale d${(i % 3) + 1}`}
                style={{
                  background: "white",
                  padding: "2.25rem",
                  transition: "background 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#F8FAFD";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "white";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: "#EEF2F9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                    border: "1px solid #DDE3EE",
                  }}
                >
                  <Icon size={20} style={{ color: "#1B3D8C" }} />
                </div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    color: "#0F1F3D",
                    marginBottom: "0.75rem",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Outfit,sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    color: "#5A6A85",
                    lineHeight: 1.7,
                    marginBottom: s.authorities ? "1rem" : 0,
                  }}
                >
                  {s.desc}
                </p>
                {s.authorities && (
                  <ul style={{ listStyle: "none", marginTop: "0.75rem" }}>
                    {s.authorities.map((a) => (
                      <li
                        key={a}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          fontFamily: "Outfit,sans-serif",
                          fontSize: "0.78rem",
                          color: "#1B3D8C",
                          fontWeight: 500,
                          marginBottom: "0.35rem",
                        }}
                      >
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            background: "#2196C4",
                            borderRadius: "50%",
                            flexShrink: 0,
                          }}
                        />
                        {a}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        <div
          style={{ textAlign: "center", marginTop: "2.5rem" }}
          className="sr"
        >
          <Link href="/services" className="btn-primary">
            All Services <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
