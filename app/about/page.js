"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const timeline = [
  {
    year: "2009",
    event:
      "AL Wasel founded in Fujairah by senior engineer architects with a vision for precision-led consultancy in the Northern Emirates.",
  },
  {
    year: "2012",
    event:
      "Expanded services into full MEP design and comprehensive project supervision, serving developers and government clients across Fujairah.",
  },
  {
    year: "2016",
    event:
      "Delivered our 100th project — a landmark commercial complex in Fujairah — cementing our reputation as the emirate's trusted engineering partner.",
  },
  {
    year: "2020",
    event:
      "Launched dedicated Interior Design and Sustainability & Green Building divisions to meet growing demand.",
  },
  {
    year: "2024",
    event:
      "Over 200 completed projects. Trusted by leading developers, government bodies, and private clients across Fujairah.",
  },
];

const values = [
  {
    title: "Integrity",
    desc: "Operating with the highest ethical standards — transparent, honest, and accountable in every client relationship.",
  },
  {
    title: "Precision",
    desc: "Every detail meticulously engineered. Excellence lives in the details others overlook.",
  },
  {
    title: "Collaboration",
    desc: "Strong partnerships with clients and our team to achieve the best outcomes on every project.",
  },
  {
    title: "Innovation",
    desc: "Embracing technology and forward-thinking methodologies to push the boundaries of engineering.",
  },
  {
    title: "Sustainability",
    desc: "Integrating responsible practices — building for today without compromising tomorrow.",
  },
  {
    title: "Commitment",
    desc: "Dedicated to exceptional service and lasting relationships based on trust and excellence.",
  },
];

function useReveal(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            e.target
              .querySelectorAll(".sr,.sr-left,.sr-right,.sr-scale")
              .forEach((el) => el.classList.add("in"));
        }),
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

export default function AboutPage() {
  const r1 = useRef(null),
    r2 = useRef(null),
    r3 = useRef(null),
    r4 = useRef(null);
  useReveal(r1);
  useReveal(r2);
  useReveal(r3);
  useReveal(r4);

  return (
    <div style={{ paddingTop: 80, minHeight: "100vh", background: "#F8FAFD" }}>
      {/* Hero banner */}
      <section
        style={{
          background: "linear-gradient(135deg,#0F1F3D 0%,#1B3D8C 100%)",
          padding: "5rem 2rem",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-5%",
            top: "-20%",
            width: "50%",
            height: "140%",
            background: "rgba(33,150,196,0.07)",
            transform: "skewX(-12deg)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 1280, margin: "0 auto" }} ref={r1}>
          <p
            className="eyebrow sr"
            style={{ color: "#7DD4F4", marginBottom: "0.9rem" }}
          >
            Who We Are
          </p>
          <h1
            className="font-display sr-left d1"
            style={{
              fontSize: "clamp(2.5rem,6vw,5rem)",
              fontWeight: 400,
              color: "white",
              lineHeight: 1.08,
              maxWidth: 640,
            }}
          >
            Engineering Excellence.
            <br />
            <em
              style={{ fontStyle: "italic", fontWeight: 300, color: "#7DD4F4" }}
            >
              Fujairah Heritage.
            </em>
          </h1>
          <p
            className="sr d2"
            style={{
              fontFamily: "Outfit,sans-serif",
              fontWeight: 300,
              fontSize: "1rem",
              color: "rgba(255,255,255,0.62)",
              maxWidth: 520,
              marginTop: "1.25rem",
              lineHeight: 1.8,
            }}
          >
            AL Wasel Engineering Consultancy is a fully licensed UAE engineering
            firm based in Fujairah, delivering integrated design and engineering
            services with a steadfast commitment to quality and client
            partnership.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section
        style={{ padding: "5rem 2rem", borderBottom: "1px solid #DDE3EE" }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "#DDE3EE",
          }}
          ref={r2}
          className="mv-grid"
        >
          <style>{`@media(max-width:768px){.mv-grid{grid-template-columns:1fr!important}}`}</style>
          {[
            {
              label: "Our Mission",
              text: "To deliver engineering consultancy services of the highest standard — combining technical expertise with innovative design to create built environments that endure and inspire across Fujairah.",
            },
            {
              label: "Our Vision",
              text: "To be the most trusted engineering consultancy in Fujairah, recognised for our precision, professionalism, and the lasting value we create for our clients and the communities we serve.",
            },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`sr-${i === 0 ? "left" : "right"} d${i + 1}`}
              style={{ background: "white", padding: "3rem" }}
            >
              <div
                style={{
                  width: 36,
                  height: 2,
                  background: "#2196C4",
                  marginBottom: "1.5rem",
                }}
              />
              <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: "Outfit,sans-serif",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "#5A6A85",
                  lineHeight: 1.8,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section
        style={{
          background: "#EEF2F9",
          padding: "5rem 2rem",
          borderBottom: "1px solid #DDE3EE",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }} ref={r3}>
          <p className="eyebrow sr" style={{ marginBottom: "0.75rem" }}>
            Our Foundation
          </p>
          <h2
            className="font-display sr-left d1"
            style={{
              fontSize: "clamp(1.8rem,3vw,2.6rem)",
              fontWeight: 500,
              color: "#0F1F3D",
              marginBottom: "3rem",
            }}
          >
            Core Values That{" "}
            <em
              style={{ fontStyle: "italic", fontWeight: 300, color: "#2196C4" }}
            >
              Guide Us
            </em>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "1px",
              background: "#DDE3EE",
            }}
          >
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`sr d${(i % 3) + 1}`}
                style={{ background: "#EEF2F9", padding: "2.25rem" }}
              >
                <div
                  style={{
                    width: 28,
                    height: 2,
                    background: "#1B3D8C",
                    marginBottom: "1.25rem",
                  }}
                />
                <h3
                  className="font-display"
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    color: "#0F1F3D",
                    marginBottom: "0.6rem",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Outfit,sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    color: "#5A6A85",
                    lineHeight: 1.7,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: "white", padding: "5rem 2rem" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          ref={r4}
          className="tl-grid"
        >
          <style>{`@media(max-width:768px){.tl-grid{grid-template-columns:1fr!important;gap:2.5rem!important}}`}</style>
          <div>
            <p className="eyebrow sr" style={{ marginBottom: "0.75rem" }}>
              Our Journey
            </p>
            <h2
              className="font-display sr-left d1"
              style={{
                fontSize: "clamp(1.8rem,3vw,2.6rem)",
                fontWeight: 500,
                color: "#0F1F3D",
                marginBottom: "1rem",
              }}
            >
              Milestones That{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "#2196C4",
                }}
              >
                Define Us
              </em>
            </h2>
            <p
              className="sr d2"
              style={{
                fontFamily: "Outfit,sans-serif",
                fontSize: "0.95rem",
                fontWeight: 300,
                color: "#5A6A85",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              Over 15 years delivering engineering excellence across Fujairah —
              growing from a single-office consultancy into the Northern
              Emirates' most trusted multi-discipline practice.
            </p>
            <Link href="/contact" className="btn-primary sr d3">
              Work With Us <ArrowRight size={14} />
            </Link>
          </div>
          <div
            style={{ borderLeft: "2px solid #DDE3EE", paddingLeft: "2.5rem" }}
          >
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`sr d${i + 1}`}
                style={{
                  paddingBottom: i < timeline.length - 1 ? "2.25rem" : 0,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "-2.88rem",
                    top: 4,
                    width: 16,
                    height: 16,
                    border: "2px solid #2196C4",
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: 6, height: 6, background: "#2196C4" }} />
                </div>
                <p
                  className="font-display"
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    color: "#1B3D8C",
                    marginBottom: "0.35rem",
                  }}
                >
                  {item.year}
                </p>
                <p
                  style={{
                    fontFamily: "Outfit,sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    color: "#5A6A85",
                    lineHeight: 1.7,
                  }}
                >
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
