:root {
  --bg: #07111f;
  --bg-soft: #0d1b2f;
  --card: #10243f;
  --card-2: #132b4b;
  --text: #edf4ff;
  --muted: #bfd0ea;
  --line: rgba(255,255,255,0.08);
  --primary: #22c7f0;
  --primary-dark: #109ec2;
  --white: #ffffff;
  --shadow: 0 20px 60px rgba(0,0,0,0.25);
  --radius: 18px;
  --radius-sm: 12px;
  --max: 1180px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #07111f 0%, #081527 40%, #091a2f 100%);
  color: var(--text);
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(92%, var(--max));
  margin: 0 auto;
}

.section {
  padding: 90px 0;
}

.section-alt {
  background: rgba(255,255,255,0.02);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.eyebrow {
  color: var(--primary);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 12px;
  font-size: 0.9rem;
}

h1, h2, h3, h4 {
  font-family: "Poppins", sans-serif;
  line-height: 1.15;
}

h1 {
  font-size: clamp(2.2rem, 5vw, 4.2rem);
  margin-bottom: 18px;
}

h2 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  margin-bottom: 16px;
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 12px;
}

p {
  color: var(--muted);
}

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(7, 17, 31, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}

.nav {
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 1.1rem;
}

.logo-mark {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), #78e6ff);
  color: #06253a;
  font-size: 1.1rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-links a {
  color: var(--muted);
  font-weight: 500;
}

.nav-links a:hover {
  color: var(--white);
}

.menu-toggle {
  display: none;
  background: transparent;
  color: var(--white);
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 22px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--primary), #6fe6ff);
  color: #06253a;
  font-weight: 800;
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow);
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-sm {
  padding: 10px 18px;
}

.btn-outline {
  background: transparent;
  color: var(--white);
  border: 1px solid rgba(255,255,255,0.18);
  box-shadow: none;
}

.btn-outline.light {
  border-color: rgba(255,255,255,0.35);
}

.btn.full {
  width: 100%;
}

.hero {
  padding: 70px 0 40px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.9fr;
  gap: 36px;
  align-items: center;
}

.hero-sub {
  max-width: 700px;
  font-size: 1.05rem;
  margin-bottom: 28px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 24px;
}

.hero-contact {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  color: var(--muted);
  font-size: 0.96rem;
}

.hero-card {
  position: relative;
}

.card-glow {
  position: absolute;
  inset: auto 10% -20px 10%;
  height: 40px;
  background: rgba(34, 199, 240, 0.35);
  filter: blur(30px);
}

.hero-panel {
  position: relative;
  background: linear-gradient(180deg, rgba(16, 36, 63, 0.95), rgba(12, 28, 48, 0.98));
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 30px;
  box-shadow: var(--shadow);
}

.panel-title {
  color: var(--white);
  font-weight: 700;
  margin-bottom: 16px;
}

.hero-panel ul {
  list-style: none;
  display: grid;
  gap: 14px;
}

.hero-panel li {
  color: var(--muted);
  padding-left: 18px;
  position: relative;
}

.hero-panel li::before {
  content: "•";
  color: var(--primary);
  position: absolute;
  left: 0;
}

.mini-link {
  display: inline-block;
  margin-top: 20px;
  color: var(--primary);
  font-weight: 700;
}

.trust-strip {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
}

.trust-items {
  padding: 18px 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 14px;
  text-align: center;
  color: var(--muted);
  font-size: 0.95rem;
}

.section-head {
  max-width: 820px;
  margin-bottom: 38px;
}

.services-grid,
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.service-card,
.portfolio-card,
.about-box,
.contact-form {
  background: linear-gradient(180deg, rgba(16, 36, 63, 0.92), rgba(13, 28, 47, 0.98));
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.service-card {
  padding: 28px;
}

.service-card .icon {
  font-size: 1.7rem;
  margin-bottom: 14px;
}

.about-grid,
.contact-grid,
.cta-box {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: start;
}

.about-box {
  padding: 28px;
}

.about-box ul {
  list-style: none;
  display: grid;
  gap: 14px;
}

.about-box li {
  color: var(--muted);
  padding-left: 18px;
  position: relative;
}

.about-box li::before {
  content: "✓";
  color: var(--primary);
  position: absolute;
  left: 0;
}

.portfolio-card {
  padding: 28px;
}

.tag {
  display: inline-block;
  margin-bottom: 12px;
  font-size: 0.85rem;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(34, 199, 240, 0.12);
  color: var(--primary);
  font-weight: 700;
}

.cta {
  padding: 20px 0 0;
}

.cta-box {
  background: linear-gradient(135deg, #0f3d91, #0c285a);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 28px;
  padding: 34px;
  box-shadow: var(--shadow);
}

.cta-box p {
  color: #e8f3ff;
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: flex-end;
  align-items: center;
}

.contact-info {
  margin-top: 24px;
  display: grid;
  gap: 16px;
}

.contact-item strong {
  display: block;
  color: var(--white);
  margin-bottom: 4px;
}

.contact-form {
  padding: 26px;
}

.contact-form label {
  display: block;
  margin-bottom: 14px;
  color: var(--white);
  font-weight: 600;
  font-size: 0.95rem;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  margin-top: 8px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  padding: 14px 16px;
  color: var(--white);
  outline: none;
  font: inherit;
}

.contact-form textarea {
  resize: vertical;
}

.form-note {
  margin-top: 12px;
  font-size: 0.9rem;
}

.footer {
  margin-top: 40px;
  border-top: 1px solid var(--line);
  background: #06101d;
}

.footer-grid {
  padding: 40px 0 24px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 0.8fr;
  gap: 24px;
}

.footer h3,
.footer h4 {
  margin-bottom: 12px;
}

.footer a,
.footer p {
  display: block;
  margin-bottom: 10px;
  color: var(--muted);
}

.footer-bottom {
  padding: 16px 0 30px;
  border-top: 1px solid var(--line);
}

@media (max-width: 1024px) {
  .hero-grid,
  .about-grid,
  .contact-grid,
  .cta-box,
  .services-grid,
  .portfolio-grid,
  .footer-grid,
  .trust-items {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 760px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 76px;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    padding: 20px;
    background: #07111f;
    border-bottom: 1px solid var(--line);
  }

  .nav-links.open {
    display: flex;
  }

  .hero-grid,
  .about-grid,
  .contact-grid,
  .cta-box,
  .services-grid,
  .portfolio-grid,
  .footer-grid,
  .trust-items {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 72px 0;
  }

  .hero {
    padding-top: 50px;
  }

  .cta-actions {
    justify-content: flex-start;
  }
}
