"use client";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#0F1F3D", color: "rgba(255,255,255,0.65)" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "4rem 1.5rem 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "3rem",
        }}
      >
       <div>
          <div
            style={{
              marginBottom: "1.25rem",
              display: "inline-block",
              background: "white",
              padding: "0.5rem 0.9rem",
            }}
          >
            <Image
              src="/logo.png"
              alt="AL Wasel Engineering Consultancy"
              width={130}
              height={52}
              style={{ objectFit: "contain", display: "block" }}
            />
          </div>
          <p
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "0.875rem",
              lineHeight: 1.7,
              fontWeight: 300,
              marginBottom: "1.25rem",
              maxWidth: 260,
            }}
          >
            A leading UAE engineering consultancy delivering precision-driven
            architectural and engineering solutions from Fujairah.
          </p>
          <div style={{ width: 36, height: 2, background: "#2196C4" }} />
        </div>

        <div>
          <h4
            style={{
              fontFamily: "Outfit, sans-serif",
              fontWeight: 600,
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "white",
              marginBottom: "1.25rem",
            }}
          >
            Quick Links
          </h4>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.65rem",
            }}
          >
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Services", "/services"],
              ["Projects", "/projects"],
              ["Contact", "/contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <Link
                  href={h}
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#4FB8E0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                  }
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4
            style={{
              fontFamily: "Outfit, sans-serif",
              fontWeight: 600,
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "white",
              marginBottom: "1.25rem",
            }}
          >
            Services
          </h4>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.65rem",
            }}
          >
            {[
              "Authority Approvals",
              "Architectural Design",
              "Planning & Master Planning",
              "Project Supervision",
              "Interior Design",
              "MEP Engineering",
            ].map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#4FB8E0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                  }
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4
            style={{
              fontFamily: "Outfit, sans-serif",
              fontWeight: 600,
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "white",
              marginBottom: "1.25rem",
            }}
          >
            Contact
          </h4>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {[
              {
                Icon: Mail,
                v: "alwaselconsultancy@gmail.com",
                href: "mailto:alwaselconsultancy@gmail.com",
              },
              { Icon: Phone, v: "+971 55 194 8383", href: "tel:+971551948383" },
              {
                Icon: Mail,
                v: "info@alwaselfuj.com",
                href: "mailto:info@alwaselfuj.com",
              },
            ].map(({ Icon, v, href }, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                }}
              >
                <Icon
                  size={13}
                  style={{ color: "#2196C4", flexShrink: 0, marginTop: 2 }}
                />
                {href ? (
                  <a
                    href={href}
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                    }}
                  >
                    {v}
                  </a>
                ) : (
                  <span
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 300,
                      lineHeight: 1.6,
                    }}
                  >
                    {v}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: "0.6rem", marginTop: "1.25rem" }}>
            <a
              href="https://www.instagram.com/alwaselfuj/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 34,
                height: 34,
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#E1306C";
                e.currentTarget.style.color = "#E1306C";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1.5"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/alwaselfuj/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 34,
                height: 34,
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#1877F2";
                e.currentTarget.style.color = "#1877F2";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "1.25rem 1.5rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "0.5rem",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "0.78rem",
            fontWeight: 300,
            color: "rgba(255,255,255,0.35)",
          }}
        >
          © {new Date().getFullYear()} AL Wasel Engineering Consultancy. All
          rights reserved.
        </p>
        <p
          style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "0.78rem",
            fontWeight: 300,
            color: "rgba(255,255,255,0.35)",
          }}
        >
          Fujairah · United Arab Emirates
        </p>
      </div>
    </footer>
  );
}
