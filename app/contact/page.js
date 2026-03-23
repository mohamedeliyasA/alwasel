import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact | AL Wasel Engineering Consultancy",
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: 80, minHeight: "100vh", background: "#F8FAFD" }}>
      <section style={{ background: "#1B3D8C", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7DD4F4",
              marginBottom: "1rem",
            }}
          >
            Get in Touch
          </p>
          <h1
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.5rem,6vw,5rem)",
              fontWeight: 400,
              color: "white",
              lineHeight: 1.1,
            }}
          >
            Let's Talk About
            <br />
            <em
              style={{ fontStyle: "italic", fontWeight: 300, color: "#7DD4F4" }}
            >
              Your Project
            </em>
          </h1>
          <p
            style={{
              fontFamily: "Outfit, sans-serif",
              fontWeight: 300,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 480,
              marginTop: "1.25rem",
              lineHeight: 1.8,
              fontSize: "1rem",
            }}
          >
            Whether you have a project in mind or want to explore possibilities,
            our team in Fujairah is ready to listen and advise.
          </p>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
