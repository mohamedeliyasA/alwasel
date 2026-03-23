"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    number: "01",
    title: "All Authority Approvals",
    tagline: "Every permit. Every authority. Handled.",
    desc: "AL Wasel manages the full authority approval process across Fujairah and the UAE. Navigating the complex submission requirements, fee structures, and multi-agency coordination is our core strength — we ensure your project proceeds without delays or rejections.",
    desc2:
      "We have established working relationships with all key authorities, enabling faster processing and direct follow-up on submissions at every stage.",
    points: [
      "Government of Fujairah — building permits and development approvals",
      "Etihad Water and Electricity — service connection applications and NOCs",
      "Etisalat and du — telecommunications infrastructure approvals",
      "Civil Defence Fujairah — fire safety drawings and clearance certificates",
      "Tanqia Water Treatment — sewage and drainage connection approvals",
      "Complete documentation preparation and submission management",
    ],
    bg: "#EEF2F9",
  },
  {
    number: "02",
    title: "Architectural Design",
    tagline: "From concept to construction documents.",
    desc: "We deliver end-to-end architectural design for residential villas, commercial buildings, mixed-use developments, and government projects across Fujairah and the UAE. Every design is developed with an understanding of the local climate, culture, and regulatory requirements.",
    desc2:
      "Our architects coordinate closely with structural and MEP engineers to produce fully integrated, conflict-free design packages that are ready for authority submission and contractor tender.",
    points: [
      "Concept and schematic design",
      "Design development and 3D visualisation",
      "Full construction documentation",
      "UAE building code compliance",
      "Authority submission drawings",
      "BIM coordination",
    ],
    bg: "white",
  },
  {
    number: "03",
    title: "Planning & Master Planning",
    tagline: "Strategic spatial planning for the UAE.",
    desc: "We provide strategic planning and master planning services for land developments, residential compounds, commercial zones, and mixed-use schemes across Fujairah and the wider UAE. Our planners balance land use efficiency with regulatory compliance and community needs.",
    desc2:
      "From initial feasibility studies through to phased development frameworks, we provide the strategic foundation that maximises land value while meeting all planning authority requirements.",
    points: [
      "Site feasibility and land use analysis",
      "Concept master plans and zoning layouts",
      "Infrastructure and utilities planning",
      "Phasing and development programming",
      "Regulatory and planning authority submissions",
      "Environmental and sustainability considerations",
    ],
    bg: "#EEF2F9",
  },
  {
    number: "04",
    title: "Project Supervision",
    tagline: "Your project, protected on site.",
    desc: "AL Wasel provides rigorous on-site supervision services to ensure every project is built exactly as designed — to specification, on programme, and to the highest quality standards. Our supervisors are on site daily, monitoring work, coordinating trades, and protecting your investment.",
    desc2:
      "We produce regular progress reports, manage contractor instructions, document non-conformances, and coordinate with the relevant authorities for interim and final inspections.",
    points: [
      "Daily on-site supervision and quality control",
      "Contractor and trade coordination",
      "Progress monitoring against approved programme",
      "Non-conformance identification and resolution",
      "RFI and technical query management",
      "Authority inspection coordination and handover",
    ],
    bg: "white",
  },
  {
    number: "05",
    title: "Interior Design",
    tagline: "Spaces designed to impress.",
    desc: "We design refined interior environments for residential villas, corporate offices, retail spaces, and hospitality venues across Fujairah and the UAE. Every interior is developed to reflect the client's vision while delivering practical, high-quality spaces that endure.",
    desc2:
      "Our interior design service covers everything from space planning and concept development through to full material specifications, custom joinery design, lighting design, and FF&E procurement management.",
    points: [
      "Space planning and layout optimisation",
      "Interior concept design and mood boards",
      "Material, finish, and colour specification",
      "Custom furniture and joinery design",
      "Lighting design and specification",
      "FF&E procurement and project coordination",
    ],
    bg: "#EEF2F9",
  },
  {
    number: "06",
    title: "MEP Engineering",
    tagline: "Efficient systems. Intelligent design.",
    desc: "Our MEP team delivers comprehensive Mechanical, Electrical, and Plumbing engineering for all building types across Fujairah and the UAE. All MEP design is fully coordinated with the architectural and structural packages, eliminating clashes before construction begins.",
    desc2:
      "We design for efficiency, compliance, and longevity — using BIM coordination to ensure every system integrates seamlessly into the building, meeting all UAE authority and green building requirements.",
    points: [
      "HVAC system design (central plant, split systems, chilled water)",
      "Electrical load calculations and LV/MV distribution",
      "Plumbing, drainage, and hot water systems",
      "Fire alarm, suppression, and detection systems",
      "ELV systems — CCTV, access control, structured cabling",
      "BIM-coordinated MEP drawings for all authority submissions",
    ],
    bg: "white",
  },
];

function useReveal(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            e.target
              .querySelectorAll(".sr, .sr-left, .sr-right")
              .forEach((el) => el.classList.add("in"));
        }),
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

function ServiceSection({ s }) {
  const ref = useRef(null);
  useReveal(ref);
  return (
    <section
      ref={ref}
      style={{ background: s.bg, borderBottom: "1px solid #DDE3EE" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div
          className="sr"
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "1.5rem",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
          }}
        >
          <span
            className="font-display"
            style={{
              fontSize: "clamp(3rem,7vw,5.5rem)",
              fontWeight: 300,
              color: "#DDE3EE",
              lineHeight: 1,
            }}
          >
            {s.number}
          </span>
          <div>
            <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>
              {s.tagline}
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                fontWeight: 500,
                color: "#0F1F3D",
              }}
            >
              {s.title}
            </h2>
          </div>
        </div>
        <div
          style={{
            width: 48,
            height: 2,
            background: "#2196C4",
            marginBottom: "2.5rem",
          }}
          className="sr d1"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem 5rem",
            alignItems: "start",
          }}
          className="svc-body"
        >
          <style>{`@media(max-width:768px){ .svc-body{ grid-template-columns:1fr !important; } }`}</style>
          <div>
            <p
              className="sr d1"
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "#5A6A85",
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              {s.desc}
            </p>
            <p
              className="sr d2"
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "0.95rem",
                fontWeight: 300,
                color: "#5A6A85",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              {s.desc2}
            </p>
            <Link
              href="/contact"
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#1B3D8C",
                textDecoration: "none",
                letterSpacing: "0.06em",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                transition: "gap 0.3s",
              }}
              className="sr d3"
              onMouseEnter={(e) => (e.currentTarget.style.gap = "0.7rem")}
              onMouseLeave={(e) => (e.currentTarget.style.gap = "0.4rem")}
            >
              Enquire About This Service <ArrowRight size={13} />
            </Link>
          </div>
          <div>
            <p className="eyebrow sr d2" style={{ marginBottom: "1.25rem" }}>
              What's Included
            </p>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {s.points.map((pt, i) => (
                <li
                  key={i}
                  className={`sr d${i + 2}`}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                  }}
                >
                  <CheckCircle
                    size={15}
                    style={{ color: "#2196C4", flexShrink: 0, marginTop: 2 }}
                  />
                  <span
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 300,
                      color: "#5A6A85",
                      lineHeight: 1.6,
                    }}
                  >
                    {pt}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const r = useRef(null);
  useReveal(r);
  return (
    <div style={{ paddingTop: 80, minHeight: "100vh", background: "#F8FAFD" }}>
      <section style={{ background: "#1B3D8C", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }} ref={r}>
          <p
            className="eyebrow sr"
            style={{ color: "#7DD4F4", marginBottom: "1rem" }}
          >
            What We Do
          </p>
          <h1
            className="font-display sr d1"
            style={{
              fontSize: "clamp(2.5rem,6vw,5rem)",
              fontWeight: 400,
              color: "white",
              lineHeight: 1.1,
              maxWidth: 700,
            }}
          >
            Engineering Services
            <br />
            <em
              style={{ fontStyle: "italic", fontWeight: 300, color: "#7DD4F4" }}
            >
              for Fujairah and the UAE
            </em>
          </h1>
          <p
            className="sr d2"
            style={{
              fontFamily: "Outfit, sans-serif",
              fontWeight: 300,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 560,
              marginTop: "1.5rem",
              lineHeight: 1.8,
              fontSize: "1rem",
            }}
          >
            An integrated suite of engineering and design services — from
            authority approvals and architectural design to MEP engineering and
            project supervision — delivered by experienced professionals across
            the UAE.
          </p>
        </div>
      </section>
      {services.map((s) => (
        <ServiceSection key={s.number} s={s} />
      ))}
      <section
        style={{
          background: "#1B3D8C",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          className="eyebrow"
          style={{ color: "rgba(255,255,255,0.5)", marginBottom: "0.75rem" }}
        >
          Ready to Begin?
        </p>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(1.8rem,3vw,2.5rem)",
            fontWeight: 400,
            color: "white",
            marginBottom: "1.25rem",
          }}
        >
          Discuss Your Project With Us
        </h2>
        <p
          style={{
            fontFamily: "Outfit, sans-serif",
            fontWeight: 300,
            color: "rgba(255,255,255,0.6)",
            marginBottom: "2rem",
            maxWidth: 420,
            margin: "0 auto 2rem",
          }}
        >
          Contact our team in Fujairah for a free initial consultation.
        </p>
        <Link href="/contact" className="btn-white">
          Contact Us <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}
