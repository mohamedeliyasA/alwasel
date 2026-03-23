"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.45s cubic-bezier(0.16,1,0.3,1)",
          background: transparent ? "transparent" : "rgba(255,255,255,0.98)",
          boxShadow: transparent
            ? "none"
            : "0 1px 0 #DDE3EE, 0 4px 24px rgba(27,61,140,0.07)",
        }}
      >
        {/* Accent line — visible only when solid */}
        <div
          style={{
            height: transparent ? 0 : 3,
            background: "linear-gradient(90deg,#1B3D8C 0%,#2196C4 100%)",
            transition: "height 0.4s ease",
            overflow: "hidden",
          }}
        />

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: transparent ? "0.9rem 2rem" : "0.55rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "padding 0.4s ease",
          }}
        >
          {/* Logo — always shown as-is, no filter */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                background: transparent
                  ? "rgba(255,255,255,0.92)"
                  : "transparent",
                backdropFilter: transparent ? "blur(8px)" : "none",
                padding: transparent ? "0.35rem 0.75rem" : "0",
                borderRadius: transparent ? 3 : 0,
                boxShadow: transparent ? "0 2px 16px rgba(0,0,0,0.20)" : "none",
                transition: "all 0.4s ease",
              }}
            >
              <Image
                src="/logo.png"
                alt="AL Wasel Engineering Consultancy"
                width={transparent ? 120 : 105}
                height={transparent ? 48 : 42}
                style={{
                  objectFit: "contain",
                  display: "block",
                  transition: "all 0.4s ease",
                }}
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex"
            style={{ alignItems: "center", gap: 0 }}
          >
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0.45rem 1rem",
                    fontFamily: "Outfit, sans-serif",
                    fontWeight: active ? 600 : 500,
                    fontSize: "0.82rem",
                    letterSpacing: "0.04em",
                    textDecoration: "none",
                    color: transparent
                      ? active
                        ? "white"
                        : "rgba(255,255,255,0.85)"
                      : active
                        ? "#1B3D8C"
                        : "#3D4F6B",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = transparent
                      ? "white"
                      : "#1B3D8C")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = transparent
                      ? active
                        ? "white"
                        : "rgba(255,255,255,0.85)"
                      : active
                        ? "#1B3D8C"
                        : "#3D4F6B")
                  }
                >
                  {l.label}
                  {active && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "1rem",
                        right: "1rem",
                        height: 2,
                        background: transparent
                          ? "rgba(255,255,255,0.8)"
                          : "#2196C4",
                        borderRadius: 1,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            <div
              style={{
                width: 1,
                height: 16,
                background: transparent ? "rgba(255,255,255,0.25)" : "#DDE3EE",
                margin: "0 0.6rem",
              }}
            />

            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                padding: "0.48rem 1.3rem",
                fontFamily: "Outfit, sans-serif",
                fontWeight: 600,
                fontSize: "0.76rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: 2,
                transition: "all 0.25s ease",
                ...(transparent
                  ? {
                      color: "#0F1F3D",
                      background: "white",
                      boxShadow: "0 2px 14px rgba(0,0,0,0.22)",
                      border: "1.5px solid white",
                    }
                  : {
                      color: "white",
                      background:
                        "linear-gradient(135deg,#1B3D8C 0%,#2451AE 100%)",
                      boxShadow: "0 2px 10px rgba(27,61,140,0.28)",
                      border: "1.5px solid transparent",
                    }),
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(27,61,140,0.36)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = transparent
                  ? "0 2px 14px rgba(0,0,0,0.22)"
                  : "0 2px 10px rgba(27,61,140,0.28)";
              }}
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: transparent ? "white" : "#1B3D8C",
              padding: "0.25rem",
            }}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 60,
          background: "white",
          display: "flex",
          flexDirection: "column",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 1.5rem",
            borderBottom: "1px solid #DDE3EE",
          }}
        >
          <Image
            src="/logo.png"
            alt="AL Wasel Engineering Consultancy"
            width={110}
            height={44}
            style={{ objectFit: "contain" }}
          />
          <button
            onClick={() => setOpen(false)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#1B3D8C",
            }}
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>
        <nav
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "2rem 1.75rem",
            gap: "0",
          }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "2.25rem",
                fontWeight: 400,
                color: pathname === l.href ? "#1B3D8C" : "#0F1F3D",
                textDecoration: "none",
                lineHeight: 1,
                padding: "0.65rem 0",
                borderBottom: "1px solid #F0F3F9",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div
          style={{
            padding: "1.5rem 1.75rem",
            borderTop: "1px solid #DDE3EE",
            background: "#F8FAFD",
          }}
        >
          <p
            style={{
              fontFamily: "Outfit,sans-serif",
              fontSize: "0.82rem",
              color: "#5A6A85",
              marginBottom: "0.3rem",
            }}
          >
            +971 55 194 8383
          </p>
          <p
            style={{
              fontFamily: "Outfit,sans-serif",
              fontSize: "0.82rem",
              color: "#5A6A85",
            }}
          >
            info@alwaselfuj.com
          </p>
        </div>
      </div>
    </>
  );
}
